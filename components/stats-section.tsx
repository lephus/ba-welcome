import { FileQuestion, Database, BrainCircuit } from "lucide-react";

const problems = [
  {
    icon: FileQuestion,
    color: "text-red-400",
    borderColor: "border-red-500/20",
    bgColor: "bg-red-500/5",
    iconBg: "bg-red-500/10",
    title: "1. Fragmented Knowledge",
    description: "Crucial context is scattered across disparate platforms.",
    items: [
      { label: "Lost Context", detail: "Scattered in Word docs, PDFs, Slack threads, and emails." },
      { label: "Isolated Information", detail: "Siloed in personal spreadsheets and notes." },
      { label: "Hard to Find", detail: "Isolated knowledge bases without unified search." },
      { label: "Knowledge Drain", detail: "Individual expertise leaves when the project ends." },
    ],
  },
  {
    icon: Database,
    color: "text-orange-400",
    borderColor: "border-orange-500/20",
    bgColor: "bg-orange-500/5",
    iconBg: "bg-orange-500/10",
    title: "2. Missing Reasoning",
    description: "Tools store information, but fail to capture the underlying reasoning.",
    items: [
      { label: "Static Storage", detail: "Traditional stack (Excel, Notion, Jira) just holds text." },
      { label: "RAG Limitations", detail: "Standard AI retrieval lacks structured knowledge." },
      { label: "No Memory", detail: "Tools forget past decisions and the 'why' behind them." },
      { label: "Rigid Workflows", detail: "Inability to adapt processes to complex problems." },
    ],
  },
  {
    icon: BrainCircuit,
    color: "text-purple-400",
    borderColor: "border-purple-500/20",
    bgColor: "bg-purple-500/5",
    iconBg: "bg-purple-500/10",
    title: "3. Analysis is Cognitive",
    description: "Analysis is structured cognitive work, requiring more than data retrieval.",
    items: [
      { label: "Frameworks", detail: "Requires applying specific analytical frameworks." },
      { label: "Methodologies", detail: "Methods are needed to synthesize abstract ideas." },
      { label: "Reasoning Patterns", detail: "BAs use complex, multi-step logical deductions." },
      { label: "Beyond Search", detail: "Requires generation, synthesis, and deep processing." },
    ],
  },
];

export function StatsSection() {
  return (
    <section className="border-y border-border/40 bg-card/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-accent mb-3">
            The Problem
          </p>
          <h2 className="font-mono text-2xl font-bold tracking-tight sm:text-3xl text-balance">
            Business analysis knowledge is fragmented
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className={`rounded-2xl border ${problem.borderColor} ${problem.bgColor} bg-[#141414] overflow-hidden`}
            >
              <div className={`border-b ${problem.borderColor} px-6 py-4 flex items-center gap-3`}>
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${problem.iconBg}`}>
                  <problem.icon className={`h-4 w-4 ${problem.color}`} />
                </div>
                <h3 className={`font-mono text-sm font-semibold ${problem.color}`}>
                  {problem.title}
                </h3>
              </div>

              <div className="px-6 py-5">
                <p className="text-xs text-muted-foreground mb-4">{problem.description}</p>
                <ul className="space-y-3">
                  {problem.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${problem.color.replace("text-", "bg-")} shrink-0`} />
                      <span className="text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground/80">{item.label}:</span>{" "}
                        {item.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
