import { MetadataRoute } from "next";
import aiToolsData from "@/data/aitools.json";
import { AITool } from "@/lib/types";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ai-tools-directory.vercel.app";
  const tools = aiToolsData as AITool[];

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/explore`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  // Dynamic tool pages
  const toolPages = tools.map((tool) => ({
    url: `${baseUrl}/explore/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...toolPages];
}
