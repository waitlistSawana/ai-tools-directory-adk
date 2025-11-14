"use client";

import { useState, useMemo } from "react";
import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import Filter from "@/components/Filter";
import { ArrowUpDown } from "lucide-react";
import aiToolsData from "@/data/aitools.json";
import { AITool, PricingFilter, SortOption } from "@/lib/types";

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [pricingFilter, setPricingFilter] = useState<PricingFilter>("All");
  const [sortOption, setSortOption] = useState<SortOption>("name-asc");

  const tools = aiToolsData as AITool[];

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(tools.map((tool) => tool.category))
    );
    return ["All", ...uniqueCategories.sort()];
  }, [tools]);

  const pricingOptions: PricingFilter[] = [
    "All",
    "Free",
    "Paid",
    "Freemium",
    "Pay-as-you-go",
  ];

  // Filter and sort tools
  const filteredTools = useMemo(() => {
    const result = tools.filter((tool) => {
      const matchesSearch = tool.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        categoryFilter === "All" || tool.category === categoryFilter;
      const matchesPricing =
        pricingFilter === "All" || tool.pricing === pricingFilter;

      return matchesSearch && matchesCategory && matchesPricing;
    });

    // Sort
    result.sort((a, b) => {
      switch (sortOption) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "pricing":
          return a.pricing.localeCompare(b.pricing);
        default:
          return 0;
      }
    });

    return result;
  }, [tools, searchQuery, categoryFilter, pricingFilter, sortOption]);

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
          Explore AI Tools
        </h1>
        <p className="text-lg text-muted-foreground">
          Discover {tools.length} AI tools to supercharge your workflow
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search by name..."
        />

        <div className="flex flex-wrap items-center gap-4">
          <Filter
            label="Category"
            value={categoryFilter}
            options={categories}
            onChange={setCategoryFilter}
          />
          <Filter
            label="Pricing"
            value={pricingFilter}
            options={pricingOptions}
            onChange={(value) => setPricingFilter(value as PricingFilter)}
          />
          <button
            onClick={() =>
              setSortOption((prev) =>
                prev === "name-asc" ? "name-desc" : "name-asc"
              )
            }
            className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-accent"
          >
            <ArrowUpDown className="h-4 w-4" />
            Sort: {sortOption === "name-asc" ? "A-Z" : "Z-A"}
          </button>
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground">
          Showing {filteredTools.length} of {tools.length} tools
        </p>
      </div>

      {/* Tools Grid */}
      {filteredTools.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool) => (
            <Card key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-xl text-muted-foreground">
            No tools found matching your criteria.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setCategoryFilter("All");
              setPricingFilter("All");
            }}
            className="mt-4 text-primary hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
