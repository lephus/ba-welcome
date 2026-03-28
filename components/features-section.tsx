import { FolderTree, Layers, FileText, Database, BrainCircuit, Lightbulb } from "lucide-react";

export function FeaturesSection() {
  return (
    <section id="architecture" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-accent">
            <Layers className="h-4 w-4" />
            <span className="font-mono uppercase tracking-wider">Architecture</span>
          </div>
          <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            From Documents to Knowledge Systems
          </h2>
          <p className="mt-4 text-muted-foreground">
            A structured approach that maps scattered artifacts into an interconnected organizational brain, turning static text into dynamic, actionable intelligence.
          </p>
        </div>

        {/* Two-column grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Knowledge Directory Structure */}
          <div className="rounded-2xl border border-border/40 bg-[#141414] overflow-hidden">
            <div className="flex items-center gap-3 border-b border-border/40 bg-[#1a1a1a] px-6 py-4">
              <FolderTree className="h-5 w-5 text-accent" />
              <h3 className="font-mono text-sm font-semibold text-accent uppercase tracking-wider">
                Structured Knowledge Domains
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  "/frameworks", "/strategy", "/product", "/market",
                  "/cases", "/templates", "/tools", "/playbooks"
                ].map((dir, i) => (
                  <div key={i} className="flex items-center gap-2 font-mono text-xs text-muted-foreground bg-secondary/30 px-3 py-2 rounded-md border border-border/40">
                    <FolderTree className="h-3 w-3 text-accent/70" />
                    {dir}
                  </div>
                ))}
              </div>
              <ul className="space-y-3 pt-4 border-t border-border/40">
                {[
                  "Self-hosted organizational brain with standardized taxonomies",
                  "Extensible contexts for custom open-source AI Agents",
                  "Cross-domain relationship mapping and traceability",
                  "Reusable analytical patterns and deliverables"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Transformation Flow */}
          <div className="rounded-2xl border border-border/40 bg-[#141414] overflow-hidden">
            <div className="flex items-center gap-3 border-b border-border/40 bg-[#1a1a1a] px-6 py-4">
              <BrainCircuit className="h-5 w-5 text-blue-400" />
              <h3 className="font-mono text-sm font-semibold text-blue-400 uppercase tracking-wider">
                The Transformation Flow
              </h3>
            </div>
            <div className="p-6 flex flex-col justify-center h-full gap-4">
              {[
                { icon: FileText, title: "Documents", desc: "Static PDFs, Notes", color: "text-muted-foreground" },
                { icon: Database, title: "Knowledge", desc: "Structured Semantics", color: "text-blue-400" },
                { icon: BrainCircuit, title: "Reasoning", desc: "Agent Workflows", color: "text-purple-400" },
                { icon: Lightbulb, title: "Decisions", desc: "Actionable Outputs", color: "text-green-400" },
              ].map((step, i, arr) => (
                <div key={i} className="relative">
                  <div className="flex items-center gap-4 bg-secondary/20 p-4 rounded-xl border border-border/40 relative z-10">
                    <div className={`p-2 rounded-lg bg-background/50 border border-border/40 ${step.color}`}>
                      <step.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className={`font-mono text-sm font-semibold ${step.color}`}>{step.title}</p>
                      <p className="text-xs text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="absolute left-9 top-12 h-6 w-0.5 bg-border/60 -z-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
