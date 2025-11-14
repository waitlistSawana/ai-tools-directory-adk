import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { AITool } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CardProps {
  tool: AITool;
}

const pricingColors = {
  Free: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  Paid: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  Freemium:
    "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
  "Pay-as-you-go":
    "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
};

export default function Card({ tool }: CardProps) {
  return (
    <div className="group relative animate-fade-in overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <Image
          src={tool.logo}
          alt={`${tool.name} logo`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Pricing Badge */}
        <div className="absolute right-3 top-3">
          <span
            className={cn(
              "rounded-full px-3 py-1 text-xs font-semibold",
              pricingColors[tool.pricing]
            )}
          >
            {tool.pricing}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Title and Category */}
        <div className="mb-3">
          <h3 className="mb-1 text-xl font-bold text-card-foreground">
            {tool.name}
          </h3>
          <p className="text-sm text-muted-foreground">{tool.category}</p>
        </div>

        {/* Description */}
        <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
          {tool.description}
        </p>

        {/* Features */}
        <div className="mb-4 flex flex-wrap gap-2">
          {tool.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link
            href={`/explore/${tool.slug}`}
            className="flex-1 rounded-lg bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
          >
            Learn More
          </Link>
          <a
            href={tool.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-lg border border-border bg-background px-4 py-2 transition-colors duration-200 hover:bg-accent"
            aria-label={`Visit ${tool.name} website`}
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
