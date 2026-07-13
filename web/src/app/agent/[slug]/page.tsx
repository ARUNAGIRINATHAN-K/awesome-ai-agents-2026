import { getAllAgents, getAgentBySlug, getRelatedAgents } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Tag,
  Code2,
  Layers,
  Scale,
  Terminal,
  Monitor,
  Cloud,
  Plug,
  Star,
  GitFork,
  Clock,
  ArrowLeft,
  Package,
  Image as ImageIcon,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { AgentCard } from "@/components/agent-card";
import { AgentActions } from "@/components/agent-actions";
import { formatNumber } from "@/lib/utils";

// ─── Static Params ───────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const agents = getAllAgents();
  return agents.map((agent) => ({ slug: agent.slug }));
}

// Prevent runtime 404s from unmapped slugs
export const dynamicParams = false;

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const agent = getAgentBySlug(params.slug);
  if (!agent) return { title: "Agent Not Found | Registry.ai" };

  return {
    title: `${agent.name} | Registry.ai`,
    description: agent.description,
    keywords: [agent.name, agent.language, agent.framework, ...agent.tags].filter(Boolean),
    openGraph: {
      title: `${agent.name} – AI Agent Registry`,
      description: agent.description,
      type: "website",
      siteName: "Registry.ai",
    },
    twitter: {
      card: "summary",
      title: agent.name,
      description: agent.description,
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AgentDetailPage({ params }: { params: { slug: string } }) {
  const agent = getAgentBySlug(params.slug);
  if (!agent) notFound();

  const allAgents = getAllAgents();

  // Similar agents: same category, excluding self, max 4
  const similar = allAgents
    .filter((a) => a.slug !== agent.slug && a.category === agent.category)
    .slice(0, 4);

  // Related agents: scored by shared tags + category + language
  const related = getRelatedAgents(params.slug, 4);

  // Related categories across registry
  const relatedCategories = [
    ...new Set(
      allAgents
        .filter((a) => a.tags.some((t) => agent.tags.includes(t)) && a.slug !== agent.slug)
        .map((a) => a.category)
    ),
  ].slice(0, 6);

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: agent.name,
    description: agent.description,
    applicationCategory: "AI Agent Framework",
    operatingSystem: "Independent",
    programmingLanguage: agent.language,
    license: agent.license,
    url: agent.website || agent.github,
    codeRepository: agent.github,
  };

  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        {/* Back navigation */}
        <Link
          href="/explore/"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground mb-8 transition"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Explore
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
          {/* ── Left column ── */}
          <div className="flex flex-col gap-10">

            {/* ── 1. Header ── */}
            <section>
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <h1 className="text-3xl font-bold tracking-tight">{agent.name}</h1>
                    {agent.featured && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border border-accent-teal/20 bg-accent-teal/5 text-accent-teal">
                        🚀 Production Ready
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {agent.category}
                    {agent.subcategory && ` › ${agent.subcategory}`}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  {agent.stars !== null && (
                    <span className="flex items-center gap-1.5">
                      <Star className="h-4 w-4 fill-accent-amber/40 text-accent-amber" />
                      {formatNumber(agent.stars)}
                    </span>
                  )}
                  {agent.forks !== null && (
                    <span className="flex items-center gap-1.5">
                      <GitFork className="h-4 w-4" />
                      {formatNumber(agent.forks)}
                    </span>
                  )}
                  {agent.lastUpdated && (
                    <span className="flex items-center gap-1.5 text-xs">
                      <Clock className="h-3.5 w-3.5" />
                      {agent.lastUpdated}
                    </span>
                  )}
                </div>
              </div>

              {/* CTA + Actions (favorites, compare, copy, share) */}
              <div className="mt-5">
                <AgentActions agent={agent} />
              </div>
            </section>

            {/* ── 2. Description ── */}
            <section>
              <h2 className="text-base font-semibold mb-3 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-accent-purple" />
                About
              </h2>
              <div className="p-5 border border-border rounded-lg bg-muted/20 text-sm text-muted-foreground leading-relaxed">
                {agent.description || "No description provided."}
              </div>
            </section>

            {/* ── 3. Installation Placeholder ── */}
            <section>
              <h2 className="text-base font-semibold mb-3 flex items-center gap-2">
                <Package className="h-4 w-4 text-accent-teal" />
                Installation
              </h2>
              <div className="rounded-lg border border-border bg-[#0d0d0d] overflow-hidden">
                {/* Terminal bar */}
                <div className="flex items-center gap-1.5 px-4 py-2 border-b border-border/60">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-2 text-[10px] font-mono text-muted-foreground">
                    Terminal
                  </span>
                </div>
                <div className="px-5 py-4 font-mono text-sm">
                  {agent.language?.toLowerCase().includes("python") ? (
                    <>
                      <p className="text-muted-foreground/60 text-xs mb-2"># Install via pip</p>
                      <p className="text-accent-teal">
                        pip install{" "}
                        <span className="text-foreground/80">{agent.name.toLowerCase().replace(/\s+/g, "-")}</span>
                      </p>
                    </>
                  ) : agent.language?.toLowerCase().includes("typescript") ||
                    agent.language?.toLowerCase().includes("javascript") ? (
                    <>
                      <p className="text-muted-foreground/60 text-xs mb-2"># Install via npm</p>
                      <p className="text-accent-teal">
                        npm install{" "}
                        <span className="text-foreground/80">{agent.name.toLowerCase().replace(/\s+/g, "-")}</span>
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-muted-foreground/60 text-xs mb-2"># See GitHub for installation</p>
                      <p className="text-accent-teal">
                        git clone{" "}
                        <span className="text-foreground/80">{agent.github || "https://github.com/..."}</span>
                      </p>
                    </>
                  )}
                </div>
              </div>
            </section>

            {/* ── 4. Screenshots Placeholder ── */}
            <section>
              <h2 className="text-base font-semibold mb-3 flex items-center gap-2">
                <ImageIcon className="h-4 w-4 text-accent-amber" />
                Screenshots
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="aspect-video rounded-lg border border-border border-dashed bg-muted/10 flex flex-col items-center justify-center gap-2 text-muted-foreground/40"
                  >
                    <ImageIcon className="h-8 w-8" />
                    <span className="text-xs">Screenshot {i} coming soon</span>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 5. Similar Agents ── */}
            {similar.length > 0 && (
              <section>
                <h2 className="text-base font-semibold mb-4 flex items-center gap-2">
                  <Layers className="h-4 w-4 text-accent-purple" />
                  Similar Agents in{" "}
                  <span className="text-accent-purple">{agent.category}</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {similar.map((a) => (
                    <AgentCard key={a.id} agent={a} variant="compact" />
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* ── Right sidebar ── */}
          <aside className="flex flex-col gap-6">

            {/* Metadata card */}
            <div className="border border-border rounded-lg overflow-hidden">
              <div className="px-4 py-3 border-b border-border bg-muted/20">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Metadata
                </h3>
              </div>
              <div className="divide-y divide-border/60">
                <MetaRow icon={<Terminal className="h-3.5 w-3.5" />} label="Language" value={agent.language} />
                <MetaRow icon={<Code2 className="h-3.5 w-3.5" />} label="Framework" value={agent.framework} />
                <MetaRow icon={<Scale className="h-3.5 w-3.5" />} label="License" value={agent.license} />
                <MetaRow icon={<Layers className="h-3.5 w-3.5" />} label="Category" value={agent.category} />
                {agent.subcategory && (
                  <MetaRow icon={<Layers className="h-3.5 w-3.5" />} label="Subcategory" value={agent.subcategory} />
                )}
              </div>
            </div>

            {/* Capabilities */}
            <div className="border border-border rounded-lg overflow-hidden">
              <div className="px-4 py-3 border-b border-border bg-muted/20">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Capabilities
                </h3>
              </div>
              <div className="px-4 py-3 flex flex-col gap-2.5">
                <CapabilityRow icon={<Monitor className="h-3.5 w-3.5" />} label="Local Execution" active={agent.localExecution} />
                <CapabilityRow icon={<Cloud className="h-3.5 w-3.5" />} label="Cloud Support" active={agent.cloudSupport} />
                <CapabilityRow icon={<Plug className="h-3.5 w-3.5" />} label="MCP Support" active={agent.mcpSupport} />
              </div>
            </div>

            {/* Tags */}
            {agent.tags?.length > 0 && (
              <div className="border border-border rounded-lg overflow-hidden">
                <div className="px-4 py-3 border-b border-border bg-muted/20 flex items-center gap-2">
                  <Tag className="h-3.5 w-3.5 text-muted-foreground" />
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Tags
                  </h3>
                </div>
                <div className="px-4 py-3 flex flex-wrap gap-2">
                  {agent.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/explore/?tag=${encodeURIComponent(tag)}`}
                      className="text-[10px] font-medium px-2 py-1 rounded-full border border-border bg-muted/20 hover:bg-muted/50 hover:border-accent-purple/30 hover:text-accent-purple transition"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related Categories */}
            {relatedCategories.length > 0 && (
              <div className="border border-border rounded-lg overflow-hidden">
                <div className="px-4 py-3 border-b border-border bg-muted/20">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Related Categories
                  </h3>
                </div>
                <div className="px-4 py-3 flex flex-col gap-1.5">
                  {relatedCategories.map((cat) => (
                    <Link
                      key={cat}
                      href={`/explore/?category=${encodeURIComponent(cat)}`}
                      className="text-xs text-muted-foreground hover:text-accent-purple hover:underline transition"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function MetaRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-3 px-4 py-2.5">
      <span className="mt-0.5 text-muted-foreground">{icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-0.5">{label}</p>
        <p className="text-xs font-medium truncate">{value}</p>
      </div>
    </div>
  );
}

function CapabilityRow({
  icon,
  label,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
}) {
  return (
    <div className="flex items-center gap-2.5 text-xs">
      <span className={active ? "text-accent-teal" : "text-muted-foreground/40"}>{icon}</span>
      <span className={active ? "text-foreground" : "text-muted-foreground/50"}>{label}</span>
      <span
        className={`ml-auto text-[9px] font-bold px-1.5 py-0.5 rounded ${
          active
            ? "bg-accent-teal/10 text-accent-teal border border-accent-teal/20"
            : "bg-muted text-muted-foreground/40 border border-border"
        }`}
      >
        {active ? "Yes" : "No"}
      </span>
    </div>
  );
}
