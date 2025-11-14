import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Shield, TrendingUp } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Sparkles,
      title: "200+ AI Tools",
      description: "Comprehensive collection of the latest AI tools and platforms",
    },
    {
      icon: Zap,
      title: "Fast & Responsive",
      description: "Built with Next.js 14 for optimal performance",
    },
    {
      icon: Shield,
      title: "Curated Quality",
      description: "Hand-picked tools with detailed information and reviews",
    },
    {
      icon: TrendingUp,
      title: "Always Updated",
      description: "Regular updates with the newest AI innovations",
    },
  ];

  return (
    <div className="container mx-auto max-w-7xl px-4 py-16">
      {/* Hero Section */}
      <section className="mb-20 text-center">
        <div className="animate-slide-up">
          <h1 className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
            Discover the Best AI Tools
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Explore a comprehensive directory of 200+ AI tools categorized by
            purpose. Find the perfect AI solution for content creation, coding,
            design, and more.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/explore"
              className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Explore Tools
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="rounded-lg border-2 border-border bg-background px-8 py-4 text-lg font-semibold text-foreground transition-all duration-300 hover:bg-accent"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mb-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
          Why Choose Our Directory?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-fade-in rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Preview */}
      <section className="mb-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
          Popular Categories
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Conversational AI",
            "Image Generation",
            "Code Assistant",
            "Content Writing",
            "Video Editing",
            "Productivity",
          ].map((category, index) => (
            <Link
              key={index}
              href={`/explore?category=${encodeURIComponent(category)}`}
              className="group rounded-xl border border-border bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-foreground transition-colors duration-200 group-hover:text-primary">
                {category}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Explore {category.toLowerCase()} tools →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 p-12 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Ready to Explore?
        </h2>
        <p className="mb-8 text-lg opacity-90">
          Start discovering the perfect AI tools for your projects today.
        </p>
        <Link
          href="/explore"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          Browse All Tools
          <ArrowRight className="h-5 w-5" />
        </Link>
      </section>
    </div>
  );
}
