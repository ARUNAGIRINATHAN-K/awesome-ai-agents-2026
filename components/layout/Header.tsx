'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '../theme-toggle';
import { MobileNav } from './MobileNav';
import { cn } from '@/lib/utils';
import { Search, Plus } from 'lucide-react';

interface HeaderProps {
  onOpenSearch?: () => void;
}

export function Header({ onOpenSearch }: HeaderProps) {
  const pathname = usePathname();

  const navLinks = [
    { href: '/explore', label: 'Explore' },
    { href: '/categories', label: 'Categories' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/80 dark:bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Brand Logo & Desktop Nav */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 font-sans font-medium text-sm text-neutral-900 dark:text-neutral-100 hover:opacity-80 transition-opacity">
            <span className="text-[#000000] dark:text-[#ffffff] text-base leading-none select-none">▲</span>
            <span className="font-semibold tracking-tight">AI Agent Registry</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-sans">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'transition-colors py-1',
                    isActive
                      ? 'text-neutral-900 dark:text-neutral-100 font-semibold border-b-2 border-neutral-900 dark:border-neutral-100'
                      : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Search, Actions & Mobile Nav */}
        <div className="flex items-center gap-3">
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-[6px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-zinc-900 text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors font-mono"
              aria-label="Search resources"
            >
              <Search className="w-3.5 h-3.5 text-neutral-400" />
              <span>Search...</span>
              <kbd className="text-[10px] px-1 rounded border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-zinc-800">⌘K</kbd>
            </button>
          )}

          <Link
            href="/submit"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#171717] dark:bg-[#ededed] text-white dark:text-[#0a0a0a] text-xs font-mono font-medium hover:bg-black dark:hover:bg-white transition-all shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Submit Agent</span>
          </Link>

          <a
            href="https://github.com/ARUNAGIRINATHAN-K/awesome-ai-agents-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors rounded-[6px] hover:bg-neutral-100 dark:hover:bg-neutral-900"
            title="GitHub Repository"
            aria-label="GitHub Repository"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>

          <ThemeToggle />

          {/* Mobile Menu Drawer Toggle */}
          <MobileNav navLinks={[...navLinks, { href: '/submit', label: 'Submit Agent' }]} />
        </div>
      </div>
    </header>
  );
}
