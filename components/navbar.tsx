"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
              <span className="text-sm font-bold text-background">BA</span>
            </div>
            <span className="text-lg font-semibold tracking-tight font-mono">
              BusinessAnalysis.io
            </span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="#architecture"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
            >
              Platform
            </a>
            <a
              href="#agents"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
            >
              Agents
            </a>
          </nav>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <Button size="sm" asChild>
            <a href="https://github.com/lephus/ba-workspace" target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <nav className="flex flex-col gap-4 px-4 py-6">
            <a
              href="#architecture"
              onClick={() => setIsOpen(false)}
              className="text-sm text-muted-foreground cursor-pointer"
            >
              Platform
            </a>
            <a
              href="#agents"
              onClick={() => setIsOpen(false)}
              className="text-sm text-muted-foreground cursor-pointer"
            >
              Agents
            </a>
            <div className="flex flex-col gap-2 pt-4">
              <Button size="sm">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
