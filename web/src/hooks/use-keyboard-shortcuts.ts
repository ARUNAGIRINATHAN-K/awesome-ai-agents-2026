"use client";

import { useEffect } from "react";

export interface ShortcutDefinition {
  key: string;           // e.g. "k", "Escape", "/"
  ctrl?: boolean;
  meta?: boolean;
  shift?: boolean;
  description: string;
  handler: () => void;
}

/**
 * Registers global keyboard shortcuts.
 * Ignores events originating inside <input>, <textarea>, or [contenteditable].
 */
export function useKeyboardShortcuts(shortcuts: ShortcutDefinition[]) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      const isEditable =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;

      for (const shortcut of shortcuts) {
        const ctrlMatch = shortcut.ctrl ? e.ctrlKey || e.metaKey : true;
        const metaMatch = shortcut.meta ? e.metaKey : true;
        const shiftMatch = shortcut.shift ? e.shiftKey : true;
        const keyMatch = e.key.toLowerCase() === shortcut.key.toLowerCase();

        const isModified = shortcut.ctrl || shortcut.meta || shortcut.shift;

        // Skip editable targets for unmodified shortcuts (e.g. "/")
        if (isEditable && !isModified) continue;

        if (keyMatch && ctrlMatch && metaMatch && shiftMatch) {
          e.preventDefault();
          shortcut.handler();
          return;
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [shortcuts]);
}
