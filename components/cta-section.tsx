import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-border/40 bg-card/30 py-24 sm:py-32">
      <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
        <div
          className="w-[200%] h-[70%] origin-bottom animate-floor"
          style={{
            background: `
              linear-gradient(to right, #3a3a3a 2px, transparent 2px),
              linear-gradient(to bottom, #3a3a3a 2px, transparent 2px)
            `,
            backgroundSize: "4rem 4rem",
            transform: "perspective(500px) rotateX(60deg)",
            maskImage:
              "linear-gradient(to top, black 0%, black 50%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 0%, black 50%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Ready to deploy your BAWS?
          </h2>
          <div className="mt-8 flex flex-col items-center gap-4 text-left max-w-md mx-auto">
            <p className="text-center text-lg text-muted-foreground mb-4">
              Join the community of Business Analysts building with open-source AI. Self-host your intelligence engine today.
            </p>
            <ul className="space-y-4 font-mono text-sm text-foreground">
              {[
                "Consolidate scattered analytical artifacts",
                "Deploy context-aware AI Analyst Agents",
                "Build compounding institutional memory",
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 bg-secondary/20 border border-border/40 p-3 rounded-lg w-full">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="w-full sm:w-auto font-mono"
              asChild
            >
              <a
                href="https://github.com/lephus/ba-workspace"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deploy your workspace
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-transparent font-mono"
              asChild
            >
              <a
                href="https://docs.businessanalysis.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read documentation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
