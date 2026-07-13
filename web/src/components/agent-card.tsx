import React from "react";
import Link from "next/link";
import { Terminal, Globe, Monitor, Cloud, Plug } from "lucide-react";
import { AgentRegistryEntry } from "@/types";
import { cn, formatNumber } from "@/lib/utils";

interface AgentCardProps {
  agent: AgentRegistryEntry;
  variant?: "default" | "compact" | "row";
  className?: string;
}

const TIER_MAP: Record<string, { label: string; color: string }> = {
  "production-ready": { label: "🚀", color: "text-accent-teal border-accent-teal/20 bg-accent-teal/5" },
  growing: { label: "🌱", color: "text-accent-purple border-accent-purple/20 bg-accent-purple/5" },
  emerging: { label: "🔬", color: "text-accent-amber border-accent-amber/20 bg-accent-amber/5" },
};

export function AgentCard({ agent, variant = "default", className }: AgentCardProps) {
  const tier = TIER_MAP[agent.featured ? "production-ready" : "growing"] ?? TIER_MAP.growing;

  if (variant === "compact") {
    return (
      <Link
        href={`/agent/${agent.slug}/`}
        className={cn(
          "group flex items-start gap-3 p-4 border border-border bg-muted/10 hover:bg-muted/30 rounded-lg transition duration-150",
          className
        )}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-semibold group-hover:text-accent-purple transition truncate">
              {agent.name}
            </span>
            <span className={cn("shrink-0 text-[9px] font-bold px-1.5 py-0.5 rounded border", tier.color)}>
              {tier.label}
            </span>
          </div>
          <p className="text-xs text-muted-foreground line-clamp-1">{agent.description}</p>
        </div>
        <span className="shrink-0 text-[10px] font-mono text-muted-foreground mt-0.5">{agent.language}</span>
      </Link>
    );
  }

  if (variant === "row") {
    return (
      <Link
        href={`/agent/${agent.slug}/`}
        className={cn(
          "group flex items-center gap-4 px-4 py-3 border-b border-border/60 hover:bg-muted/20 transition duration-150",
          className
        )}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold group-hover:text-accent-purple transition">{agent.name}</span>
            {agent.mcpSupport && (
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded border border-accent-purple/20 bg-accent-purple/5 text-accent-purple">
                MCP
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-0.5 truncate">{agent.description}</p>
        </div>
        <div className="hidden md:flex items-center gap-3 shrink-0 text-[10px] text-muted-foreground">
          <span className="font-mono bg-muted px-2 py-0.5 rounded">{agent.language}</span>
          <span>{agent.category}</span>
          {agent.stars !== null && (
            <span className="flex items-center gap-1">★ {formatNumber(agent.stars)}</span>
          )}
        </div>
      </Link>
    );
  }

  // Default card
  return (
    <Link
      href={`/agent/${agent.slug}/`}
      className={cn(
        "group flex flex-col p-5 border border-border bg-muted/20 hover:bg-muted/40 hover:border-accent-purple/30 rounded-lg transition duration-200",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="font-bold text-sm leading-snug group-hover:text-accent-purple transition line-clamp-1">
          {agent.name}
        </h3>
        <span className={cn("shrink-0 text-[9px] font-bold px-1.5 py-0.5 rounded border", tier.color)}>
          {tier.label}
        </span>
      </div>

      {/* Description */}
      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-4 flex-1">
        {agent.description}
      </p>

      {/* Capability Badges */}
      <div className="flex items-center gap-1.5 mb-4 flex-wrap">
        {agent.localExecution && (
          <span title="Local Execution" className="p-1 rounded bg-muted text-muted-foreground hover:text-foreground transition">
            <Monitor className="h-3 w-3" />
          </span>
        )}
        {agent.cloudSupport && (
          <span title="Cloud Support" className="p-1 rounded bg-muted text-muted-foreground hover:text-foreground transition">
            <Cloud className="h-3 w-3" />
          </span>
        )}
        {agent.mcpSupport && (
          <span title="MCP Support" className="p-1 rounded bg-muted text-accent-purple transition">
            <Plug className="h-3 w-3" />
          </span>
        )}
        {agent.website && (
          <span title="Website" className="p-1 rounded bg-muted text-muted-foreground hover:text-foreground transition">
            <Globe className="h-3 w-3" />
          </span>
        )}
      </div>

      {/* Footer Row */}
      <div className="flex items-center justify-between border-t border-border/50 pt-3 text-[10px] text-muted-foreground">
        <div className="flex items-center gap-1 font-mono">
          <Terminal className="h-3 w-3" />
          <span>{agent.language}</span>
        </div>
        <div className="flex items-center gap-2">
          {agent.stars !== null && <span>★ {formatNumber(agent.stars)}</span>}
          <span className="bg-muted px-1.5 py-0.5 rounded truncate max-w-[80px]">
            {agent.license || "Unknown"}
          </span>
        </div>
      </div>
    </Link>
  );
}
