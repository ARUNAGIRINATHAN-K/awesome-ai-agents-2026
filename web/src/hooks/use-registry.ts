"use client";

import { useCallback } from "react";
import { useLocalStorage } from "./use-local-storage";

const MAX_RECENT = 10;
const MAX_COMPARE = 4;

// ─── Favorites ────────────────────────────────────────────────────────────────

export function useFavorites() {
  const [slugs, setSlugs] = useLocalStorage<string[]>("registry:favorites", []);

  const toggle = useCallback(
    (slug: string) =>
      setSlugs((prev) =>
        prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
      ),
    [setSlugs]
  );

  const isFavorite = useCallback((slug: string) => slugs.includes(slug), [slugs]);

  return { favorites: slugs, toggle, isFavorite };
}

// ─── Recently Viewed ──────────────────────────────────────────────────────────

export function useRecentlyViewed() {
  const [slugs, setSlugs] = useLocalStorage<string[]>("registry:recent", []);

  const record = useCallback(
    (slug: string) =>
      setSlugs((prev) => {
        const deduped = [slug, ...prev.filter((s) => s !== slug)];
        return deduped.slice(0, MAX_RECENT);
      }),
    [setSlugs]
  );

  const clear = useCallback(() => setSlugs([]), [setSlugs]);

  return { recent: slugs, record, clear };
}

// ─── Compare Desk ─────────────────────────────────────────────────────────────

export function useCompare() {
  const [slugs, setSlugs] = useLocalStorage<string[]>("registry:compare", []);

  const add = useCallback(
    (slug: string) =>
      setSlugs((prev) => {
        if (prev.includes(slug) || prev.length >= MAX_COMPARE) return prev;
        return [...prev, slug];
      }),
    [setSlugs]
  );

  const remove = useCallback(
    (slug: string) => setSlugs((prev) => prev.filter((s) => s !== slug)),
    [setSlugs]
  );

  const toggle = useCallback(
    (slug: string) =>
      setSlugs((prev) =>
        prev.includes(slug)
          ? prev.filter((s) => s !== slug)
          : prev.length < MAX_COMPARE
          ? [...prev, slug]
          : prev
      ),
    [setSlugs]
  );

  const clear = useCallback(() => setSlugs([]), [setSlugs]);
  const isComparing = useCallback((slug: string) => slugs.includes(slug), [slugs]);
  const isFull = slugs.length >= MAX_COMPARE;

  return { compareList: slugs, add, remove, toggle, clear, isComparing, isFull };
}
