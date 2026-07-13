import { AgentRegistryEntry } from "@/types";
import rawAgents from "../../../data/agents.json";
import rawCategories from "../../../categories.json";
import rawLanguages from "../../../languages.json";
import rawFrameworks from "../../../frameworks.json";

// Typed data collections compiled at build-time
const agents = rawAgents as AgentRegistryEntry[];
const categories = rawCategories as string[];
const languages = rawLanguages as string[];
const frameworks = rawFrameworks as string[];

/**
 * Returns the complete list of curated agents.
 */
export function getAllAgents(): AgentRegistryEntry[] {
  return agents;
}

/**
 * Retrieves a single agent by its unique URL slug.
 */
export function getAgentBySlug(slug: string): AgentRegistryEntry | undefined {
  return agents.find((agent) => agent.slug === slug);
}

/**
 * Returns all categories and subcategories.
 */
export function getCategories(): string[] {
  return categories;
}

/**
 * Returns the list of implementation languages/runtimes.
 */
export function getLanguages(): string[] {
  return languages;
}

/**
 * Returns the list of underlying frameworks or architectural types.
 */
export function getFrameworks(): string[] {
  return frameworks;
}

/**
 * Returns the list of featured (production-ready) agents.
 */
export function getFeaturedAgents(): AgentRegistryEntry[] {
  return agents.filter((agent) => agent.featured);
}

/**
 * Computes a deterministic trending score for an agent.
 * Score formula (0–100):
 *   - featured       → +40
 *   - mcpSupport     → +20
 *   - localExecution → +10
 *   - cloudSupport   → +10
 *   - stars ≥ 1k     → +10
 *   - stars ≥ 5k     → +10 more (total +20)
 */
export function computeTrendingScore(agent: AgentRegistryEntry): number {
  let score = 0;
  if (agent.featured) score += 40;
  if (agent.mcpSupport) score += 20;
  if (agent.localExecution) score += 10;
  if (agent.cloudSupport) score += 10;
  if ((agent.stars ?? 0) >= 1000) score += 10;
  if ((agent.stars ?? 0) >= 5000) score += 10;
  return Math.min(score, 100);
}

/**
 * Returns a curated list of trending agents sorted by trending score.
 */
export function getTrendingAgents(limit = 10): AgentRegistryEntry[] {
  return [...agents]
    .sort((a, b) => computeTrendingScore(b) - computeTrendingScore(a))
    .slice(0, limit);
}

/**
 * Returns agents related to a given slug by shared tags or category.
 */
export function getRelatedAgents(slug: string, limit = 6): AgentRegistryEntry[] {
  const source = agents.find((a) => a.slug === slug);
  if (!source) return [];

  return agents
    .filter((a) => a.slug !== slug)
    .map((a) => {
      let score = 0;
      if (a.category === source.category) score += 3;
      if (a.language === source.language) score += 2;
      const sharedTags = a.tags.filter((t) => source.tags.includes(t)).length;
      score += sharedTags;
      return { agent: a, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ agent }) => agent);
}

/**
 * Returns popular categories ranked by agent count.
 */
export function getPopularCategories(limit = 8): { category: string; count: number }[] {
  const map = new Map<string, number>();
  agents.forEach((a) => {
    if (a.category) map.set(a.category, (map.get(a.category) ?? 0) + 1);
  });
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([category, count]) => ({ category, count }));
}
