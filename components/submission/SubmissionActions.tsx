import React from 'react';
import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';
import { REPO_CONFIG } from '@/lib/config';
import { SubmissionFormData } from '@/types/submission';

interface SubmissionActionsProps {
  formData: SubmissionFormData;
  isValid: boolean;
}

export const SubmissionActions: React.FC<SubmissionActionsProps> = ({ formData, isValid }) => {
  const handleGithubIssueSubmit = () => {
    if (!isValid) return;

    const params = new URLSearchParams();
    params.set('template', REPO_CONFIG.issueTemplate);
    params.set('title', `Submit: ${formData.name}`);
    params.set('resource_name', formData.name);
    params.set('project_url', formData.url);
    params.set('resource_type', formData.resourceType);
    params.set('category', formData.category);
    params.set('tier', formData.tier);
    params.set('language', formData.language);
    if (formData.tags) params.set('tags', formData.tags);
    params.set('description', formData.description);
    if (formData.contributorNotes) params.set('contributor_notes', formData.contributorNotes);

    const issueUrl = `${REPO_CONFIG.githubUrl}/issues/new?${params.toString()}`;
    window.open(issueUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDirectPrClick = () => {
    window.open(REPO_CONFIG.editReadmeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-3 pt-2">
      <Field orientation="horizontal" className="flex flex-col sm:flex-row gap-3">
        <Button
          type="button"
          variant="filled"
          onClick={handleGithubIssueSubmit}
          disabled={!isValid}
          className="flex-1 text-xs font-mono py-2"
        >
          Submit via GitHub Issue ↗
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={handleDirectPrClick}
          className="flex-1 text-xs font-mono py-2"
        >
          Submit via Direct PR ↗
        </Button>
      </Field>

      <p className="text-[11px] font-mono text-center text-neutral-500">
        All submissions open a GitHub issue or PR for automated checks &amp; maintainer review.
      </p>
    </div>
  );
};
