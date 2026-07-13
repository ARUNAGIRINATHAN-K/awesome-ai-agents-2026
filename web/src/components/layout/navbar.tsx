"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Search, Layers, Activity, GitCompare } from "lucide-react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2 font-bold tracking-tight text-foreground transition hover:opacity-90">
            <span className="bg-gradient-to-r from-accent-purple via-accent-purple/80 to-accent-teal bg-clip-text text-lg text-transparent">
              Registry.ai
            </span>
          </Link>

          {/* Desktop Nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/explore" className="flex items-center gap-1.5 hover:text-foreground transition">
              <Layers className="h-4 w-4" />
              Explore
            </Link>
            <Link href="/compare" className="flex items-center gap-1.5 hover:text-foreground transition">
              <GitCompare className="h-4 w-4" />
              Compare
            </Link>
            <Link href="/trends" className="flex items-center gap-1.5 hover:text-foreground transition">
              <Activity className="h-4 w-4" />
              Trends
            </Link>
          </nav>
        </div>

        {/* Global actions */}
        <div className="flex items-center gap-4">
          {/* Mock Search Bar Trigger */}
          <button 
            className="flex items-center gap-2 px-3 py-1.5 text-xs text-muted-foreground border border-border bg-muted/50 hover:bg-muted rounded-md transition duration-150"
            onClick={() => console.log("Open command palette")}
          >
            <Search className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Search...</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono border border-border bg-background rounded-sm">
              Ctrl+K
            </kbd>
          </button>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 hover:bg-muted text-muted-foreground hover:text-foreground rounded-md transition duration-150"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
