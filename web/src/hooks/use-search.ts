"use client";

import { useMemo, useState, useEffect, useTransition, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Fuse from "fuse.js";
import { AgentRegistryEntry } from "@/types";

export interface FilterState {
  q: string;
  category: string;
  language: string;
  framework: string;
  license: string;
  mcp: boolean;
  local: boolean;
  cloud: boolean;
}

const DEFAULT_FILTERS: FilterState = {
  q: "",
  category: "",
  language: "",
  framework: "",
  license: "",
  mcp: false,
  local: false,
  cloud: false,
};

const FUSE_OPTIONS: Fuse.IFuseOptions<AgentRegistryEntry> = {
  keys: [
    { name: "name", weight: 0.35 },
    { name: "description", weight: 0.25 },
    { name: "tags", weight: 0.15 },
    { name: "category", weight: 0.10 },
    { name: "language", weight: 0.10 },
    { name: "framework", weight: 0.05 },
  ],
  threshold: 0.35,
  includeScore: true,
  minMatchCharLength: 2,
};

export function useSearch(agents: AgentRegistryEntry[]) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  // ── Initialise filters from URL on mount ──────────────────────────────────
  const [filters, setFiltersState] = useState<FilterState>(() => ({
    q: searchParams.get("q") ?? "",
    category: searchParams.get("category") ?? "",
    language: searchParams.get("language") ?? "",
    framework: searchParams.get("framework") ?? "",
    license: searchParams.get("license") ?? "",
    mcp: searchParams.get("mcp") === "true",
    local: searchParams.get("local") === "true",
    cloud: searchParams.get("cloud") === "true",
  }));

  // ── Fuse index — built once per agents list ────────────────────────────────
  const fuse = useMemo(() => new Fuse(agents, FUSE_OPTIONS), [agents]);

  // ── Sync filters → URL (deferred, non-blocking) ───────────────────────────
  const syncToUrl = useCallback(
    (next: FilterState) => {
      const params = new URLSearchParams();
      if (next.q) params.set("q", next.q);
      if (next.category) params.set("category", next.category);
      if (next.language) params.set("language", next.language);
      if (next.framework) params.set("framework", next.framework);
      if (next.license) params.set("license", next.license);
      if (next.mcp) params.set("mcp", "true");
      if (next.local) params.set("local", "true");
      if (next.cloud) params.set("cloud", "true");
      const qs = params.toString();
      startTransition(() => {
        router.replace(`${pathname}${qs ? `?${qs}` : ""}`, { scroll: false });
      });
    },
    [pathname, router]
  );

  const setFilters = useCallback(
    (updater: Partial<FilterState> | ((prev: FilterState) => FilterState)) => {
      setFiltersState((prev) => {
        const next = typeof updater === "function" ? updater(prev) : { ...prev, ...updater };
        syncToUrl(next);
        return next;
      });
    },
    [syncToUrl]
  );

  const resetFilters = useCallback(() => setFilters(DEFAULT_FILTERS), [setFilters]);

  // ── Computed results ───────────────────────────────────────────────────────
  const results = useMemo<AgentRegistryEntry[]>(() => {
    // Step 1: fuzzy search (if query present)
    let pool: AgentRegistryEntry[] =
      filters.q.trim().length >= 2
        ? fuse.search(filters.q).map((r) => r.item)
        : agents;

    // Step 2: hard filters applied on top of fuzzy results
    if (filters.category)
      pool = pool.filter((a) => a.category === filters.category);
    if (filters.language)
      pool = pool.filter((a) => a.language === filters.language);
    if (filters.framework)
      pool = pool.filter((a) => a.framework === filters.framework);
    if (filters.license)
      pool = pool.filter((a) => a.license === filters.license);
    if (filters.mcp) pool = pool.filter((a) => a.mcpSupport);
    if (filters.local) pool = pool.filter((a) => a.localExecution);
    if (filters.cloud) pool = pool.filter((a) => a.cloudSupport);

    return pool;
  }, [agents, fuse, filters]);

  const isFiltered =
    Object.entries(filters).some(([, v]) => (typeof v === "boolean" ? v : v !== ""));

  return { filters, setFilters, resetFilters, results, isFiltered };
}
