import { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, ArrowRight, Zap } from "lucide-react";
import { getTrendingAgents, getPopularCategories, getAllAgents, computeTrendingScore } from "@/lib/data";
import { AgentCard } from "@/components/agent-card";
import { formatNumber } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Trending AI Agents | Registry.ai",
  description: "Discover the fastest-growing and most active AI agent frameworks, tools, and execution environments.",
};

export default function TrendsPage() {
  const trending = getTrendingAgents(20);
  const popularCategories = getPopularCategories(8);
  const allAgents = getAllAgents();
  const mcpCount = allAgents.filter((a) => a.mcpSupport).length;
  const localCount = allAgents.filter((a) => a.localExecution).length;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3 mb-2">
          <TrendingUp className="h-8 w-8 text-accent-purple" />
          Trending
        </h1>
        <p className="text-sm text-muted-foreground">
          Agents ranked by adoption signals: featured status, MCP integration, local execution, and star count.
        </p>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        {[
          { label: "Total Agents", value: formatNumber(allAgents.length) },
          { label: "MCP-Native", value: formatNumber(mcpCount) },
          { label: "Local-First", value: formatNumber(localCount) },
          { label: "Categories", value: "33" },
        ].map(({ label, value }) => (
          <div key={label} className="p-4 border border-border rounded-lg bg-muted/10 text-center">
            <div className="text-2xl font-bold tracking-tight mb-1">{value}</div>
            <div className="text-[11px] text-muted-foreground">{label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
        {/* ── Trending list ── */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Zap className="h-5 w-5 text-accent-amber" />
            <h2 className="text-xl font-bold tracking-tight">Top Agents by Trending Score</h2>
          </div>

          <div className="border border-border rounded-xl overflow-hidden">
            {trending.map((agent, i) => {
              const score = computeTrendingScore(agent);
              return (
                <div
                  key={agent.id}
                  className="flex items-center gap-4 px-4 py-3 border-b border-border/60 last:border-0 hover:bg-muted/20 transition group"
                >
                  {/* Rank */}
                  <span className="shrink-0 w-6 text-right text-xs font-mono text-muted-foreground/50">
                    {i + 1}
                  </span>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/agent/${agent.slug}/`}
                      className="text-sm font-semibold group-hover:text-accent-purple transition truncate block"
                    >
                      {agent.name}
                    </Link>
                    <p className="text-xs text-muted-foreground truncate">{agent.description}</p>
                  </div>

                  {/* Badges */}
                  <div className="hidden sm:flex items-center gap-2 shrink-0">
                    {agent.mcpSupport && (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded border border-accent-purple/20 bg-accent-purple/5 text-accent-purple">MCP</span>
                    )}
                    {agent.localExecution && (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded border border-accent-teal/20 bg-accent-teal/5 text-accent-teal">Local</span>
                    )}
                    <span className="text-[10px] font-mono text-muted-foreground">{agent.language}</span>
                  </div>

                  {/* Score bar */}
                  <div className="shrink-0 flex flex-col items-end gap-1 w-16">
                    <span className="text-[10px] font-mono font-bold text-accent-purple">{score}</span>
                    <div className="w-full h-1 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent-purple to-accent-teal rounded-full"
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Popular categories ── */}
        <aside>
          <h2 className="text-lg font-bold tracking-tight mb-5">Popular Categories</h2>
          <div className="flex flex-col gap-3">
            {popularCategories.map(({ category, count }) => {
              const pct = Math.round((count / allAgents.length) * 100);
              return (
                <Link
                  key={category}
                  href={`/explore/?category=${encodeURIComponent(category)}`}
                  className="group flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/20 hover:border-accent-purple/30 transition"
                >
                  <div className="min-w-0">
                    <p className="text-xs font-semibold truncate group-hover:text-accent-purple transition">
                      {category}
                    </p>
                    <div className="mt-1.5 w-full h-1 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full bg-accent-purple/50 rounded-full"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                  <div className="ml-4 shrink-0 text-right">
                    <span className="text-xs font-bold">{count}</span>
                    <span className="block text-[9px] text-muted-foreground">tools</span>
                  </div>
                </Link>
              );
            })}

            <Link
              href="/explore/"
              className="flex items-center justify-center gap-1.5 text-xs text-accent-purple hover:underline mt-2"
            >
              All categories <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
