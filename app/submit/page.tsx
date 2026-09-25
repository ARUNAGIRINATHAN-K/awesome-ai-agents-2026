'use client';

import React, { useState, useMemo } from 'react';
import { getCategories } from '@/lib/resources';
import { SubmissionFormData, SubmissionValidationErrors } from '@/types/submission';
import { SubmissionForm } from '@/components/submission/SubmissionForm';
import { SubmissionPreview } from '@/components/submission/SubmissionPreview';
import { SubmissionInstructions } from '@/components/submission/SubmissionInstructions';
import { SubmissionActions } from '@/components/submission/SubmissionActions';

export default function SubmitPage() {
  const categories = useMemo(() => getCategories(), []);

  const [formData, setFormData] = useState<SubmissionFormData>({
    name: 'LangGraph',
    url: 'https://github.com/langchain-ai/langgraph',
    resourceType: 'Framework',
    category: categories[0]?.name || 'Orchestration Frameworks',
    tier: '🚀 Production-Ready',
    language: 'Python',
    tags: 'Multi-Agent, StateGraph',
    description: 'A framework for building resilient multi-agent workflows.',
    contributorNotes: '',
  });

  // Client-side real-time validation logic
  const validation = useMemo(() => {
    const errors: SubmissionValidationErrors = {};

    if (!formData.name || !formData.name.trim()) {
      errors.name = 'Resource name is required.';
    }

    if (!formData.url || !formData.url.trim()) {
      errors.url = 'Project URL is required.';
    } else if (!formData.url.startsWith('https://')) {
      errors.url = 'URL must start with https://';
    } else {
      try {
        new URL(formData.url);
      } catch (e) {
        errors.url = 'Enter a valid URL (e.g. https://github.com/org/repo).';
      }
    }

    const desc = formData.description.trim();
    if (!desc) {
      errors.description = 'Description is required.';
    } else if (desc.includes('[') || desc.includes('](')) {
      errors.description = 'Description should not contain Markdown links.';
    } else {
      const words = desc.split(/\s+/).filter(Boolean);
      if (words.length < 5 || words.length > 35) {
        errors.description = `Description should be approximately 10–30 words (currently ${words.length} words).`;
      }
    }

    const isValid = Object.keys(errors).length === 0;
    return { errors, isValid };
  }, [formData]);

  // Generate dynamic Markdown entry preview
  const formattedMarkdown = useMemo(() => {
    const tierIcon = formData.tier.includes('🚀') ? '🚀' : formData.tier.includes('🔬') ? '🔬' : '🌱';
    const langTag = formData.language ? `\`[${formData.language.trim()}]\`` : '`[Cloud]`';
    const typeTag = `\`[${formData.resourceType}]\``;

    let desc = formData.description.trim();
    if (desc && !desc.endsWith('.')) desc += '.';

    return `- [${formData.name || 'Name'}](${formData.url || 'URL'}) \`${tierIcon}\` ${langTag} ${typeTag} - ${desc || 'Description.'}`;
  }, [formData]);

  const handleChange = (updated: Partial<SubmissionFormData>) => {
    setFormData((prev) => ({ ...prev, ...updated }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Centered Page Header */}
      <div className="flex flex-col items-center text-center space-y-1.5 border-b border-neutral-200 dark:border-neutral-800 pb-5 max-w-2xl mx-auto">
        <div className="text-[11px] font-mono tracking-[0.071em] uppercase font-semibold text-neutral-500">
          CONTRIBUTION PORTAL
        </div>
        <h1 className="font-sans text-3xl font-semibold tracking-[-1.5px] text-neutral-900 dark:text-neutral-100">
          Submit a Resource
        </h1>
        <p className="text-xs font-sans text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
          Submit an AI agent, framework, tool, skill, or related resource to the AI Agent Registry. Submissions are processed via transparent GitHub pull requests.
        </p>
      </div>

      {/* Submission Form Section */}
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-6">
          <SubmissionForm
            categories={categories}
            formData={formData}
            errors={validation.errors}
            onChange={handleChange}
          />

          <SubmissionActions formData={formData} isValid={validation.isValid} />
        </div>

        {/* Two-column layout below form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <div>
            <SubmissionPreview formData={formData} formattedMarkdown={formattedMarkdown} />
          </div>
          <div>
            <SubmissionInstructions />
          </div>
        </div>
      </div>
    </div>
  );
}
