import { Metadata } from "next";
import { Suspense } from "react";
import { getAllAgents, getCategories, getLanguages, getFrameworks } from "@/lib/data";
import { ExploreClient } from "@/components/search/explore-client";

export const metadata: Metadata = {
  title: "Explore AI Agents | Registry.ai",
  description:
    "Search and filter 450+ curated AI agent frameworks, execution environments, memory engines, and tools. Filter by language, framework, license, MCP support, and more.",
};

// Derive unique, sorted license list directly from the agents dataset
function getLicenses(): string[] {
  const agents = getAllAgents();
  return [
    ...new Set(agents.map((a) => a.license).filter(Boolean)),
  ].sort();
}

export default function ExplorePage() {
  const agents = getAllAgents();
  const categories = getCategories();
  const languages = getLanguages();
  const frameworks = getFrameworks();
  const licenses = getLicenses();

  return (
    // Suspense boundary required by Next.js App Router when using useSearchParams()
    // in a client component rendered inside a server component tree.
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
          <div className="h-8 w-48 rounded-md bg-muted animate-pulse mb-3" />
          <div className="h-4 w-64 rounded-md bg-muted animate-pulse mb-8" />
          <div className="h-11 rounded-lg bg-muted animate-pulse mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="h-44 rounded-lg bg-muted animate-pulse" />
            ))}
          </div>
        </div>
      }
    >
      <ExploreClient
        agents={agents}
        categories={categories}
        languages={languages}
        frameworks={frameworks}
        licenses={licenses}
      />
    </Suspense>
  );
}
