'use client';

import * as React from 'react';
import Link from 'next/link';
import { Resource } from '@/types/resource';

interface ResourceCardProps {
  resource: Resource;
  onQuickView?: (resource: Resource) => void;
  viewMode?: 'grid' | 'list';
}

export function ResourceCard({ resource, onQuickView, viewMode = 'grid' }: ResourceCardProps) {
  const getTierBadgeClass = (tier: string) => {
    if (tier === 'production') return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20';
    if (tier === 'growing') return 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20';
    return 'bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-500/20';
  };

  return (
    <div className="p-4 rounded-[6px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-zinc-950 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-150 flex flex-col justify-between gap-3 text-xs font-mono">
      <div className="space-y-2">
        {/* Header: Name + Tier */}
        <div className="flex items-start justify-between gap-2">
          <Link
            href={`/resources/${resource.slug}`}
            className="font-sans font-semibold text-sm text-neutral-900 dark:text-neutral-100 hover:underline truncate tracking-tight"
          >
            {resource.githubRepo ? resource.githubRepo : resource.name}
          </Link>

          <span
            className={`px-1.5 py-0.5 rounded-[4px] border text-[10px] font-mono tracking-wider uppercase shrink-0 ${getTierBadgeClass(
              resource.tier
            )}`}
          >
            {resource.tierBadge} {resource.tier}
          </span>
        </div>

        {/* Description */}
        <p className="text-neutral-600 dark:text-neutral-400 font-sans text-xs leading-relaxed line-clamp-2">
          {resource.description}
        </p>
      </div>

      {/* Footer: Category, Language, Action */}
      <div className="pt-2 border-t border-neutral-100 dark:border-neutral-900 flex items-center justify-between gap-2 text-[11px] font-mono">
        <div className="flex items-center gap-2 truncate text-neutral-500 dark:text-neutral-400">
          <Link
            href={`/categories/${resource.categorySlug}`}
            className="hover:text-neutral-900 dark:hover:text-neutral-100 truncate"
          >
            {resource.category}
          </Link>
          <span>•</span>
          <span className="text-neutral-700 dark:text-neutral-300 font-medium">{resource.language}</span>
        </div>

        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-900 dark:text-neutral-100 hover:underline font-semibold shrink-0"
        >
          {resource.isGitHub ? 'github ↗' : 'site ↗'}
        </a>
      </div>
    </div>
  );
}
