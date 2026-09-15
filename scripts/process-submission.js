const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const README_PATH = path.join(__dirname, '..', 'README.md');
const RESOURCES_PATH = path.join(__dirname, '..', 'data', 'resources.json');

function parseGitHubRepo(urlStr) {
  try {
    const url = new URL(urlStr);
    if (url.hostname.includes('github.com')) {
      const parts = url.pathname.split('/').filter(Boolean);
      if (parts.length >= 2) {
        return `${parts[0]}/${parts[1].replace(/\.git$/, '')}`;
      }
    }
  } catch (e) {
    // Ignore invalid URL
  }
  return null;
}

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function setGitHubOutput(key, value) {
  const outputFile = process.env.GITHUB_OUTPUT;
  if (outputFile) {
    fs.appendFileSync(outputFile, `${key}=${value}\n`);
  }
  console.log(`[OUTPUT] ${key}=${value}`);
}

function processSubmission() {
  const issueBody = process.env.ISSUE_BODY || '';
  const issueNumber = process.env.ISSUE_NUMBER || '0';

  if (!issueBody) {
    console.error('❌ Error: ISSUE_BODY environment variable is missing.');
    setGitHubOutput('STATUS', 'INVALID');
    setGitHubOutput('REASON', 'Missing issue body');
    process.exit(1);
  }

  // Parse structured Issue Form fields
  const extractField = (headerName) => {
    const regex = new RegExp(`###\\s+${headerName}\\s*\\n+([^#]+)`, 'i');
    const match = issueBody.match(regex);
    return match ? match[1].trim() : '';
  };

  const name = extractField('Resource Name');
  const rawUrl = extractField('Project URL');
  const resourceType = extractField('Resource Type');
  const category = extractField('Category');
  const tierRaw = extractField('Tier');
  const language = extractField('Primary Language / Technology');
  const rawTags = extractField('Additional Tags');
  const descriptionRaw = extractField('Description');

  console.log('=== SUBMISSION PARSED FIELDS ===');
  console.log(`Name:        "${name}"`);
  console.log(`URL:         "${rawUrl}"`);
  console.log(`Type:        "${resourceType}"`);
  console.log(`Category:    "${category}"`);
  console.log(`Tier:        "${tierRaw}"`);
  console.log(`Language:    "${language}"`);
  console.log(`Tags:        "${rawTags}"`);
  console.log(`Description: "${descriptionRaw}"`);

  // Basic field presence validation
  if (!name || !rawUrl || !category || !tierRaw || !descriptionRaw) {
    console.error('❌ Validation Failed: Missing required fields.');
    setGitHubOutput('STATUS', 'INVALID');
    setGitHubOutput('REASON', 'Missing required fields in submission form.');
    process.exit(0);
  }

  // HTTPS URL check
  if (!rawUrl.startsWith('https://')) {
    console.error('❌ Validation Failed: Project URL must use HTTPS.');
    setGitHubOutput('STATUS', 'INVALID');
    setGitHubOutput('REASON', 'Project URL must start with https://');
    process.exit(0);
  }

  // Description check: no markdown links, period at end
  let description = descriptionRaw.replace(/[\r\n]+/g, ' ').trim();
  if (description.includes('[') || description.includes('](')) {
    console.error('❌ Validation Failed: Description should not contain Markdown links.');
    setGitHubOutput('STATUS', 'INVALID');
    setGitHubOutput('REASON', 'Description must not contain Markdown links.');
    process.exit(0);
  }
  if (!description.endsWith('.')) {
    description += '.';
  }

  // Format Tier Badge
  let tierBadge = '🌱';
  if (tierRaw.includes('🚀') || tierRaw.toLowerCase().includes('production')) {
    tierBadge = '🚀';
  } else if (tierRaw.includes('🔬') || tierRaw.toLowerCase().includes('emerging')) {
    tierBadge = '🔬';
  }

  // Format Tags
  const tagsList = rawTags
    ? rawTags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean)
    : [];

  const mainTag = resourceType || (tagsList.length > 0 ? tagsList[0] : 'Tool');
  const formattedTag = `\`[${mainTag}]\``;

  // Format Markdown Entry
  // e.g. - [LangGraph](https://github.com/langchain-ai/langgraph) `🚀` `[Python]` `[Multi-Agent]` - Description.
  const entryLanguageTag = language ? `\`[${language}]\`` : '`[Cloud]`';
  const entryLine = `- [${name}](${rawUrl}) \`${tierBadge}\` ${entryLanguageTag} ${formattedTag} - ${description}`;

  console.log(`\nGenerated Entry Line:\n${entryLine}\n`);

  // Read README.md
  if (!fs.existsSync(README_PATH)) {
    console.error('❌ Error: README.md not found.');
    setGitHubOutput('STATUS', 'ERROR');
    process.exit(1);
  }

  const readmeContent = fs.readFileSync(README_PATH, 'utf-8');
  const lines = readmeContent.split(/\r?\n/);

  const subRepo = parseGitHubRepo(rawUrl);
  const subSlug = slugify(name);
  const subNameNorm = name.toLowerCase().trim();
  const subUrlNorm = rawUrl.toLowerCase().replace(/\/$/, '').trim();

  // 1. Direct README.md Scan for Deduplication (URL, Repo, Name)
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('- [')) {
      const match = line.match(/^- \[(?<entryName>[^\]]+)\]\((?<entryUrl>[^\)]+)\)/);
      if (match && match.groups) {
        const existingName = match.groups.entryName.trim();
        const existingUrl = match.groups.entryUrl.trim();
        const existingUrlNorm = existingUrl.toLowerCase().replace(/\/$/, '').trim();
        const existingRepo = parseGitHubRepo(existingUrl);

        if (subRepo && existingRepo && subRepo.toLowerCase() === existingRepo.toLowerCase()) {
          console.error(`❌ Duplicate Found in README line ${i + 1}: Repo "${subRepo}".`);
          setGitHubOutput('STATUS', 'DUPLICATE');
          setGitHubOutput('REASON', `GitHub repository \`${subRepo}\` is already listed in README.md (line ${i + 1}).`);
          process.exit(0);
        }
        if (subUrlNorm === existingUrlNorm) {
          console.error(`❌ Duplicate Found in README line ${i + 1}: URL "${rawUrl}".`);
          setGitHubOutput('STATUS', 'DUPLICATE');
          setGitHubOutput('REASON', `Project URL \`${rawUrl}\` is already listed in README.md (line ${i + 1}).`);
          process.exit(0);
        }
        if (subNameNorm === existingName.toLowerCase()) {
          console.error(`❌ Duplicate Found in README line ${i + 1}: Name "${name}".`);
          setGitHubOutput('STATUS', 'DUPLICATE');
          setGitHubOutput('REASON', `Resource name **"${name}"** already exists in README.md (line ${i + 1}).`);
          process.exit(0);
        }
      }
    }
  }

  // 2. Load existing resources.json dataset as secondary check
  if (fs.existsSync(RESOURCES_PATH)) {
    try {
      const data = JSON.parse(fs.readFileSync(RESOURCES_PATH, 'utf-8'));
      const existingResources = data.resources || [];
      for (const r of existingResources) {
        const existingUrlNorm = (r.url || '').toLowerCase().replace(/\/$/, '').trim();
        const existingNameNorm = (r.name || '').toLowerCase().trim();
        const existingRepo = r.githubRepo ? r.githubRepo.toLowerCase() : null;

        if (subRepo && existingRepo && subRepo.toLowerCase() === existingRepo) {
          console.error(`❌ Duplicate Found: Repo "${subRepo}".`);
          setGitHubOutput('STATUS', 'DUPLICATE');
          setGitHubOutput('REASON', `GitHub repository \`${subRepo}\` is already listed under **${r.category}**.`);
          process.exit(0);
        }
        if (subUrlNorm === existingUrlNorm) {
          console.error(`❌ Duplicate Found: URL "${rawUrl}".`);
          setGitHubOutput('STATUS', 'DUPLICATE');
          setGitHubOutput('REASON', `Project URL \`${rawUrl}\` is already listed under **${r.category}**.`);
          process.exit(0);
        }
        if (subNameNorm === existingNameNorm) {
          console.error(`❌ Duplicate Found: Name "${name}".`);
          setGitHubOutput('STATUS', 'DUPLICATE');
          setGitHubOutput('REASON', `Resource name **"${name}"** already exists under **${r.category}**.`);
          process.exit(0);
        }
      }
    } catch (e) {
      console.warn('⚠️ Could not load resources.json for secondary check:', e.message);
    }
  }

  // Helper to normalize heading strings for matching
  const normalizeHeading = (h) =>
    h
      .toLowerCase()
      .replace(/^#+\s+/, '')
      .replace(/\s+and\s+/g, ' & ')
      .replace(/[^a-z0-9\s&]/g, '')
      .trim();

  const targetCategoryNorm = normalizeHeading(category);
  let categoryHeadingIdx = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('## ') || line.startsWith('### ')) {
      if (normalizeHeading(line) === targetCategoryNorm) {
        categoryHeadingIdx = i;
        break;
      }
    }
  }

  if (categoryHeadingIdx === -1) {
    console.error(`❌ Category Heading for "${category}" not found in README.md.`);
    setGitHubOutput('STATUS', 'INVALID');
    setGitHubOutput('REASON', `Category heading \`## ${category}\` does not exist in README.md.`);
    process.exit(0);
  }

  // Collect entry lines under this category section for alphabetical insertion
  let sectionEndIdx = categoryHeadingIdx + 1;
  while (sectionEndIdx < lines.length) {
    const line = lines[sectionEndIdx].trim();
    if (line.startsWith('## ') || line.startsWith('### ')) {
      break;
    }
    sectionEndIdx++;
  }

  // Find alphabetical insertion index among list items starting with '- ['
  let insertIdx = -1;
  for (let i = categoryHeadingIdx + 1; i < sectionEndIdx; i++) {
    const line = lines[i].trim();
    if (line.startsWith('- [')) {
      const match = line.match(/^- \[(?<existingName>[^\]]+)\]/);
      if (match && match.groups) {
        const existingName = match.groups.existingName;
        if (name.localeCompare(existingName, undefined, { sensitivity: 'base' }) < 0) {
          insertIdx = i;
          break;
        }
      }
    }
  }

  // Fallback to inserting before next heading (or trailing empty lines)
  if (insertIdx === -1) {
    insertIdx = sectionEndIdx;
    while (insertIdx > categoryHeadingIdx + 1 && lines[insertIdx - 1].trim() === '') {
      insertIdx--;
    }
  }

  lines.splice(insertIdx, 0, entryLine);
  fs.writeFileSync(README_PATH, lines.join('\n'), 'utf-8');
  console.log(`✅ Inserted entry alphabetically at line ${insertIdx + 1} of README.md`);

  // Run data builder to compile data/*.json
  console.log('\nRunning scripts/build-data.js...');
  execSync('node scripts/build-data.js', { stdio: 'inherit' });

  const branchSlug = subSlug || 'new-resource';
  setGitHubOutput('STATUS', 'SUCCESS');
  setGitHubOutput('SLUG', branchSlug);
  setGitHubOutput('BRANCH_NAME', `submission/${branchSlug}-${issueNumber}`);
  setGitHubOutput('RESOURCE_NAME', name);
  setGitHubOutput('CATEGORY', category);
  setGitHubOutput('ENTRY_LINE', entryLine);
}

processSubmission();
