"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts";
import { Keyboard, X } from "lucide-react";

const SHORTCUTS = [
  { keys: "Ctrl + K", description: "Focus search bar / open explore" },
  { keys: "/", description: "Focus search (on explore page)" },
  { keys: "Ctrl + Shift + C", description: "Open compare desk" },
  { keys: "Ctrl + Shift + F", description: "Go to favorites" },
  { keys: "Ctrl + Shift + T", description: "Go to trending" },
  { keys: "G H", description: "Go to homepage" },
  { keys: "?", description: "Show this shortcuts panel" },
  { keys: "Escape", description: "Close panels / clear search" },
];

export function KeyboardShortcutsProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [helpOpen, setHelpOpen] = useState(false);

  useKeyboardShortcuts([
    {
      key: "k",
      ctrl: true,
      description: "Open explore / search",
      handler: () => router.push("/explore/"),
    },
    {
      key: "c",
      ctrl: true,
      shift: true,
      description: "Open compare",
      handler: () => router.push("/compare/"),
    },
    {
      key: "f",
      ctrl: true,
      shift: true,
      description: "Open favorites",
      handler: () => router.push("/favorites/"),
    },
    {
      key: "t",
      ctrl: true,
      shift: true,
      description: "Open trending",
      handler: () => router.push("/trends/"),
    },
    {
      key: "?",
      description: "Toggle shortcuts help",
      handler: () => setHelpOpen((o) => !o),
    },
    {
      key: "Escape",
      description: "Close panels",
      handler: () => setHelpOpen(false),
    },
  ]);

  return (
    <>
      {children}

      {/* Help panel */}
      {helpOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-md bg-background border border-border rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <div className="flex items-center gap-2 font-semibold text-sm">
                <Keyboard className="h-4 w-4 text-accent-purple" />
                Keyboard Shortcuts
              </div>
              <button
                onClick={() => setHelpOpen(false)}
                className="p-1 rounded hover:bg-muted transition text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Shortcuts list */}
            <div className="divide-y divide-border/60 max-h-96 overflow-y-auto">
              {SHORTCUTS.map((s) => (
                <div key={s.keys} className="flex items-center justify-between px-5 py-3">
                  <span className="text-xs text-muted-foreground">{s.description}</span>
                  <kbd className="text-[10px] font-mono bg-muted border border-border rounded px-2 py-0.5 shrink-0 ml-4">
                    {s.keys}
                  </kbd>
                </div>
              ))}
            </div>

            {/* Footer hint */}
            <div className="px-5 py-3 border-t border-border bg-muted/20">
              <p className="text-[10px] text-muted-foreground text-center">
                Press <kbd className="font-mono bg-muted border border-border rounded px-1">?</kbd> to toggle this panel
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
