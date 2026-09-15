'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getStats, getCategories, getResources } from '@/lib/resources';
import { SearchBar } from '@/components/search/SearchBar';
import { CategoryCard } from '@/components/category/CategoryCard';
import { ResourceCard } from '@/components/resource/ResourceCard';
import { Button } from '@/components/ui/button';
import { Category, Resource } from '@/types/resource';
import { ArrowRight, Plus } from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  const stats = getStats();
  const categories = getCategories();
  const featuredResources = getResources()
    .filter((r: Resource) => r.tier === 'production')
    .slice(0, 6);

  const [searchQuery, setSearchQuery] = React.useState('');

  const executeSearch = (queryVal: string) => {
    if (queryVal && queryVal.trim() !== '') {
      router.push(`/explore?query=${encodeURIComponent(queryVal.trim())}`);
    } else {
      router.push('/explore');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16 space-y-16">
      {/* Vercel-Style Centered Hero Composition */}
      <section className="flex flex-col items-center text-center space-y-8 pt-2 max-w-4xl mx-auto">
        {/* Monospace Eyebrow Stamp */}
        <div className="flex items-center justify-center">
          <span className="text-[11px] font-mono tracking-[0.071em] uppercase text-neutral-900 dark:text-neutral-100 font-semibold px-2.5 py-0.5 rounded-[4px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-zinc-900">
            FOR BUILDERS SHIPPING AI AGENTS
          </span>
        </div>

        {/* Headline - 56px, -3.36px tracking, weight 450 */}
        <h1 className="font-sans text-4xl sm:text-5xl md:text-[56px] leading-[1.05] font-[450] tracking-[-3.36px] text-neutral-900 dark:text-neutral-100 max-w-3xl text-center">
          Typeset guide to the AI agent ecosystem.
        </h1>

        <p className="font-sans text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl text-center">
          Structured, side-by-side catalog of AI agents, multi-agent frameworks, tools, protocols, MCP servers, and infrastructure. Built for developers who ship.
        </p>

        {/* Primary Search Input */}
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            executeSearch(searchQuery);
          }}
          className="w-full max-w-xl mx-auto"
        >
          <SearchBar
            value={searchQuery}
            onChange={(val) => setSearchQuery(val)}
            onSubmit={(val) => executeSearch(val)}
            placeholder="Search 470+ agents, frameworks, tools (e.g. CrewAI, MCP, RAG)..."
          />
        </form>

        {/* Action Cluster & Stats */}
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/explore">
              <Button variant="filled" className="gap-2">
                Explore Registry
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
            <Link href="/submit">
              <Button variant="outline" className="gap-1.5 font-mono text-xs">
                <Plus className="w-3.5 h-3.5" />
                Submit Agent
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 text-xs font-mono text-neutral-500 dark:text-neutral-400 pt-3 border-t border-neutral-100 dark:border-neutral-900 w-full max-w-md">
            <div>
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">{stats.totalResources}</span> Resources
            </div>
            <span>•</span>
            <div>
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">{stats.totalCategories}</span> Categories
            </div>
            <span>•</span>
            <div>
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">{stats.productionCount}</span> Production
            </div>
          </div>
        </div>
      </section>

      {/* Category Explorer */}
      <section className="space-y-4 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] font-mono tracking-[0.071em] uppercase text-neutral-500 font-semibold mb-1">
              CATEGORIES
            </div>
            <h2 className="text-xl font-sans font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
              Explore Domain Frameworks
            </h2>
          </div>
          <Link href="/categories" className="text-xs font-mono text-neutral-900 dark:text-neutral-100 hover:underline font-medium">
            View all categories →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {categories.slice(0, 8).map((cat: Category) => (
            <CategoryCard key={cat.slug} category={cat} />
          ))}
        </div>
      </section>

      {/* Featured Resources Grid */}
      <section className="space-y-4 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] font-mono tracking-[0.071em] uppercase text-neutral-500 font-semibold mb-1">
              PRODUCTION READY
            </div>
            <h2 className="text-xl font-sans font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
              Featured Agent Platforms
            </h2>
          </div>
          <Link href="/explore" className="text-xs font-mono text-neutral-900 dark:text-neutral-100 hover:underline font-medium">
            Explore 470+ resources →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredResources.map((res: Resource) => (
            <ResourceCard key={res.id} resource={res} />
          ))}
        </div>
      </section>
    </div>
  );
}
