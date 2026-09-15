export type ResourceType =
  | 'Agent'
  | 'Framework'
  | 'Tool'
  | 'SDK'
  | 'Skill'
  | 'MCP Server'
  | 'Protocol'
  | 'Model'
  | 'Platform'
  | 'Infrastructure'
  | 'Evaluation'
  | 'Benchmark'
  | 'Workflow'
  | 'Pattern'
  | 'Library'
  | 'Other';

export type SubmissionTier = '🚀 Production-Ready' | '🌱 Growing' | '🔬 Emerging';

export interface SubmissionFormData {
  name: string;
  url: string;
  resourceType: ResourceType;
  category: string;
  tier: SubmissionTier;
  language: string;
  tags: string;
  description: string;
  contributorNotes?: string;
}

export interface SubmissionValidationErrors {
  name?: string;
  url?: string;
  resourceType?: string;
  category?: string;
  tier?: string;
  language?: string;
  tags?: string;
  description?: string;
}

export interface GeneratedSubmissionPayload {
  formattedMarkdown: string;
  githubIssueUrl: string;
  directPrUrl: string;
  isValid: boolean;
  errors: SubmissionValidationErrors;
}
