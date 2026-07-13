const fs = require('fs');
const path = require('path');

// Path Configurations
const WORKSPACE_ROOT = path.resolve(__dirname, '..');
const README_PATH = path.join(WORKSPACE_ROOT, 'README.md');
const WEB_DATA_DIR = path.join(WORKSPACE_ROOT, 'web', 'src', 'data');
const AGENTS_JSON = path.join(WEB_DATA_DIR, 'agents.json');
const CATEGORIES_JSON = path.join(WEB_DATA_DIR, 'categories.json');
const TAGS_JSON = path.join(WEB_DATA_DIR, 'tags.json');
const FRAMEWORKS_JSON = path.join(WEB_DATA_DIR, 'frameworks.json');
const LANGUAGES_JSON = path.join(WEB_DATA_DIR, 'languages.json');

// Helper to slugify names
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[-\s]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Clean and validate URL
function cleanUrl(url) {
  url = url.trim();
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    if (url.startsWith('www.')) {
      url = 'https://' + url;
    } else {
      url = 'https://' + url;
    }
  }
  return url;
}

// Clean descriptions
function cleanDescription(desc) {
  desc = desc.trim();
  desc = desc.replace(/—/g, '-');
  if (!desc.endsWith('.')) {
    desc += '.';
  }
  return desc;
}

