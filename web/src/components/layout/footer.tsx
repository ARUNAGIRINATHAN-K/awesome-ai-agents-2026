import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/80 bg-background/50 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>
          <span className="font-semibold text-foreground">Registry.ai</span> © {new Date().getFullYear()} — The Open AI Agent Registry.
        </div>
        <div className="flex items-center gap-6">
          <Link href="/explore" className="hover:text-foreground transition">Explore</Link>
          <Link href="/compare" className="hover:text-foreground transition">Compare</Link>
          <Link href="https://github.com/ARUNAGIRINATHAN-K/awesome-ai-agents-2026" target="_blank" className="hover:text-foreground transition">
            GitHub
          </Link>
          <Link href="https://github.com/sindresorhus/awesome" target="_blank" className="hover:text-foreground transition">
            Awesome List
          </Link>
        </div>
      </div>
    </footer>
  );
}
