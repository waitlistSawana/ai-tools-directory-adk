import type { Metadata } from "next";
import Link from "next/link";
import { Code, Palette, Zap, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about AI Tools Directory - a comprehensive catalog of AI tools built with Next.js 14, TypeScript, and Tailwind CSS.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="animate-slide-up space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            About This Project
          </h1>
          <p className="text-lg text-muted-foreground">
            A modern, performant directory of AI tools built with cutting-edge
            web technologies
          </p>
        </div>

        {/* Project Overview */}
        <section className="rounded-xl border border-border bg-card p-8">
          <h2 className="mb-4 text-2xl font-bold text-card-foreground">
            Project Overview
          </h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            AI Tools Directory is a comprehensive catalog of 200+ artificial
            intelligence tools and platforms. This project was built as part of
            an SDE Intern Assignment to demonstrate proficiency in modern web
            development technologies and best practices.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            The directory helps users discover and explore AI tools across
            various categories including conversational AI, image generation,
            code assistants, content writing, video editing, and more. Each tool
            is carefully curated with detailed information, features, and
            pricing models.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="rounded-xl border border-border bg-card p-8">
          <h2 className="mb-6 text-2xl font-bold text-card-foreground">
            Tech Stack
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-card-foreground">
                  Next.js 14
                </h3>
                <p className="text-sm text-muted-foreground">
                  App Router, SSG, ISR, and optimized performance
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-card-foreground">
                  TypeScript
                </h3>
                <p className="text-sm text-muted-foreground">
                  Type-safe code with full IDE support
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-card-foreground">
                  Tailwind CSS
                </h3>
                <p className="text-sm text-muted-foreground">
                  Utility-first CSS with custom design system
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-card-foreground">
                  Lucide Icons
                </h3>
                <p className="text-sm text-muted-foreground">
                  Beautiful, consistent icon system
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="rounded-xl border border-border bg-card p-8">
          <h2 className="mb-6 text-2xl font-bold text-card-foreground">
            Key Features
          </h2>
          <ul className="space-y-3">
            {[
              "Static Site Generation (SSG) with Incremental Static Regeneration (ISR)",
              "Fully responsive design optimized for all screen sizes",
              "Dark mode support with persistent theme preference",
              "Advanced search, filter, and sort functionality",
              "SEO-optimized with metadata and sitemap generation",
              "Type-safe development with TypeScript",
              "Smooth animations and micro-interactions",
              "Accessible UI components following best practices",
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Design Inspiration */}
        <section className="rounded-xl border border-border bg-card p-8">
          <h2 className="mb-6 text-2xl font-bold text-card-foreground">
            Design Inspiration
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold text-card-foreground">
                Dribbble
              </h3>
              <a
                href="https://dribbble.com/shots/popular/web-design"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Modern Web Design Trends
              </a>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-card-foreground">
                Awwwards
              </h3>
              <a
                href="https://www.awwwards.com/websites/clean/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Clean & Minimalist Websites
              </a>
            </div>
          </div>
        </section>

        {/* AI Prompts Used */}
        <section className="rounded-xl border border-border bg-card p-8">
          <h2 className="mb-6 text-2xl font-bold text-card-foreground">
            Example AI Prompts Used
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg bg-secondary p-4">
              <p className="font-mono text-sm text-secondary-foreground">
                "Create a Next.js 14 component for a card that displays AI tool
                information with hover animations and responsive design using
                Tailwind CSS"
              </p>
            </div>
            <div className="rounded-lg bg-secondary p-4">
              <p className="font-mono text-sm text-secondary-foreground">
                "Generate a TypeScript interface for an AI tool with fields for
                id, name, category, description, pricing, logo, website, and
                features array"
              </p>
            </div>
            <div className="rounded-lg bg-secondary p-4">
              <p className="font-mono text-sm text-secondary-foreground">
                "Implement a dark mode toggle in Next.js 14 using React Context
                and localStorage with smooth transitions"
              </p>
            </div>
          </div>
        </section>

        {/* Future Improvements */}
        <section className="rounded-xl border border-border bg-card p-8">
          <h2 className="mb-6 text-2xl font-bold text-card-foreground">
            Future Improvements
          </h2>
          <ul className="space-y-3">
            {[
              "User authentication and personalized tool collections",
              "Pagination for better performance with large datasets",
              "User reviews and ratings for each tool",
              "Advanced filtering with multiple categories",
              "Tool comparison feature",
              "Integration with external APIs for real-time data",
              "Newsletter subscription for new tool updates",
              "Community-submitted tools with moderation",
            ].map((improvement, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-muted-foreground" />
                <span className="text-muted-foreground">{improvement}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* GitHub Link */}
        <div className="flex justify-center">
          <a
            href="https://github.com/yourusername/ai-tools-directory"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Github className="h-5 w-5" />
            View on GitHub
          </a>
        </div>

        {/* Back to Home */}
        <div className="flex justify-center">
          <Link
            href="/"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
