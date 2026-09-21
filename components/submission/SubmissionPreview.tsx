import React from 'react';
import { SubmissionFormData } from '@/types/submission';

interface SubmissionPreviewProps {
  formData: SubmissionFormData;
  formattedMarkdown: string;
}

export const SubmissionPreview: React.FC<SubmissionPreviewProps> = ({ formData, formattedMarkdown }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-[11px] font-mono tracking-[0.071em] uppercase font-semibold text-neutral-900 dark:text-neutral-100">
        <span>README.md Entry Output</span>
        <span className="text-neutral-500 font-normal lowercase">{formData.category || 'Category'}</span>
      </div>

      <pre className="p-3.5 rounded-[6px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-zinc-950 text-neutral-900 dark:text-neutral-100 text-xs font-mono overflow-x-auto whitespace-pre-wrap break-all leading-relaxed">
        {formattedMarkdown}
      </pre>
    </div>
  );
};
