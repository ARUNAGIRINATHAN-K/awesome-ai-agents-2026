export type AgentTier = "production-ready" | "growing" | "emerging";

export interface AgentRegistryEntry {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  github: string;
  website: string;
  documentation: string;
  language: string;
  framework: string;
  license: string;
  tags: string[];
  topics: string[];
  stars: number | null;
  forks: number | null;
  lastUpdated: string | null;
  logo: string;
  image: string;
  featured: boolean;
  mcpSupport: boolean;
  localExecution: boolean;
  cloudSupport: boolean;
}
