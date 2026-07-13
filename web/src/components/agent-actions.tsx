"use client";

import React, { useEffect } from "react";
import {
  Heart,
  GitCompare,
  Copy,
  Check,
  Share2,
  Github,
  Terminal,
  ExternalLink,
} from "lucide-react";
import { AgentRegistryEntry } from "@/types";
import { useFavorites } from "@/hooks/use-registry";
import { useCompare } from "@/hooks/use-registry";
import { useCopyToClipboard } from "@/hooks/use-copy";
import { useRecentlyViewed } from "@/hooks/use-registry";
import { cn } from "@/lib/utils";

interface AgentActionsProps {
  agent: AgentRegistryEntry;
}

function getInstallCommand(agent: AgentRegistryEntry): string {
  const name = agent.name.toLowerCase().replace(/\s+/g, "-");
  const lang = agent.language?.toLowerCase() ?? "";
  if (lang.includes("python")) return `pip install ${name}`;
  if (lang.includes("typescript") || lang.includes("javascript")) return `npm install ${name}`;
  return `git clone ${agent.github}`;
}

export function AgentActions({ agent }: AgentActionsProps) {
  const { isFavorite, toggle: toggleFav } = useFavorites();
  const { isComparing, toggle: toggleCmp, isFull } = useCompare();
  const { record } = useRecentlyViewed();
  const { copy: copyGH, copied: copiedGH } = useCopyToClipboard();
  const { copy: copyInstall, copied: copiedInstall } = useCopyToClipboard();
  const { copy: copyShare, copied: copiedShare } = useCopyToClipboard();

  // Track visit on mount
  useEffect(() => {
    record(agent.slug);
  }, [agent.slug, record]);

  const favorited = isFavorite(agent.slug);
  const inCompare = isComparing(agent.slug);

  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/agent/${agent.slug}/`
      : `/agent/${agent.slug}/`;

  return (
    <div className="flex flex-wrap gap-2">
      {/* Favorite */}
      <ActionButton
        onClick={() => toggleFav(agent.slug)}
        active={favorited}
        activeClass="text-rose-500 border-rose-400/30 bg-rose-500/5"
        title={favorited ? "Remove from favorites" : "Add to favorites"}
        icon={<Heart className={cn("h-4 w-4", favorited && "fill-rose-500")} />}
        label={favorited ? "Saved" : "Save"}
      />

      {/* Compare */}
      <ActionButton
        onClick={() => toggleCmp(agent.slug)}
        active={inCompare}
        activeClass="text-accent-purple border-accent-purple/30 bg-accent-purple/5"
        title={inCompare ? "Remove from compare" : isFull ? "Compare list full (max 4)" : "Add to compare"}
        disabled={!inCompare && isFull}
        icon={<GitCompare className="h-4 w-4" />}
        label={inCompare ? "Comparing" : "Compare"}
      />

      {/* Copy GitHub URL */}
      {agent.github && (
        <ActionButton
          onClick={() => copyGH(agent.github)}
          active={copiedGH}
          activeClass="text-accent-teal border-accent-teal/30 bg-accent-teal/5"
          title="Copy GitHub URL"
          icon={copiedGH ? <Check className="h-4 w-4" /> : <Github className="h-4 w-4" />}
          label={copiedGH ? "Copied!" : "Copy URL"}
        />
      )}

      {/* Copy install command */}
      <ActionButton
        onClick={() => copyInstall(getInstallCommand(agent))}
        active={copiedInstall}
        activeClass="text-accent-teal border-accent-teal/30 bg-accent-teal/5"
        title="Copy install command"
        icon={copiedInstall ? <Check className="h-4 w-4" /> : <Terminal className="h-4 w-4" />}
        label={copiedInstall ? "Copied!" : "Install"}
      />

      {/* Share link */}
      <ActionButton
        onClick={() => copyShare(shareUrl)}
        active={copiedShare}
        activeClass="text-accent-purple border-accent-purple/30 bg-accent-purple/5"
        title="Copy share link"
        icon={copiedShare ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
        label={copiedShare ? "Copied!" : "Share"}
      />

      {/* Open in new tab */}
      {agent.github && (
        <a
          href={agent.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs border border-border bg-muted/20 hover:bg-muted/50 rounded-md transition text-muted-foreground hover:text-foreground"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          GitHub
        </a>
      )}
    </div>
  );
}

// ─── Reusable action button ───────────────────────────────────────────────────

function ActionButton({
  onClick,
  active,
  activeClass,
  title,
  icon,
  label,
  disabled,
}: {
  onClick: () => void;
  active: boolean;
  activeClass: string;
  title: string;
  icon: React.ReactNode;
  label: string;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs border rounded-md transition duration-150",
        active
          ? activeClass
          : "border-border bg-muted/10 text-muted-foreground hover:bg-muted/30 hover:text-foreground",
        disabled && "opacity-40 cursor-not-allowed"
      )}
    >
      {icon}
      {label}
    </button>
  );
}
