"use client";

import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface FilterProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export default function Filter({
  label,
  value,
  options,
  onChange,
}: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-accent"
      >
        <span className="text-muted-foreground">{label}:</span>
        <span>{value}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 z-10 mt-2 w-48 animate-fade-in rounded-lg border border-border bg-background shadow-lg">
          <div className="max-h-64 overflow-y-auto py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full px-4 py-2 text-left text-sm transition-colors duration-150 hover:bg-accent",
                  value === option
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-foreground"
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
