import { User, Target, AlertCircle, MessageSquare, Zap, Brain, Layers } from "lucide-react";

const goals = [
  "Maintain clear traceability from stakeholder needs → requirements → deliverables",
  "Reduce time spent searching for documents, notes, and decisions",
  "Ensure requirement consistency across multiple project phases",
  "Quickly validate deliverables against business rules and stakeholder expectations",
  "Collaborate effectively with distributed teams",
];

const frustrations = [
  "Requirements scattered across Word docs, PDFs, Slack threads, and interview notes",
  "No unified view of stakeholder feedback and how it impacts requirements",
  "Constant rework due to missed dependencies or conflicting requirements",
  "Manual cross-checking of requirements against business rules",
  "Difficulty maintaining Requirements Traceability Matrix (RTM) as projects evolve",
];

const scenarios = [
  {
    number: "01",
    user: "Alex — Senior BA",
    title: "Multi-Agent Validation to Catch Conflicts Early",
    description:
      "Alex has just completed a 50-page requirements document. Before sending it to stakeholders, Alex runs BA Workspace validation. The system identifies:",
    findings: [
      "3 conflicting requirements between Finance and Operations stakeholders",
      "2 business rules that contradict each other",
      "5 requirements that don't trace to any stakeholder need",
      "12 requirements that need more specificity",
    ],
    outcome:
      "Alex fixes these issues in 30 minutes instead of discovering them in a painful stakeholder meeting later.",
    icon: Zap,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    number: "02",
    user: "Minh — Junior BA",
    title: "Using AI to Learn Best Practices",
    description:
      "Minh is new to BA work and writes requirements that are too vague. Emma (Requirements Agent) provides inline feedback:",
    findings: [
      '"This requirement is not measurable. Consider adding success criteria."',
      '"This requirement contains multiple needs. Consider splitting it."',
      '"This requirement uses ambiguous language. Be more specific."',
    ],
    outcome:
      "Minh learns BABOK principles through real-time coaching, improving quality with each iteration.",
    icon: Brain,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    number: "03",
    user: "Lan — BA Lead",
    title: "Knowledge Graph for Impact Analysis",
    description:
      "A key stakeholder requests a change to a core process. Lan uses the Knowledge Graph to instantly see:",
    findings: [
      "15 requirements linked to this process",
      "8 deliverables that will be affected",
      "12 other stakeholders who need to be consulted",
      "3 downstream projects that depend on this",
    ],
    outcome:
      "Lan presents a complete impact assessment in 10 minutes instead of spending hours manually tracing dependencies.",
    icon: Layers,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
  },
];

export function DeveloperExperience() {
  return (
    <section
      id="personas"
      className="border-y border-border/40 bg-card/30 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-accent">
            <User className="h-4 w-4" />
            <span className="font-mono uppercase tracking-wider">
              Personas & User Scenarios
            </span>
          </div>
          <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Built around how real BAs work
          </h2>
          <p className="mt-4 text-muted-foreground">
            BA Workspace is designed from the ground up around the daily
            challenges of Business Analysts at every level.
          </p>
        </div>

        {/* Persona card */}
        <div className="mt-16 rounded-2xl border border-border/60 bg-[#141414] overflow-hidden">
          <div className="border-b border-border/60 bg-[#1a1a1a] px-6 py-4 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 text-accent font-mono font-bold text-sm">
              A
            </div>
            <div>
              <p className="font-mono font-semibold text-sm">Alex</p>
              <p className="text-xs text-muted-foreground">Senior Business Analyst · Da Nang, Vietnam · Age 32</p>
            </div>
            <div className="ml-auto hidden sm:block">
              <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs text-accent font-mono">
                Digital transformation & software implementation
              </span>
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border/60">
            {/* Goals */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-4 w-4 text-green-400" />
                <h3 className="font-mono text-sm font-semibold text-green-400 uppercase tracking-wider">Goals</h3>
              </div>
              <ul className="space-y-3">
                {goals.map((goal, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-500 shrink-0" />
                    {goal}
                  </li>
                ))}
              </ul>
            </div>

            {/* Frustrations */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="h-4 w-4 text-red-400" />
                <h3 className="font-mono text-sm font-semibold text-red-400 uppercase tracking-wider">Frustrations</h3>
              </div>
              <ul className="space-y-3">
                {frustrations.map((frustration, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                    {frustration}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Problem statement */}
          <div className="border-t border-border/60 bg-[#111111] px-6 py-5">
            <div className="flex items-start gap-3">
              <MessageSquare className="h-4 w-4 text-accent mt-0.5 shrink-0" />
              <div>
                <p className="font-mono text-xs font-semibold text-accent uppercase tracking-wider mb-2">Problem Statement</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Alex manages multiple digital transformation projects where requirements come from diverse stakeholders
                  via interviews, workshops, emails, and meetings. Critical information gets buried in dozens of documents,
                  making it difficult to validate consistency, trace decisions, and ensure nothing falls through the cracks.
                  Alex needs a workspace where all BA artifacts are connected, AI helps validate deliverables, and
                  traceability is automatic — not manual.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scenarios */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {scenarios.map((scenario) => (
            <div
              key={scenario.number}
              className="rounded-xl border border-border/60 bg-[#141414] p-6 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${scenario.bgColor}`}>
                  <scenario.icon className={`h-5 w-5 ${scenario.color}`} />
                </div>
                <span className={`font-mono text-3xl font-bold ${scenario.color} opacity-30`}>
                  {scenario.number}
                </span>
              </div>

              <p className={`font-mono text-xs font-semibold uppercase tracking-wider mb-1 ${scenario.color}`}>
                {scenario.user}
              </p>
              <h3 className="font-mono text-sm font-semibold text-foreground mb-3">
                {scenario.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                {scenario.description}
              </p>

              <ul className="space-y-1.5 mb-4">
                {scenario.findings.map((finding, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className={`mt-1 h-1 w-1 rounded-full ${scenario.color.replace("text-", "bg-")} shrink-0`} />
                    {finding}
                  </li>
                ))}
              </ul>

              <div className={`mt-auto rounded-lg ${scenario.bgColor} px-3 py-2.5`}>
                <p className={`text-xs font-medium ${scenario.color}`}>{scenario.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
