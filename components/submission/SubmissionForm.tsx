import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Category } from '@/types/resource';
import { ResourceType, SubmissionFormData, SubmissionTier, SubmissionValidationErrors } from '@/types/submission';

interface SubmissionFormProps {
  categories: Category[];
  formData: SubmissionFormData;
  errors: SubmissionValidationErrors;
  onChange: (updated: Partial<SubmissionFormData>) => void;
}

const RESOURCE_TYPES: ResourceType[] = [
  'Agent',
  'Framework',
  'Tool',
  'SDK',
  'Skill',
  'MCP Server',
  'Protocol',
  'Model',
  'Platform',
  'Infrastructure',
  'Evaluation',
  'Benchmark',
  'Workflow',
  'Pattern',
  'Library',
  'Other',
];

const TIERS: { label: string; value: SubmissionTier }[] = [
  { label: '🚀 Production-Ready (10K+ stars / enterprise adopt)', value: '🚀 Production-Ready' },
  { label: '🌱 Growing (500–5K stars / active momentum)', value: '🌱 Growing' },
  { label: '🔬 Emerging (<500 stars / experimental research)', value: '🔬 Emerging' },
];

export const SubmissionForm: React.FC<SubmissionFormProps> = ({ categories, formData, errors, onChange }) => {
  return (
    <FieldGroup>
      {/* Resource Name */}
      <Field>
        <FieldLabel htmlFor="form-name">
          Resource Name <span className="text-neutral-500">*</span>
        </FieldLabel>
        <Input
          id="form-name"
          placeholder="e.g. LangGraph"
          value={formData.name}
          onChange={(e) => onChange({ name: e.target.value })}
          className={errors.name ? 'border-neutral-900 dark:border-neutral-100 ring-1 ring-neutral-900 dark:ring-neutral-100' : ''}
          required
        />
        {errors.name && <FieldDescription className="text-neutral-900 dark:text-neutral-100 font-semibold">{errors.name}</FieldDescription>}
      </Field>

      {/* Project URL */}
      <Field>
        <FieldLabel htmlFor="form-url">
          Project URL (HTTPS) <span className="text-neutral-500">*</span>
        </FieldLabel>
        <Input
          id="form-url"
          type="url"
          placeholder="https://github.com/langchain-ai/langgraph"
          value={formData.url}
          onChange={(e) => onChange({ url: e.target.value })}
          className={errors.url ? 'border-neutral-900 dark:border-neutral-100 ring-1 ring-neutral-900 dark:ring-neutral-100' : ''}
          required
        />
        {errors.url ? (
          <FieldDescription className="text-neutral-900 dark:text-neutral-100 font-semibold">{errors.url}</FieldDescription>
        ) : (
          <FieldDescription>Must start with https:// (GitHub repo or website).</FieldDescription>
        )}
      </Field>

      {/* Grid: Type & Tier */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field>
          <FieldLabel htmlFor="form-resource-type">
            Resource Type <span className="text-neutral-500">*</span>
          </FieldLabel>
          <Select
            id="form-resource-type"
            value={formData.resourceType}
            onValueChange={(val) => onChange({ resourceType: val as ResourceType })}
          >
            <SelectTrigger id="form-resource-type">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {RESOURCE_TYPES.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>

        <Field>
          <FieldLabel htmlFor="form-tier">
            Tier Level <span className="text-neutral-500">*</span>
          </FieldLabel>
          <Select
            id="form-tier"
            value={formData.tier}
            onValueChange={(val) => onChange({ tier: val as SubmissionTier })}
          >
            <SelectTrigger id="form-tier">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {TIERS.map((t) => (
                  <SelectItem key={t.value} value={t.value}>
                    {t.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>
      </div>

      {/* Grid: Category & Language */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field>
          <FieldLabel htmlFor="form-category">
            Category <span className="text-neutral-500">*</span>
          </FieldLabel>
          <Select
            id="form-category"
            value={formData.category}
            onValueChange={(val) => onChange({ category: val })}
          >
            <SelectTrigger id="form-category">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {categories.map((c) => (
                  <SelectItem key={c.slug} value={c.name}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>

        <Field>
          <FieldLabel htmlFor="form-language">
            Primary Language / Tech <span className="text-neutral-500">*</span>
          </FieldLabel>
          <Input
            id="form-language"
            placeholder="e.g. Python, TypeScript, Cloud"
            value={formData.language}
            onChange={(e) => onChange({ language: e.target.value })}
            required
          />
        </Field>
      </div>

      {/* Tags */}
      <Field>
        <FieldLabel htmlFor="form-tags">Additional Tags</FieldLabel>
        <Input
          id="form-tags"
          placeholder="e.g. Multi-Agent, MCP, RAG, CLI"
          value={formData.tags}
          onChange={(e) => onChange({ tags: e.target.value })}
        />
        <FieldDescription>Comma separated tags for quick search indexing.</FieldDescription>
      </Field>

      {/* Description */}
      <Field>
        <div className="flex justify-between items-center">
          <FieldLabel htmlFor="form-description">
            Description <span className="text-neutral-500">*</span>
          </FieldLabel>
          <span className="text-[11px] font-mono text-neutral-500">
            {formData.description.trim().split(/\s+/).filter(Boolean).length} words
          </span>
        </div>
        <Textarea
          id="form-description"
          rows={3}
          placeholder="A framework for building resilient multi-agent workflows."
          value={formData.description}
          onChange={(e) => onChange({ description: e.target.value })}
          className={errors.description ? 'border-neutral-900 dark:border-neutral-100 ring-1 ring-neutral-900 dark:ring-neutral-100' : ''}
          required
        />
        {errors.description ? (
          <FieldDescription className="text-neutral-900 dark:text-neutral-100 font-semibold">{errors.description}</FieldDescription>
        ) : (
          <FieldDescription>
            One concise sentence ending with a period. No markdown links or hype words.
          </FieldDescription>
        )}
      </Field>

      {/* Maintainer Notes */}
      <Field>
        <FieldLabel htmlFor="form-notes">Maintainer Notes (Optional)</FieldLabel>
        <Textarea
          id="form-notes"
          rows={2}
          placeholder="Context, release details, or relationship to the project."
          value={formData.contributorNotes || ''}
          onChange={(e) => onChange({ contributorNotes: e.target.value })}
        />
      </Field>
    </FieldGroup>
  );
};
