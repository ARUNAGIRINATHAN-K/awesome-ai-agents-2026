import { Metadata } from "next";
import Link from "next/link";
import { Box, ArrowRight, Monitor, Plug, Star, Shield } from "lucide-react";
import { getAllAgents } from "@/lib/data";
import { AgentCard } from "@/components/agent-card";

export const metadata: Metadata = {
  title: "Curated Collections | Registry.ai",
  description: "Expert-curated stacks and agent collections for local-first pipelines, MCP-native tools, security-compliant deployments, and more.",
};

const COLLECTIONS = [
  {
    id: "local-first",
    icon: Monitor,
    accent: "accent-teal",
    title: "Sovereign Local-First Stack",
    description:
      "Run complete agentic pipelines without cloud dependencies. Offline memory, local LLMs, and sandboxed runtimes.",
    filter: (a: ReturnType<typeof getAllAgents>[0]) => a.localExecution,
  },
  {
    id: "mcp-native",
    icon: Plug,
    accent: "accent-purple",
    title: "MCP-Native Implementations",
    description:
      "Agents and servers built specifically for the Model Context Protocol — expose clean tools to Claude, Cursor, and LLM loops.",
    filter: (a: ReturnType<typeof getAllAgents>[0]) => a.mcpSupport,
  },
  {
    id: "featured",
    icon: Star,
    accent: "accent-amber",
    title: "Production-Ready Frameworks",
    description:
      "Battle-tested orchestration layers, coding agents, and memory systems trusted in production environments.",
    filter: (a: ReturnType<typeof getAllAgents>[0]) => a.featured,
  },
  {
    id: "cloud",
    icon: Shield,
    accent: "accent-purple",
    title: "Cloud-First Deployments",
    description:
      "Frameworks optimized for cloud runtimes, container orchestration, and API-first agentic pipelines.",
    filter: (a: ReturnType<typeof getAllAgents>[0]) => a.cloudSupport && !a.localExecution,
  },
];

export default function CollectionsPage() {
  const allAgents = getAllAgents();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3 mb-2">
          <Box className="h-8 w-8 text-accent-purple" />
          Curated Collections
        </h1>
        <p className="text-sm text-muted-foreground">
          Hand-curated agent stacks for specific use-cases and deployment targets.
        </p>
      </div>

      <div className="flex flex-col gap-16">
        {COLLECTIONS.map(({ id, icon: Icon, accent, title, description, filter }) => {
          const agents = allAgents.filter(filter).slice(0, 6);
          if (agents.length === 0) return null;

          return (
            <section key={id}>
              {/* Collection header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg border border-${accent}/20 bg-${accent}/5`}>
                    <Icon className={`h-5 w-5 text-${accent}`} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold tracking-tight">{title}</h2>
                    <p className="text-xs text-muted-foreground mt-0.5 max-w-xl">{description}</p>
                  </div>
                </div>
                <Link
                  href={`/explore/?${id === "local-first" ? "local=true" : id === "mcp-native" ? "mcp=true" : id === "cloud" ? "cloud=true" : ""}`}
                  className="shrink-0 text-xs text-accent-purple hover:underline inline-flex items-center gap-1 ml-4"
                >
                  See all <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Agent cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {agents.map((agent) => (
                  <AgentCard key={agent.id} agent={agent} variant="default" />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
