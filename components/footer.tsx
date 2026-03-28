import Link from "next/link";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 sm:flex-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
              <span className="text-sm font-bold text-background">BA</span>
            </div>
            <span className="text-lg font-semibold tracking-tight font-mono">
              BusinessAnalysis.io
            </span>
          </Link>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground sm:flex-1 text-center">
            © {new Date().getFullYear()} BusinessAnalysis.io. All rights reserved.
          </p>

          <div className="sm:flex-1 flex justify-center sm:justify-end">
            <a
              href="https://github.com/lephus/ba-workspace"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-border hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
