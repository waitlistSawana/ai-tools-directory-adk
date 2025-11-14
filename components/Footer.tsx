import { Github, Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} AI Tools Directory.</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 fill-red-500 text-red-500" />{" "}
              for developers
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/yourusername/ai-tools-directory"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span>View on GitHub</span>
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center text-xs text-muted-foreground">
          <p>
            Built with Next.js 14, TypeScript, and Tailwind CSS • Deployed on
            Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
