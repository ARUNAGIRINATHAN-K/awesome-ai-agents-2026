#!/usr/bin/env python3
"""
Data Extraction Pipeline for Awesome AI Agents Registry.
Parses README.md and other Markdown files to extract and normalize agent metadata.
"""

import os
import re
import json
import urllib.parse
from typing import Dict, List, Any, Set, Tuple

# Path Configurations
WORKSPACE_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
README_PATH = os.path.join(WORKSPACE_ROOT, "README.md")
OUTPUT_DIR = os.path.join(WORKSPACE_ROOT, "data")
AGENTS_JSON = os.path.join(OUTPUT_DIR, "agents.json")
CATEGORIES_JSON = os.path.join(WORKSPACE_ROOT, "categories.json")
TAGS_JSON = os.path.join(WORKSPACE_ROOT, "tags.json")
FRAMEWORKS_JSON = os.path.join(WORKSPACE_ROOT, "frameworks.json")
LANGUAGES_JSON = os.path.join(WORKSPACE_ROOT, "languages.json")

# Regex Patterns
HEADER_RE = re.compile(r"^(##|###)\s+(.+)$")
STANDARD_ENTRY_RE = re.compile(
    r"^\s*-\s*\[([^\]]+)\]\(([^\)]+)\)\s*`([^`]+)`\s*`\[([^\]]+)\]`\s*`\[([^\]]+)\]`\s*-\s*(.+)$"
)
LEGACY_ENTRY_RE = re.compile(
    r"^\s*-\s*([^-\(]+)\(?([^\)]*)\)?\s*-\s*([^\(]+)\(🏷️\s*`([^`]+)`\s*`([^`]+)`\s*`([^`]+)`\s*\)\.?$"
)
PLAIN_TEXT_ENTRY_RE = re.compile(
    r"^\s*-\s*([^-\(]+)\s*-\s*(.+)$"
)

def slugify(text: str) -> str:
    """Converts a string into a URL-friendly slug."""
    text = text.lower().strip()
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"[-\s]+", "-", text)
    return text.strip("-")

def clean_url(url: str) -> str:
    """Validates and cleans URLs."""
    url = url.strip()
    if not url.startswith("http://") and not url.startswith("https://"):
        if url.startswith("www."):
            url = "https://" + url
        else:
            url = "https://" + url
    return url

def clean_description(desc: str) -> str:
    """Standardizes description formatting."""
    desc = desc.strip()
    desc = desc.replace("—", "-")
    if not desc.endswith("."):
        desc += "."
    return desc

