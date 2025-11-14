"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search AI tools...",
}: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`relative flex items-center rounded-lg border transition-all duration-200 ${
        isFocused
          ? "border-primary ring-2 ring-primary/20"
          : "border-border bg-background"
      }`}
    >
      <Search className="ml-3 h-5 w-5 text-muted-foreground" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className="flex-1 bg-transparent px-3 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="mr-3 rounded-full p-1 transition-colors duration-200 hover:bg-accent"
          aria-label="Clear search"
        >
          <X className="h-4 w-4 text-muted-foreground" />
        </button>
      )}
    </div>
  );
}
