"use client";

import React from "react";
import { SlidersHorizontal, X, Monitor, Cloud, Plug } from "lucide-react";
import { FilterState } from "@/hooks/use-search";
import { cn } from "@/lib/utils";

interface FilterSidebarProps {
  filters: FilterState;
  setFilters: (update: Partial<FilterState>) => void;
  resetFilters: () => void;
  isFiltered: boolean;
  categories: string[];
  languages: string[];
  frameworks: string[];
  licenses: string[];
}

export function FilterSidebar({
  filters,
  setFilters,
  resetFilters,
  isFiltered,
  categories,
  languages,
  frameworks,
  licenses,
}: FilterSidebarProps) {
  return (
    <aside className="flex flex-col gap-6 text-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold">
          <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
          Filters
        </div>
        {isFiltered && (
          <button
            onClick={resetFilters}
            className="flex items-center gap-1 text-xs text-accent-purple hover:underline"
          >
            <X className="h-3 w-3" />
            Reset
          </button>
        )}
      </div>

      {/* Capabilities toggles */}
      <FilterGroup label="Capabilities">
        <ToggleRow
          icon={<Plug className="h-3.5 w-3.5" />}
          label="MCP Support"
          active={filters.mcp}
          onToggle={() => setFilters({ mcp: !filters.mcp })}
          accentClass="accent-purple"
        />
        <ToggleRow
          icon={<Monitor className="h-3.5 w-3.5" />}
          label="Local Execution"
          active={filters.local}
          onToggle={() => setFilters({ local: !filters.local })}
          accentClass="accent-teal"
        />
        <ToggleRow
          icon={<Cloud className="h-3.5 w-3.5" />}
          label="Cloud Support"
          active={filters.cloud}
          onToggle={() => setFilters({ cloud: !filters.cloud })}
          accentClass="accent-teal"
        />
      </FilterGroup>

      {/* Category */}
      <FilterGroup label="Category">
        <SelectFilter
          value={filters.category}
          options={categories}
          placeholder="All categories"
          onChange={(v) => setFilters({ category: v })}
        />
      </FilterGroup>

      {/* Language */}
      <FilterGroup label="Language">
        <SelectFilter
          value={filters.language}
          options={languages}
          placeholder="All languages"
          onChange={(v) => setFilters({ language: v })}
        />
      </FilterGroup>

      {/* Framework */}
      <FilterGroup label="Framework">
        <SelectFilter
          value={filters.framework}
          options={frameworks}
          placeholder="All frameworks"
          onChange={(v) => setFilters({ framework: v })}
        />
      </FilterGroup>

      {/* License */}
      <FilterGroup label="License">
        <SelectFilter
          value={filters.license}
          options={licenses}
          placeholder="All licenses"
          onChange={(v) => setFilters({ license: v })}
        />
      </FilterGroup>
    </aside>
  );
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      {children}
    </div>
  );
}

function ToggleRow({
  icon,
  label,
  active,
  onToggle,
  accentClass,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onToggle: () => void;
  accentClass: string;
}) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "flex items-center gap-2.5 px-3 py-2 rounded-md border text-xs transition duration-150 w-full text-left",
        active
          ? `border-${accentClass}/30 bg-${accentClass}/5 text-foreground`
          : "border-border bg-transparent text-muted-foreground hover:bg-muted/30"
      )}
    >
      <span className={active ? `text-${accentClass}` : "text-muted-foreground"}>{icon}</span>
      <span className="flex-1">{label}</span>
      {/* Pill indicator */}
      <span
        className={cn(
          "h-4 w-4 rounded-full border flex items-center justify-center transition",
          active ? `bg-${accentClass} border-${accentClass}` : "border-border bg-transparent"
        )}
      >
        {active && <span className="h-2 w-2 rounded-full bg-white block" />}
      </span>
    </button>
  );
}

function SelectFilter({
  value,
  options,
  placeholder,
  onChange,
}: {
  value: string;
  options: string[];
  placeholder: string;
  onChange: (v: string) => void;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-9 rounded-md border border-border bg-background px-2.5 text-xs text-foreground focus:outline-none focus:border-accent-purple transition appearance-none cursor-pointer"
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
