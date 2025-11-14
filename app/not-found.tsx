import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
      <h2 className="mb-4 text-2xl font-semibold text-foreground">
        Page Not Found
      </h2>
      <p className="mb-8 text-muted-foreground">
        Sorry, we couldn't find the page you're looking for. It might have been
        moved or deleted.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        <Home className="h-5 w-5" />
        Back to Home
      </Link>
    </div>
  );
}
