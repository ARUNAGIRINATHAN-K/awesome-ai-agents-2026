import * as React from 'react';
import Link from 'next/link';
import { Category } from '@/types/resource';

export interface CategoryCardProps {
  category: Category;
  key?: string | number | React.Key;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categories/${category.slug}`}>
      <div className="p-3.5 rounded-[6px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-zinc-950 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-150 flex items-center justify-between font-mono text-xs group">
        <div className="min-w-0 pr-2">
          <h3 className="font-sans font-semibold text-xs text-neutral-900 dark:text-neutral-100 group-hover:underline truncate">
            {category.name}
          </h3>
          <p className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 mt-0.5">
            {category.count} {category.count === 1 ? 'resource' : 'resources'}
          </p>
        </div>
        <span className="text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 font-mono text-sm shrink-0 transition-colors">
          →
        </span>
      </div>
    </Link>
  );
}
