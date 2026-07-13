"use client";

import React from "react";
import Link from "next/link";
import { Heart, Trash2, ArrowLeft } from "lucide-react";
import { useFavorites } from "@/hooks/use-registry";
import { getAllAgents } from "@/lib/data";
import { AgentCard } from "@/components/agent-card";

const ALL_AGENTS = getAllAgents();

export default function FavoritesPage() {
  const { favorites, toggle } = useFavorites();
  const agents = favorites
    .map((slug) => ALL_AGENTS.find((a) => a.slug === slug))
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link
            href="/explore/"
            className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 mb-1 transition"
          >
            <ArrowLeft className="h-3 w-3" /> Explore
          </Link>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <Heart className="h-7 w-7 text-rose-500 fill-rose-500/20" />
            Favorites
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {agents.length} saved {agents.length === 1 ? "agent" : "agents"} — stored locally in your browser.
          </p>
        </div>
      </div>

      {agents.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <Heart className="h-12 w-12 text-muted-foreground/20 mb-4" />
          <h2 className="text-lg font-semibold mb-2">No favorites yet</h2>
          <p className="text-sm text-muted-foreground max-w-xs mb-6">
            Open any agent and click <strong>Save</strong> to bookmark it here.
          </p>
          <Link
            href="/explore/"
            className="px-5 py-2.5 text-sm font-medium bg-foreground text-background hover:opacity-90 rounded-md transition"
          >
            Discover Agents
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {agents.map((agent) => (
            <div key={agent!.id} className="relative group">
              <AgentCard agent={agent!} variant="default" />
              <button
                onClick={() => toggle(agent!.slug)}
                title="Remove from favorites"
                className="absolute top-3 right-3 p-1.5 rounded-md bg-background/80 border border-border opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-rose-500 transition"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
