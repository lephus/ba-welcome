import { CheckCircle2, XCircle, Compass } from "lucide-react";

const goals = [
  {
    number: 1,
    title: "Clear navigation",
    description: "Find any BA artifact in ≤3 clicks.",
  },
  {
    number: 2,
    title: "Automatic traceability",
    description: "RTM generates itself, no manual linking.",
  },
  {
    number: 3,
    title: "Deliverable validation",
    description: "AI catches defects before human review.",
  },
  {
    number: 4,
    title: "Knowledge reuse",
    description: "Patterns and templates learned from past projects.",
  },
  {
    number: 5,
    title: "Collaboration clarity",
    description: "Everyone sees the same truth, no version confusion.",
  },
];

const nonGoals = [
  {
    number: 1,
    title: "Full project management",
    description: "No Gantt, EVM, or resource allocation.",
  },
  {
    number: 2,
    title: "Enterprise system integrations",
    description: "Focus on document import/export only.",
  },
  {
    number: 3,
    title: "Real-time co-editing",
    description: "Asynchronous collaboration is sufficient.",
  },
  {
    number: 4,
    title: "Custom AI agent creation",
    description: "Predefined BA agents only.",
  },
  {
    number: 5,
    title: "Advanced BPMN simulation",
    description: "Validation only, not execution.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-accent">
            <Compass className="h-4 w-4" />
            <span className="font-mono uppercase tracking-wider">Vision</span>
          </div>
          <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Goals & Non-Goals
          </h2>
          <p className="mt-4 text-muted-foreground">
            A clear scope keeps the product focused. Here's exactly what BA
            Workspace sets out to solve — and what it intentionally leaves out
            for MVP.
          </p>
        </div>

        {/* Two-column grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Goals */}
          <div className="rounded-2xl border border-green-500/20 bg-[#141414] overflow-hidden">
            <div className="flex items-center gap-3 border-b border-green-500/20 bg-green-500/5 px-6 py-4">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <h3 className="font-mono text-sm font-semibold text-green-400 uppercase tracking-wider">
                Goals
              </h3>
            </div>
            <ul className="divide-y divide-border/40">
              {goals.map((goal) => (
                <li key={goal.number} className="flex items-start gap-4 px-6 py-5">
                  <span className="font-mono text-xs font-bold text-green-500/50 mt-0.5 w-4 shrink-0">
                    {goal.number}
                  </span>
                  <div>
                    <p className="font-mono text-sm font-semibold text-foreground">
                      {goal.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {goal.description}
                    </p>
                  </div>
                  <CheckCircle2 className="ml-auto h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                </li>
              ))}
            </ul>
          </div>

          {/* Non-Goals */}
          <div className="rounded-2xl border border-red-500/20 bg-[#141414] overflow-hidden">
            <div className="flex items-center gap-3 border-b border-red-500/20 bg-red-500/5 px-6 py-4">
              <XCircle className="h-5 w-5 text-red-400" />
              <h3 className="font-mono text-sm font-semibold text-red-400 uppercase tracking-wider">
                Non-Goals
              </h3>
              <span className="ml-auto rounded-full border border-red-500/30 bg-red-500/10 px-2 py-0.5 text-[10px] font-mono text-red-400">
                MVP
              </span>
            </div>
            <ul className="divide-y divide-border/40">
              {nonGoals.map((item) => (
                <li key={item.number} className="flex items-start gap-4 px-6 py-5">
                  <span className="font-mono text-xs font-bold text-red-500/50 mt-0.5 w-4 shrink-0">
                    {item.number}
                  </span>
                  <div>
                    <p className="font-mono text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <XCircle className="ml-auto h-4 w-4 text-red-500/60 shrink-0 mt-0.5" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
