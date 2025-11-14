"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/explore", label: "Explore" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
        >
          <div className="rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-2">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">
            AI Tools Directory
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium transition-colors duration-200 hover:text-primary",
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-[21px] left-0 h-0.5 w-full bg-primary" />
              )}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