def parse_readme() -> List[Dict[str, Any]]:
    """Parses README.md to extract all agent registry entries."""
    if not os.path.exists(README_PATH):
        raise FileNotFoundError(f"README.md not found at {README_PATH}")

    agents = []
    current_category = "General"
    current_subcategory = None

    with open(README_PATH, "r", encoding="utf-8") as f:
        lines = f.readlines()

    for i, line in enumerate(lines):
        line_num = i + 1
        stripped = line.strip()

        # Track Categories from Headers
        header_match = HEADER_RE.match(stripped)
        if header_match:
            level, title = header_match.groups()
            title = title.strip()
            title = re.sub(r"\[([^\]]+)\]\([^\)]+\)", r"\1", title)
            title = re.sub(r"[\u2600-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDC00-\uDFFF]", "", title).strip()
            
            if level == "##":
                if title in ["Contents", "Star History", "Changelog", "Contributing", "References"]:
                    continue
                current_category = title
                current_subcategory = None
            elif level == "###":
                current_subcategory = title
            continue

        # Skip non-list items
        if not stripped.startswith("-"):
            continue

        # Skip nested lists or guidelines under lists
        if stripped.startswith("- **") or stripped.startswith("- `["):
            continue

        # 1. Try Standard Format
        std_match = STANDARD_ENTRY_RE.match(stripped)
        if std_match:
            name, url_raw, tier_char, language, framework_type, desc_raw = std_match.groups()
            
            tier = "growing"
            if "🚀" in tier_char:
                tier = "production-ready"
            elif "🔬" in tier_char:
                tier = "emerging"

            url = clean_url(url_raw)
            github = url if "github.com" in url else ""
            website = url if "github.com" not in url else ""
            
            agents.append({
                "line": line_num,
                "name": name.strip(),
                "url": url,
                "github": github,
                "website": website,
                "tier": tier,
                "language": language.strip(),
                "framework": framework_type.strip(),
                "description": clean_description(desc_raw),
                "category": current_category,
                "subcategory": current_subcategory
            })
            continue

        # 2. Try Inconsistent Legacy Format
        legacy_match = LEGACY_ENTRY_RE.match(stripped)
        if legacy_match:
            name_raw, url_raw, desc_raw, lang, type_tag, frame_tag = legacy_match.groups()
            url = clean_url(url_raw) if url_raw.strip() else ""
            github = url if "github.com" in url else ""
            website = url if "github.com" not in url else ""

            agents.append({
                "line": line_num,
                "name": name_raw.strip(),
                "url": url,
                "github": github,
                "website": website,
                "tier": "growing",
                "language": lang.strip(),
                "framework": frame_tag.strip() if frame_tag else type_tag.strip(),
                "description": clean_description(desc_raw),
                "category": current_category,
                "subcategory": current_subcategory
            })
            continue

        # 3. Fallback for Plain Text
        plain_match = PLAIN_TEXT_ENTRY_RE.match(stripped)
        if plain_match:
            name_raw, desc_raw = plain_match.groups()
            name_clean = name_raw.strip()
            inline_link_match = re.match(r"^\[([^\]]+)\]\(([^\)]+)\)$", name_clean)
            if inline_link_match:
                name_clean, url_raw = inline_link_match.groups()
                url = clean_url(url_raw)
            else:
                url = ""

            tag_match = re.search(r"\(🏷️\s*`([^`]+)`\s*`([^`]+)`\s*`([^`]+)`\s*\)\.?$", desc_raw)
            lang, frame = "No-Code", "Multi-Agent"
            if tag_match:
                lang = tag_match.group(1).strip()
                frame = tag_match.group(3).strip()
                desc_raw = desc_raw[:tag_match.start()].strip()

            github = url if "github.com" in url else ""
            website = url if "github.com" not in url else ""

            agents.append({
                "line": line_num,
                "name": name_clean,
                "url": url,
                "github": github,
                "website": website,
                "tier": "growing",
                "language": lang,
                "framework": frame,
                "description": clean_description(desc_raw),
                "category": current_category,
                "subcategory": current_subcategory
            })

    return agents

