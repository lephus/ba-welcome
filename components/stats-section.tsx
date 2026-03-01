import { Brain, FolderOpen, GitBranch } from "lucide-react";

const features = [
  {
    icon: Brain,
    color: "text-accent",
    borderColor: "border-accent/20",
    bgColor: "bg-accent/5",
    iconBg: "bg-accent/10",
    title: "AI-Powered Document Intelligence",
    description: "Automatic categorization and knowledge extraction from BA artifacts.",
    items: [
      { label: "Auto-categorize", detail: "Requirements, Analysis, Diagrams, Specifications." },
      { label: "Extract entities", detail: "Stakeholders, business rules, processes, requirements." },
      { label: "Generate dynamic tags", detail: "Based on document content." },
      { label: "Create relationships", detail: "In the Knowledge Graph." },
    ],
  },
  {
    icon: FolderOpen,
    color: "text-blue-400",
    borderColor: "border-blue-500/20",
    bgColor: "bg-blue-500/5",
    iconBg: "bg-blue-500/10",
    title: "Smart Document Hub",
    description: "Intelligent document management system.",
    items: [
      { label: "View Modes", detail: "Grid (visual), List (detailed), Timeline (chronological)." },
      { label: "Smart Folders", detail: "All, Recently Used, Favorites, Uncategorized, Untagged, Trash." },
      { label: "AI Hover Overlay", detail: "Summary, risk detection, action items, confidence score." },
      { label: "Search & Version Control", detail: "Semantic search and document evolution tracking." },
    ],
  },
  {
    icon: GitBranch,
    color: "text-purple-400",
    borderColor: "border-purple-500/20",
    bgColor: "bg-purple-500/5",
    iconBg: "bg-purple-500/10",
    title: "Knowledge Graph & Traceability",
    description: "Visual relationship mapping across all BA artifacts.",
    items: [
      { label: "Full chains", detail: "Stakeholder → Requirement → Process → Deliverable." },
      { label: "Interactive graph", detail: "Showing dependencies and relationships." },
      { label: "Impact analysis", detail: "When requirements change." },
      { label: "Gap detection & RTM", detail: "Missing links and Requirements Traceability Matrix export." },
    ],
  },
];

export function StatsSection() {
  return (
    <section className="border-y border-border/40 bg-card/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-accent mb-3">
            Key Features
          </p>
          <h2 className="font-mono text-2xl font-bold tracking-tight sm:text-3xl text-balance">
            Everything a BA needs, in one place
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`rounded-2xl border ${feature.borderColor} ${feature.bgColor} bg-[#141414] overflow-hidden`}
            >
              <div className={`border-b ${feature.borderColor} px-6 py-4 flex items-center gap-3`}>
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${feature.iconBg}`}>
                  <feature.icon className={`h-4 w-4 ${feature.color}`} />
                </div>
                <h3 className={`font-mono text-sm font-semibold ${feature.color}`}>
                  {feature.title}
                </h3>
              </div>

              <div className="px-6 py-5">
                <p className="text-xs text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${feature.color.replace("text-", "bg-")} shrink-0`} />
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
