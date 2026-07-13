"use client";

import React, { useState } from "react";
import { AgentRegistryEntry } from "@/types";
import { useSearch } from "@/hooks/use-search";
import { SearchBar } from "@/components/search/search-bar";
import { FilterSidebar } from "@/components/search/filter-sidebar";
import { AgentCard } from "@/components/agent-card";
import { LayoutGrid, List, SlidersHorizontal, X, SearchX } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExploreClientProps {
  agents: AgentRegistryEntry[];
  categories: string[];
  languages: string[];
  frameworks: string[];
  licenses: string[];
}

type ViewMode = "grid" | "list";

export function ExploreClient({
  agents,
  categories,
  languages,
  frameworks,
  licenses,
}: ExploreClientProps) {
  const { filters, setFilters, resetFilters, results, isFiltered } = useSearch(agents);
  const [view, setView] = useState<ViewMode>("grid");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      {/* ── Page Header ─────────────────────────────────────────────────────── */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Explore Agents</h1>
        <p className="text-sm text-muted-foreground">
          {agents.length} curated tools across 33 categories — search, filter, and compare instantly.
        </p>
      </div>

      {/* ── Search + View Controls ──────────────────────────────────────────── */}
      <div className="flex items-center gap-3 mb-6">
        <SearchBar
          value={filters.q}
          onChange={(q) => setFilters({ q })}
          className="flex-1"
          autoFocus
        />

        {/* Mobile filter toggle */}
        <button
          onClick={() => setSidebarOpen((o) => !o)}
          className={cn(
            "lg:hidden flex items-center gap-2 px-3 h-11 border rounded-lg text-xs transition",
            sidebarOpen || isFiltered
              ? "border-accent-purple/40 bg-accent-purple/5 text-accent-purple"
              : "border-border bg-background text-muted-foreground hover:bg-muted/30"
          )}
        >
          {sidebarOpen ? <X className="h-4 w-4" /> : <SlidersHorizontal className="h-4 w-4" />}
          Filters
          {isFiltered && (
            <span className="h-4 w-4 rounded-full bg-accent-purple text-white text-[9px] flex items-center justify-center font-bold">
              !
            </span>
          )}
        </button>

        {/* View toggle */}
        <div className="hidden sm:flex items-center border border-border rounded-lg overflow-hidden">
          <button
            onClick={() => setView("grid")}
            className={cn(
              "p-2.5 transition",
              view === "grid" ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/30"
            )}
            aria-label="Grid view"
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
          <button
            onClick={() => setView("list")}
            className={cn(
              "p-2.5 transition border-l border-border",
              view === "list" ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/30"
            )}
            aria-label="List view"
          >
            <List className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* ── Results count + active filter chips ────────────────────────────── */}
      <div className="flex items-center gap-3 flex-wrap mb-6">
        <span className="text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">{results.length}</span>{" "}
          {results.length === 1 ? "result" : "results"}
          {isFiltered && " matching filters"}
        </span>

        {/* Active filter chips */}
        {filters.category && (
          <Chip label={filters.category} onRemove={() => setFilters({ category: "" })} />
        )}
        {filters.language && (
          <Chip label={filters.language} onRemove={() => setFilters({ language: "" })} />
        )}
        {filters.framework && (
          <Chip label={filters.framework} onRemove={() => setFilters({ framework: "" })} />
        )}
        {filters.license && (
          <Chip label={filters.license} onRemove={() => setFilters({ license: "" })} />
        )}
        {filters.mcp && <Chip label="MCP" onRemove={() => setFilters({ mcp: false })} />}
        {filters.local && <Chip label="Local" onRemove={() => setFilters({ local: false })} />}
        {filters.cloud && <Chip label="Cloud" onRemove={() => setFilters({ cloud: false })} />}
        {isFiltered && (
          <button onClick={resetFilters} className="text-[10px] text-accent-purple hover:underline">
            Clear all
          </button>
        )}
      </div>

      {/* ── Main layout: sidebar + results ─────────────────────────────────── */}
      <div className="flex gap-8">
        {/* Desktop sidebar — always visible */}
        <div className="hidden lg:block w-56 shrink-0">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            resetFilters={resetFilters}
            isFiltered={isFiltered}
            categories={categories}
            languages={languages}
            frameworks={frameworks}
            licenses={licenses}
          />
        </div>

        {/* Mobile sidebar — slide in */}
        {sidebarOpen && (
          <div className="lg:hidden w-full mb-6 p-4 border border-border rounded-lg bg-muted/10">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              resetFilters={resetFilters}
              isFiltered={isFiltered}
              categories={categories}
              languages={languages}
              frameworks={frameworks}
              licenses={licenses}
            />
          </div>
        )}

        {/* Results area */}
        <div className="flex-1 min-w-0">
          {results.length === 0 ? (
            <EmptyState hasFilters={isFiltered} onReset={resetFilters} />
          ) : view === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {results.map((agent) => (
                <AgentCard key={agent.id} agent={agent} variant="default" />
              ))}
            </div>
          ) : (
            <div className="border border-border rounded-lg overflow-hidden">
              {results.map((agent) => (
                <AgentCard key={agent.id} agent={agent} variant="row" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Chip ──────────────────────────────────────────────────────────────────────

function Chip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-medium rounded-full border border-accent-purple/30 bg-accent-purple/5 text-accent-purple">
      {label}
      <button onClick={onRemove} className="hover:text-foreground transition">
        <X className="h-2.5 w-2.5" />
      </button>
    </span>
  );
}

// ─── Empty state ──────────────────────────────────────────────────────────────

function EmptyState({ hasFilters, onReset }: { hasFilters: boolean; onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <SearchX className="h-10 w-10 text-muted-foreground/30 mb-4" />
      <h3 className="text-base font-semibold mb-2">No matching agents</h3>
      <p className="text-xs text-muted-foreground max-w-xs mb-6">
        {hasFilters
          ? "Try adjusting your filters or clearing your search query."
          : "No agents found for your search. Try a different term."}
      </p>
      {hasFilters && (
        <button
          onClick={onReset}
          className="px-4 py-2 text-xs font-medium bg-foreground text-background hover:opacity-90 rounded-md transition"
        >
          Reset all filters
        </button>
      )}
    </div>
  );
}
