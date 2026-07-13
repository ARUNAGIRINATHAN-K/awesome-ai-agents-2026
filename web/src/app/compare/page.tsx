"use client";

import React from "react";
import Link from "next/link";
import { useCompare } from "@/hooks/use-registry";
import { getAllAgents } from "@/lib/data";
import { AgentRegistryEntry } from "@/types";
import {
  GitCompare, X, ArrowLeft, Check, Minus,
  Monitor, Cloud, Plug, Star, Scale, Terminal, Code2,
} from "lucide-react";
import { formatNumber } from "@/lib/utils";

const ALL_AGENTS = getAllAgents();

const COMPARE_ROWS: { label: string; key: keyof AgentRegistryEntry | "trending" }[] = [
  { label: "Language", key: "language" },
  { label: "Framework", key: "framework" },
  { label: "License", key: "license" },
  { label: "Category", key: "category" },
  { label: "Stars", key: "stars" },
  { label: "Forks", key: "forks" },
  { label: "MCP Support", key: "mcpSupport" },
  { label: "Local Execution", key: "localExecution" },
  { label: "Cloud Support", key: "cloudSupport" },
];

export default function ComparePage() {
  const { compareList, remove, clear } = useCompare();
  const agents = compareList
    .map((slug) => ALL_AGENTS.find((a) => a.slug === slug))
    .filter(Boolean) as AgentRegistryEntry[];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link
              href="/explore/"
              className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition"
            >
              <ArrowLeft className="h-3 w-3" /> Explore
            </Link>
          </div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <GitCompare className="h-7 w-7 text-accent-purple" />
            Compare Agents
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Compare up to 4 agents side-by-side. Add agents from their detail pages.
          </p>
        </div>
        {agents.length > 0 && (
          <button
            onClick={clear}
            className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1.5 border border-border px-3 py-1.5 rounded-md hover:bg-muted/30 transition"
          >
            <X className="h-3 w-3" /> Clear all
          </button>
        )}
      </div>

      {agents.length === 0 ? (
        // ── Empty state ─────────────────────────────────────────────────────
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <GitCompare className="h-12 w-12 text-muted-foreground/20 mb-4" />
          <h2 className="text-lg font-semibold mb-2">No agents selected</h2>
          <p className="text-sm text-muted-foreground max-w-xs mb-6">
            Open any agent detail page and click <strong>Compare</strong> to add it here.
          </p>
          <Link
            href="/explore/"
            className="px-5 py-2.5 text-sm font-medium bg-foreground text-background hover:opacity-90 rounded-md transition"
          >
            Browse Agents
          </Link>
        </div>
      ) : (
        // ── Comparison table ────────────────────────────────────────────────
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                {/* Label column */}
                <th className="w-36 text-left text-[10px] uppercase tracking-wider text-muted-foreground font-semibold py-3 pr-4 border-b border-border">
                  Metric
                </th>
                {/* Agent columns */}
                {agents.map((agent) => (
                  <th key={agent.slug} className="text-left py-3 px-4 border-b border-border min-w-[200px]">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link
                          href={`/agent/${agent.slug}/`}
                          className="font-bold hover:text-accent-purple transition block leading-tight"
                        >
                          {agent.name}
                        </Link>
                        <span className="text-[10px] text-muted-foreground font-normal">
                          {agent.category}
                        </span>
                      </div>
                      <button
                        onClick={() => remove(agent.slug)}
                        className="shrink-0 p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition mt-0.5"
                        title="Remove from compare"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </th>
                ))}
                {/* Empty slot hints */}
                {Array.from({ length: Math.max(0, 4 - agents.length) }).map((_, i) => (
                  <th key={`empty-${i}`} className="py-3 px-4 border-b border-border min-w-[180px]">
                    <Link
                      href="/explore/"
                      className="flex flex-col items-center justify-center gap-1 py-4 border border-dashed border-border rounded-lg text-muted-foreground/40 hover:border-accent-purple/30 hover:text-accent-purple/60 transition text-xs"
                    >
                      <span className="text-lg">+</span>
                      Add agent
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map(({ label, key }) => (
                <tr key={key} className="hover:bg-muted/10 transition group">
                  <td className="py-3 pr-4 text-xs font-medium text-muted-foreground border-b border-border/50 flex items-center gap-1.5">
                    {key === "stars" && <Star className="h-3 w-3" />}
                    {key === "language" && <Terminal className="h-3 w-3" />}
                    {key === "framework" && <Code2 className="h-3 w-3" />}
                    {key === "license" && <Scale className="h-3 w-3" />}
                    {key === "mcpSupport" && <Plug className="h-3 w-3" />}
                    {key === "localExecution" && <Monitor className="h-3 w-3" />}
                    {key === "cloudSupport" && <Cloud className="h-3 w-3" />}
                    {label}
                  </td>
                  {agents.map((agent) => {
                    const raw = agent[key as keyof AgentRegistryEntry];
                    return (
                      <td
                        key={agent.slug}
                        className="py-3 px-4 border-b border-border/50 text-xs"
                      >
                        {typeof raw === "boolean" ? (
                          raw ? (
                            <Check className="h-4 w-4 text-accent-teal" />
                          ) : (
                            <Minus className="h-4 w-4 text-muted-foreground/30" />
                          )
                        ) : typeof raw === "number" ? (
                          <span className="font-mono">{formatNumber(raw)}</span>
                        ) : raw ? (
                          <span>{String(raw)}</span>
                        ) : (
                          <Minus className="h-4 w-4 text-muted-foreground/30" />
                        )}
                      </td>
                    );
                  })}
                  {Array.from({ length: Math.max(0, 4 - agents.length) }).map((_, i) => (
                    <td key={`empty-${i}`} className="py-3 px-4 border-b border-border/50" />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
