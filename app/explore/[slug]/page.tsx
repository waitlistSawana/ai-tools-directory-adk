import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, ChevronRight, Home } from "lucide-react";
import aiToolsData from "@/data/aitools.json";
import { AITool } from "@/lib/types";
import type { Metadata } from "next";

// ISR revalidation
export const revalidate = 60;

// Generate static params for all tools
export async function generateStaticParams() {
  const tools = aiToolsData as AITool[];
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tools = aiToolsData as AITool[];
  const tool = tools.find((t) => t.slug === slug);

  if (!tool) {
    return {
      title: "Tool Not Found",
    };
  }

  return {
    title: `${tool.name} - ${tool.category}`,
    description: tool.description,
    openGraph: {
      title: `${tool.name} - ${tool.category}`,
      description: tool.description,
      images: [tool.logo],
    },
  };
}

export default async function ToolDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tools = aiToolsData as AITool[];
  const tool = tools.find((t) => t.slug === slug);

  if (!tool) {
    notFound();
  }

  const pricingColors = {
    Free: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    Paid: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    Freemium:
      "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
    "Pay-as-you-go":
      "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link
          href="/"
          className="flex items-center gap-1 transition-colors hover:text-primary"
        >
          <Home className="h-4 w-4" />
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link
          href="/explore"
          className="transition-colors hover:text-primary"
        >
          Explore
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{tool.name}</span>
      </nav>

      {/* Main Content */}
      <div className="animate-fade-in space-y-8">
        {/* Header Section */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          {/* Logo */}
          <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-2xl border border-border shadow-lg">
            <Image
              src={tool.logo}
              alt={`${tool.name} logo`}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Title and Meta */}
          <div className="flex-1">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <h1 className="text-4xl font-bold text-foreground">
                {tool.name}
              </h1>
              <span
                className={`rounded-full px-4 py-1.5 text-sm font-semibold ${pricingColors[tool.pricing]}`}
              >
                {tool.pricing}
              </span>
            </div>
            <p className="mb-4 text-lg text-muted-foreground">
              {tool.category}
            </p>
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Visit Website
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Description */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="mb-4 text-2xl font-bold text-card-foreground">
            About {tool.name}
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            {tool.description}
          </p>
        </div>

        {/* Features */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="mb-4 text-2xl font-bold text-card-foreground">
            Key Features
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {tool.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 rounded-lg bg-secondary p-3"
              >
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-secondary-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Info */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold text-card-foreground">
              Category
            </h3>
            <Link
              href={`/explore?category=${encodeURIComponent(tool.category)}`}
              className="text-primary hover:underline"
            >
              {tool.category}
            </Link>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold text-card-foreground">
              Pricing Model
            </h3>
            <p className="text-muted-foreground">{tool.pricing}</p>
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center pt-8">
          <Link
            href="/explore"
            className="rounded-lg border-2 border-border bg-background px-6 py-3 font-semibold text-foreground transition-all duration-300 hover:bg-accent"
          >
            ← Back to Explore
          </Link>
        </div>
      </div>
    </div>
  );
}