function parseMarkdown() {
  if (!fs.existsSync(README_PATH)) {
    throw new Error(`README.md not found at ${README_PATH}`);
  }

  const content = fs.readFileSync(README_PATH, 'utf-8');
  const lines = content.split('\n');

  const agents = [];
  let currentCategory = 'General';
  let currentSubcategory = '';

  // Regex Patterns
  const headerPattern = /^(##|###)\s+(.+)$/;
  const standardPattern = /^\s*-\s*\[([^\]]+)\]\(([^\)]+)\)\s*`([^`]+)`\s*`\[([^\]]+)\]`\s*`\[([^\]]+)\]`\s*-\s*(.+)$/;
  const legacyPattern = /^\s*-\s*([^-\(]+)\(?([^\)]*)\)?\s*-\s*([^\(]+)\(🏷️\s*`([^`]+)`\s*`([^`]+)`\s*`([^`]+)`\s*\)\.?$/;
  const plainTextPattern = /^\s*-\s*([^-\(]+)\s*-\s*(.+)$/;

  for (let i = 0; i < lines.length; i++) {
    const lineNum = i + 1;
    const stripped = lines[i].trim();

    // Skip empty lines
    if (!stripped) continue;

    // Track Categories and Subcategories
    const headerMatch = stripped.match(headerPattern);
    if (headerMatch) {
      const [, level, rawTitle] = headerMatch;
      let title = rawTitle.trim();
      // Remove inline links e.g. [Title](#anchor) -> Title
      title = title.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');
      // Remove emojis/special badges
      title = title.replace(/[\u2600-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDC00-\uDFFF]/g, '').trim();

      if (level === '##') {
        if (['Contents', 'Star History', 'Changelog', 'Contributing', 'References'].includes(title)) {
          continue;
        }
        currentCategory = title;
        currentSubcategory = '';
      } else if (level === '###') {
        currentSubcategory = title;
      }
      continue;
    }

    // Process list items
    if (!stripped.startsWith('-')) continue;

    // Skip nested/guideline list items
    if (stripped.startsWith('- **') || stripped.startsWith('- `[')) continue;

    // 1. Match Standard format
    const stdMatch = stripped.match(standardPattern);
    if (stdMatch) {
      const [, name, urlRaw, tierChar, language, frameworkType, descRaw] = stdMatch;
      
      let tier = 'growing';
      if (tierChar.includes('🚀')) {
        tier = 'production-ready';
      } else if (tierChar.includes('🔬')) {
        tier = 'emerging';
      }

      const url = cleanUrl(urlRaw);
      const github = url.includes('github.com') ? url : '';
      const website = !url.includes('github.com') ? url : '';

      agents.push({
        line: lineNum,
        name: name.trim(),
        url,
        github,
        website,
        tier,
        language: language.trim(),
        framework: frameworkType.trim(),
        description: cleanDescription(descRaw),
        category: currentCategory,
        subcategory: currentSubcategory
      });
      continue;
    }

    // 2. Match Legacy format
    const legacyMatch = stripped.match(legacyPattern);
    if (legacyMatch) {
      const [, nameRaw, urlRaw, descRaw, lang, typeTag, frameTag] = legacyMatch;
      
      const url = urlRaw.trim() ? cleanUrl(urlRaw) : '';
      const github = url.includes('github.com') ? url : '';
      const website = !url.includes('github.com') ? url : '';

      agents.push({
        line: lineNum,
        name: nameRaw.trim(),
        url,
        github,
        website,
        tier: 'growing',
        language: lang.trim(),
        framework: frameTag.trim() || typeTag.trim(),
        description: cleanDescription(descRaw),
        category: currentCategory,
        subcategory: currentSubcategory
      });
      continue;
    }

    // 3. Fallback for Plain Text
    const plainMatch = stripped.match(plainTextPattern);
    if (plainMatch) {
      const [, nameRaw, descRaw] = plainMatch;
      let nameClean = nameRaw.trim();
      let url = '';

      const inlineLinkMatch = nameClean.match(/^\[([^\]]+)\]\(([^\)]+)\)$/);
      if (inlineLinkMatch) {
        nameClean = inlineLinkMatch[1];
        url = cleanUrl(inlineLinkMatch[2]);
      }

      // Check for legacy tag suffixes e.g. (🏷️ `Cloud` `Healthcare` `Enterprise`)
      const tagSuffixMatch = descRaw.match(/\(🏷️\s*`([^`]+)`\s*`([^`]+)`\s*`([^`]+)`\s*\)\.?$/);
      let lang = 'No-Code';
      let frame = 'Multi-Agent';
      let cleanDesc = descRaw;

      if (tagSuffixMatch) {
        lang = tagSuffixMatch[1].trim();
        frame = tagSuffixMatch[3].trim();
        cleanDesc = descRaw.slice(0, tagSuffixMatch.index).trim();
      }

      const github = url.includes('github.com') ? url : '';
      const website = !url.includes('github.com') ? url : '';

      agents.push({
        line: lineNum,
        name: nameClean,
        url,
        github,
        website,
        tier: 'growing',
        language: lang,
        framework: frame,
        description: cleanDescription(cleanDesc),
        category: currentCategory,
        subcategory: currentSubcategory
      });
    }
  }

  return agents;
}

function normalizeAndDeduplicate(rawAgents) {
  const normalized = [];

  for (const agent of rawAgents) {
    const { name, url, github, website, tier, language, framework, description, category, subcategory } = agent;
    const baseSlug = slugify(name);
    let slug = baseSlug;
    let counter = 1;
    let isMerged = false;

    // Duplicate & Collision check
    while (true) {
      const existing = normalized.find(a => a.id === slug);
      if (!existing) break;

      // True duplicate: merge details
      if (existing.name.toLowerCase() === name.toLowerCase() || baseSlug === 'yao-agents') {
        if (!existing.github && github) existing.github = github;
        if (!existing.website && website) existing.website = website;
        if (subcategory && !existing.subcategory) existing.subcategory = subcategory;
        
        if (!existing.tags.includes(language)) existing.tags.push(language);
        if (!existing.tags.includes(framework)) existing.tags.push(framework);
        
        isMerged = true;
        break;
      } else {
        // Differentiate slug for collision
        slug = `${baseSlug}-${counter}`;
        counter++;
      }
    }

    if (isMerged) continue;

    const tags = [language, framework];
    const topics = [category.toLowerCase()];
    if (subcategory) {
      topics.push(subcategory.toLowerCase());
    }

    const descLower = description.toLowerCase();
    const frameworkLower = framework.toLowerCase();
    const langLower = language.toLowerCase();

    const mcpSupport = tags.includes('MCP') || frameworkLower.includes('mcp') || descLower.includes('model context protocol');
    const localExecution = tags.includes('Local') || frameworkLower.includes('self-hosted') || descLower.includes('local') || ['c++', 'rust'].includes(langLower);
    const cloudSupport = tags.includes('Cloud') || frameworkLower.includes('serverless') || descLower.includes('saas') || langLower === 'cloud';

    let documentation = '';
    if (descLower.includes('docs') || descLower.includes('documentation')) {
      documentation = url;
    } else if (github) {
      documentation = url.endsWith('/') ? `${url}wiki` : `${url}/wiki`;
    }

    normalized.push({
      id: slug,
      slug,
      name,
      description,
      category,
      subcategory: subcategory || '',
      github,
      website,
      documentation,
      language,
      framework,
      license: github ? 'Open Source' : 'Proprietary',
      tags: Array.from(new Set(tags)),
      topics: Array.from(new Set(topics)),
      stars: null,
      forks: null,
      lastUpdated: null,
      logo: '',
      image: '',
      featured: tier === 'production-ready',
      mcpSupport,
      localExecution,
      cloudSupport
    });
  }

  return normalized;
}

function run() {
  console.log('Extracting AI Agent metadata...');
  const rawRecords = parseMarkdown();
  console.log(`Parsed ${rawRecords.length} raw entries.`);

  const normalized = normalizeAndDeduplicate(rawRecords);
  console.log(`Normalized into ${normalized.length} unique registry objects.`);

  // Categories, Tags, Frameworks, Languages lists
  const categories = new Set();
  const tags = new Set();
  const frameworks = new Set();
  const languages = new Set();

  for (const agent of normalized) {
    if (agent.category) categories.add(agent.category);
    if (agent.subcategory) categories.add(agent.subcategory);
    
    agent.tags.forEach(t => tags.add(t));
    if (agent.framework) frameworks.add(agent.framework);
    if (agent.language) languages.add(agent.language);
  }

  // Create output directories
  if (!fs.existsSync(WEB_DATA_DIR)) {
    fs.mkdirSync(WEB_DATA_DIR, { recursive: true });
  }

  fs.writeFileSync(AGENTS_JSON, JSON.stringify(normalized, null, 2), 'utf-8');
  console.log(`Wrote agents dataset to ${AGENTS_JSON}`);

  fs.writeFileSync(CATEGORIES_JSON, JSON.stringify(Array.from(categories).sort(), null, 2), 'utf-8');
  console.log(`Wrote categories mapping to ${CATEGORIES_JSON}`);

  fs.writeFileSync(TAGS_JSON, JSON.stringify(Array.from(tags).sort(), null, 2), 'utf-8');
  console.log(`Wrote tags list to ${TAGS_JSON}`);

  fs.writeFileSync(FRAMEWORKS_JSON, JSON.stringify(Array.from(frameworks).sort(), null, 2), 'utf-8');
  console.log(`Wrote frameworks list to ${FRAMEWORKS_JSON}`);

  fs.writeFileSync(LANGUAGES_JSON, JSON.stringify(Array.from(languages).sort(), null, 2), 'utf-8');
  console.log(`Wrote languages list to ${LANGUAGES_JSON}`);

  console.log('Extraction pipeline executed successfully!');
}

run();
