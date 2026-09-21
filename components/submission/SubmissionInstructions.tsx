import React from 'react';

export const SubmissionInstructions: React.FC = () => {
  return (
    <div className="space-y-2 font-mono text-xs text-neutral-500 dark:text-neutral-400">
      <div className="text-[11px] uppercase tracking-[0.071em] font-semibold text-neutral-900 dark:text-neutral-100">
        SUBMISSION PROCESS
      </div>
      <ol className="space-y-1 pl-4 list-decimal text-[11px] leading-relaxed">
        <li>Fill out the form fields with your project details.</li>
        <li>Submit via pre-filled GitHub Issue Form.</li>
        <li>Automated validation parses entry and opens a Pull Request.</li>
        <li>Maintainer review &amp; merge triggers live Vercel deployment.</li>
      </ol>
    </div>
  );
};
