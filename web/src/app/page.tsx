import React from "react";
import Link from "next/link";
import { 
  ArrowRight, Search, Zap, TrendingUp, Layers, 
  Clock, Code, Box, Mail, Sparkles, Star, Terminal 
} from "lucide-react";
import { 
  getFeaturedAgents, 
  getTrendingAgents, 
  getAllAgents, 
  getCategories, 
  getFrameworks 
} from "@/lib/data";

export default function Home() {
  const featured = getFeaturedAgents().slice(0, 4);
  const trending = getTrendingAgents().slice(0, 4);
  const allAgents = getAllAgents();
  const categories = getCategories().slice(0, 6);
  const frameworks = getFrameworks().slice(0, 6);

  // Extract recently added: slice the last 4 agents in the list (since new items are appended at the bottom)
  const recentlyAdded = [...allAgents].reverse().slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Registry.ai",
    "url": "https://registry.ai",
    "description": "Search, compare, and benchmark 450+ autonomous AI agent frameworks, execution environments, and utility stacks.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://registry.ai/explore/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col gap-20 pb-20">
        {/* 1. Hero & Search Section */}
        <section className="relative overflow-hidden pt-20 pb-12 border-b border-border/40">
          {/* Subtle grid background blur */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border-subtle)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-subtle)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />
        
        <div className="mx-auto max-w-4xl px-4 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-accent-purple/10 text-accent-purple border border-accent-purple/20 rounded-full mb-6">
            <Sparkles className="h-3 w-3" />
            <span>Discover the Future of Autonomy</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
            The Open Registry for{" "}
            <span className="bg-gradient-to-r from-accent-purple via-accent-purple/80 to-accent-teal bg-clip-text text-transparent">
              Autonomous Agents
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Search, compare, and benchmark {allAgents.length}+ curated AI agent frameworks, secure execution runtimes, and local memory engines. Build production pipelines with confidence.
          </p>

          {/* Native HTML Search Form (Zero JS required on load, instant redirection) */}
          <form action="/explore/" method="GET" className="max-w-xl mx-auto mb-10">
            <div className="relative flex items-center">
              <Search className="absolute left-4 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                name="q"
                placeholder="Search agents, categories, frameworks... (e.g., CrewAI, MCP, Python)"
                className="w-full h-12 pl-12 pr-28 rounded-lg border border-border bg-background/80 backdrop-blur-sm text-sm focus:outline-none focus:border-accent-purple transition duration-150"
              />
              <button
                type="submit"
                className="absolute right-2 px-4 h-8 text-xs font-medium bg-foreground text-background hover:opacity-90 rounded-md transition duration-150"
              >
                Search
              </button>
            </div>
          </form>

          {/* Core metrics */}
          <div className="flex justify-center items-center gap-8 text-xs text-muted-foreground border-t border-border/60 pt-6 max-w-lg mx-auto">
            <div>
              <span className="block text-lg font-bold text-foreground">{allAgents.length}</span>
              Curated Tools
            </div>
            <div className="border-r border-border h-8" />
            <div>
              <span className="block text-lg font-bold text-foreground">33</span>
              Vertical Segments
            </div>
            <div className="border-r border-border h-8" />
            <div>
              <span className="block text-lg font-bold text-foreground">100%</span>
              Static & Edge Cached
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Agents Section */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-accent-teal" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Featured Agents</h2>
          </div>
          <Link href="/explore" className="text-xs text-accent-purple hover:underline inline-flex items-center gap-1">
            View All <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((agent) => (
            <Link 
              href={`/agent/${agent.slug}/`} 
              key={agent.id}
              className="group p-5 border border-border bg-muted/20 hover:bg-muted/40 rounded-lg transition duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold group-hover:text-accent-purple transition">{agent.name}</h3>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 border border-accent-teal/20 bg-accent-teal/5 text-accent-teal rounded">
                  {agent.language}
                </span>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
                {agent.description}
              </p>
              <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground">
                <Terminal className="h-3 w-3" />
                <span>{agent.framework}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Trending Section */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-accent-purple" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Trending Workflows</h2>
          </div>
          <Link href="/explore" className="text-xs text-accent-purple hover:underline inline-flex items-center gap-1">
            View All <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trending.map((agent) => (
            <Link 
              href={`/agent/${agent.slug}/`} 
              key={agent.id}
              className="group p-6 border border-border bg-muted/10 hover:bg-muted/30 rounded-lg flex flex-col justify-between transition duration-200"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-bold group-hover:text-accent-purple transition">{agent.name}</h3>
                  {agent.mcpSupport && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 bg-accent-purple/10 text-accent-purple border border-accent-purple/20 rounded">
                      MCP
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                  {agent.description}
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-border/40 pt-4 text-[10px] text-muted-foreground">
                <span>{agent.category}</span>
                <span className="font-mono">{agent.framework}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Categories Section */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex items-center gap-2 mb-8">
          <Layers className="h-5 w-5 text-accent-amber" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Browse Categories</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const count = allAgents.filter((a) => a.category === category).length;
            return (
              <Link 
                href={`/explore/?category=${encodeURIComponent(category)}`} 
                key={category}
                className="p-4 border border-border bg-muted/20 hover:bg-muted/40 rounded-lg text-center transition duration-150"
              >
                <span className="block text-xs font-semibold truncate mb-1">{category}</span>
                <span className="text-[10px] text-muted-foreground">{count} {count === 1 ? "tool" : "tools"}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 5. Recently Added Section */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex items-center gap-2 mb-8">
          <Clock className="h-5 w-5 text-accent-purple" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Recently Added</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentlyAdded.map((agent) => (
            <Link 
              href={`/agent/${agent.slug}/`} 
              key={agent.id}
              className="group p-5 border border-border bg-muted/20 hover:bg-muted/40 rounded-lg transition duration-200"
            >
              <h3 className="font-semibold text-sm group-hover:text-accent-purple transition mb-2">{agent.name}</h3>
              <p className="text-xs text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
                {agent.description}
              </p>
              <div className="flex items-center justify-between text-[9px] text-muted-foreground border-t border-border/40 pt-3">
                <span className="truncate">{agent.category}</span>
                <span className="font-mono bg-muted px-1.5 py-0.5 rounded">{agent.language}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Popular Frameworks & Stacks */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex items-center gap-2 mb-8">
          <Code className="h-5 w-5 text-accent-teal" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Popular Frameworks</h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {frameworks.map((framework) => {
            const count = allAgents.filter((a) => a.framework === framework).length;
            return (
              <Link 
                href={`/explore/?framework=${encodeURIComponent(framework)}`} 
                key={framework}
                className="flex items-center gap-2 px-3 py-1.5 border border-border bg-muted/10 hover:bg-muted/40 rounded-full text-xs transition duration-150"
              >
                <span className="font-mono font-semibold text-foreground">{framework}</span>
                <span className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{count}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 7. Curated Collections Section */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex items-center gap-2 mb-8">
          <Box className="h-5 w-5 text-accent-purple" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Curated Cookbooks</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link 
            href="/explore/?localExecution=true" 
            className="group relative overflow-hidden p-8 border border-border bg-gradient-to-br from-accent-purple/5 to-transparent hover:from-accent-purple/10 rounded-xl transition duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-accent-purple">Collection</span>
                <h3 className="text-lg font-bold group-hover:text-accent-purple transition mt-1">Sovereign Local-First Stack</h3>
              </div>
              <Star className="h-5 w-5 text-accent-purple fill-accent-purple/20" />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-6 max-w-md">
              Run complete agentic workflows without cloud dependencies or telemetry leaks. Contains local runners, offline memory graphs, and client execution sandboxes.
            </p>
            <span className="text-xs font-semibold text-foreground inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Browse Local Tools <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>

          <Link 
            href="/explore/?mcpSupport=true" 
            className="group relative overflow-hidden p-8 border border-border bg-gradient-to-br from-accent-teal/5 to-transparent hover:from-accent-teal/10 rounded-xl transition duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-accent-teal">Collection</span>
                <h3 className="text-lg font-bold group-hover:text-accent-teal transition mt-1">MCP-Native Implementations</h3>
              </div>
              <Star className="h-5 w-5 text-accent-teal fill-accent-teal/20" />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-6 max-w-md">
              Harness the Model Context Protocol (MCP). Discover clients, servers, and middleware built to expose clean, safe, sandboxed tools directly to Claude, Cursor, and LLM loops.
            </p>
            <span className="text-xs font-semibold text-foreground inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Browse MCP Tools <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </section>

      {/* 8. Newsletter Placeholder */}
      <section className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="p-8 sm:p-12 border border-border bg-muted/20 rounded-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent-purple/5 blur-2xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-teal/5 blur-2xl rounded-full" />

          <Mail className="h-8 w-8 text-accent-purple mx-auto mb-4" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">Subscribe to Weekly Updates</h2>
          <p className="text-xs text-muted-foreground max-w-md mx-auto mb-6 leading-relaxed">
            Get the latest agent releases, benchmark scores, and deployment tutorials delivered directly to your inbox.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-4 py-2 text-xs border border-border bg-background rounded-md focus:outline-none focus:border-accent-purple transition" 
              required
            />
            <button 
              type="submit" 
              className="px-5 py-2 text-xs font-semibold bg-foreground text-background hover:opacity-90 rounded-md transition duration-150"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  </>
);
}
