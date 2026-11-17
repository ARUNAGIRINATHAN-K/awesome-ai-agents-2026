import * as React from 'react';
import type { Metadata } from 'next';
import '@/app/globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { AppShell } from '@/components/layout/AppShell';
import { cn } from '@/lib/utils';

const geistSans = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const geistMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AI Agent Registry — Discover, compare, and explore 500+ AI agents',
  description: 'Explore 500+ AI agents, frameworks, tools, skills, and infrastructure across 32 categories in an open-source AI Agent Registry.',
  keywords: ['AI agents', 'agent registry', 'multi-agent systems', 'MCP', 'LLM tools', 'agent frameworks'],
  authors: [{ name: 'ARUNAGIRINATHAN-K', url: 'https://github.com/ARUNAGIRINATHAN-K' }],
  metadataBase: new URL('https://ai-agent-registry-kappa.vercel.app'),
  openGraph: {
    title: 'AI Agent Registry',
    description: 'Explore 500+ AI agents, frameworks, tools, skills, and infrastructure across 32 categories in an open-source AI Agent Registry.',
    url: 'https://ai-agent-registry-kappa.vercel.app',
    siteName: 'AI Agent Registry',
    images: [{ url: '/img/top.png', width: 1200, height: 630, alt: 'AI Agent Registry' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agent Registry',
    description: 'Discover, compare, and explore 500+ AI agents across 32 categories.',
    images: ['/img/top.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(geistSans.variable, geistMono.variable)}>
      <body className="min-h-screen flex flex-col bg-background font-sans text-foreground antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