def normalize_and_deduplicate(raw_agents: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """Deduplicates and normalizes agents according to the target schema."""
    normalized_agents = []

    for agent in raw_agents:
        name = agent["name"]
        url = agent["url"]
        
        base_slug = slugify(name)
        slug = base_slug
        counter = 1
        is_merged = False

        # Collision & duplicate resolution loop
        while True:
            # Find if there is an existing record with this slug
            existing = None
            for a in normalized_agents:
                if a["id"] == slug:
                    existing = a
                    break

            if not existing:
                break

            # If it's a true duplicate, merge and stop
            if existing["name"].lower() == name.lower() or base_slug == "yao-agents":
                if not existing["github"] and agent["github"]:
                    existing["github"] = agent["github"]
                if not existing["website"] and agent["website"]:
                    existing["website"] = agent["website"]
                if agent["subcategory"] and not existing["subcategory"]:
                    existing["subcategory"] = agent["subcategory"]
                for tag in [agent["language"], agent["framework"]]:
                    if tag not in existing["tags"]:
                        existing["tags"].append(tag)
                is_merged = True
                break
            else:
                # Differentiate slug for naming collision (e.g. Codex CLI vs Codex-CLI)
                slug = f"{base_slug}-{counter}"
                counter += 1

        if is_merged:
            continue

        tags = [agent["language"], agent["framework"]]
        topics = [agent["category"].lower()]
        if agent["subcategory"]:
            topics.append(agent["subcategory"].lower())
            
        desc_lower = agent["description"].lower()
        framework_lower = agent["framework"].lower()
        lang_lower = agent["language"].lower()

        mcp_support = "mcp" in tags or "mcp" in framework_lower or "model context protocol" in desc_lower
        local_execution = "local" in tags or "self-hosted" in framework_lower or "local" in desc_lower or lang_lower in ["c++", "rust"]
        cloud_support = "cloud" in tags or "serverless" in framework_lower or "saas" in desc_lower or lang_lower == "cloud"

        documentation = ""
        if "docs" in desc_lower or "documentation" in desc_lower:
            documentation = url
        elif agent["github"]:
            documentation = f"{url}/wiki" if url.endswith("/") else f"{url}/wiki"

        if not name or not agent["description"]:
            continue

        record = {
            "id": slug,
            "slug": slug,
            "name": name,
            "description": agent["description"],
            "category": agent["category"],
            "subcategory": agent["subcategory"] or "",
            "github": agent["github"],
            "website": agent["website"],
            "documentation": documentation,
            "language": agent["language"],
            "framework": agent["framework"],
            "license": "Open Source" if agent["github"] else "Proprietary",
            "tags": list(set(tags)),
            "topics": list(set(topics)),
            "stars": None,
            "forks": None,
            "lastUpdated": None,
            "logo": "",
            "image": "",
            "featured": agent["tier"] == "production-ready",
            "mcpSupport": mcp_support,
            "localExecution": local_execution,
            "cloudSupport": cloud_support
        }

        normalized_agents.append(record)

    return normalized_agents

def extract_auxiliary_metadata(agents: List[Dict[str, Any]]) -> Tuple[List[str], List[str], List[str], List[str]]:
    """Extracts unique categories, tags, frameworks, and languages."""
    categories = set()
    tags = set()
    frameworks = set()
    languages = set()

    for agent in agents:
        if agent["category"]:
            categories.add(agent["category"])
        if agent["subcategory"]:
            categories.add(agent["subcategory"])
        
        for t in agent["tags"]:
            tags.add(t)
            
        if agent["framework"]:
            frameworks.add(agent["framework"])
        if agent["language"]:
            languages.add(agent["language"])

    return (
        sorted(list(categories)),
        sorted(list(tags)),
        sorted(list(frameworks)),
        sorted(list(languages))
    )

def main():
    print("Starting data extraction pipeline...")
    raw_records = parse_readme()
    print(f"Parsed {len(raw_records)} raw records from README.md")

    normalized_agents = normalize_and_deduplicate(raw_records)
    print(f"Normalized into {len(normalized_agents)} unique agent records")

    categories, tags, frameworks, languages = extract_auxiliary_metadata(normalized_agents)
    
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    with open(AGENTS_JSON, "w", encoding="utf-8") as f:
        json.dump(normalized_agents, f, indent=2, ensure_ascii=False)
    print(f"Saved agents registry to {AGENTS_JSON}")

    with open(CATEGORIES_JSON, "w", encoding="utf-8") as f:
        json.dump(categories, f, indent=2, ensure_ascii=False)
    print(f"Saved categories registry to {CATEGORIES_JSON}")

    with open(TAGS_JSON, "w", encoding="utf-8") as f:
        json.dump(tags, f, indent=2, ensure_ascii=False)
    print(f"Saved tags list to {TAGS_JSON}")

    with open(FRAMEWORKS_JSON, "w", encoding="utf-8") as f:
        json.dump(frameworks, f, indent=2, ensure_ascii=False)
    print(f"Saved frameworks list to {FRAMEWORKS_JSON}")

    with open(LANGUAGES_JSON, "w", encoding="utf-8") as f:
        json.dump(languages, f, indent=2, ensure_ascii=False)
    print(f"Saved languages list to {LANGUAGES_JSON}")

    print("Data extraction pipeline execution finished successfully.")

if __name__ == "__main__":
    main()
