/**
 * Type definitions for AI Tools Directory
 */

export interface AITool {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  pricing: "Free" | "Paid" | "Freemium" | "Pay-as-you-go";
  logo: string;
  website: string;
  features: string[];
}

export type PricingFilter = "All" | AITool["pricing"];
export type CategoryFilter = "All" | string;
export type SortOption = "name-asc" | "name-desc" | "pricing";
