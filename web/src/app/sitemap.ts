import { getAllAgents } from "@/lib/data";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const agents = getAllAgents();
  const baseUrl = "https://registry.ai";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/explore/`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/compare/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/trends/`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
  ];

  const agentRoutes: MetadataRoute.Sitemap = agents.map((agent) => ({
    url: `${baseUrl}/agent/${agent.slug}/`,
    lastModified: agent.lastUpdated ? new Date(agent.lastUpdated) : new Date(),
    changeFrequency: "weekly",
    priority: agent.featured ? 0.9 : 0.6,
  }));

  return [...staticRoutes, ...agentRoutes];
}
