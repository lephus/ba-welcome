import { Bot, Workflow, FileCheck, Database, GitBranch, Terminal, Layers } from "lucide-react";

const agents = [
  {
    name: "Requirements Engineer",
    role: "BABOK-aligned validation",
    description: "Evaluates requirements for clarity, completeness, and testability. Flags contradictions across the entire knowledge domain.",
    capabilities: [
      "Ambiguity detection",
      "Acceptance criteria generation",
      "Traceability validation",
    ],
    icon: FileCheck,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    name: "Process Architect",
    role: "Workflow logic analysis",
    description: "Transforms text into structured logic. Analyzes process flows for bottlenecks, edge cases, and missing error handling.",
    capabilities: [
      "State machine extraction",
      "Process optimization",
      "Edge case identification",
    ],
    icon: Workflow,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
  },
  {
    name: "System Modeler",
    role: "Data & architecture design",
    description: "Extracts entities, relationships, and business rules to build consistent semantic models of the organization.",
    capabilities: [
      "Entity-relationship mapping",
      "Taxonomy generation",
      "Business rule extraction",
    ],
    icon: Database,
    color: "text-green-400",
    bgColor: "bg-green-500/10",
  },
];

export function DeveloperExperience() {
  return (
    <section
      id="agents"
      className="border-y border-border/40 bg-card/30 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-accent">
            <Bot className="h-4 w-4" />
            <span className="font-mono uppercase tracking-wider">
              Specialized AI Analyst Agents
            </span>
          </div>
          <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            A collaborative intelligence network
          </h2>
          <p className="mt-4 text-muted-foreground">
            Rather than a single raw LLM interface, BusinessAnalysis.io is an extensible open-source platform. Route your work through a team of specialized agents, or build and run your own locally.
          </p>
        </div>

        {/* Platform Architecture Diagram */}
        <div className="mt-16 rounded-2xl border border-border/60 bg-[#141414] overflow-hidden p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-4 w-full">
              <div className="rounded-xl border border-border/60 bg-[#1a1a1a] p-4 text-center">
                <Terminal className="h-6 w-6 text-accent mx-auto mb-2" />
                <h3 className="font-mono text-sm font-semibold text-accent">Agent Runtime</h3>
                <p className="text-xs text-muted-foreground mt-1">Orchestration & Context Assembly</p>
              </div>
            </div>
            <GitBranch className="h-8 w-8 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="flex-[2] grid grid-cols-2 gap-4 w-full">
              {["Requirements Analysis", "Process Modeling", "Data Architecture", "Strategic Alignment"].map((domain, i) => (
                <div key={i} className="rounded-xl border border-border/40 bg-secondary/20 p-3 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent/70" />
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{domain}</span>
                </div>
              ))}
            </div>
            <GitBranch className="h-8 w-8 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="flex-1 space-y-4 w-full">
              <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-4 text-center">
                <Layers className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <h3 className="font-mono text-sm font-semibold text-blue-400">Knowledge System</h3>
                <p className="text-xs text-muted-foreground mt-1">Structured Organization Brain</p>
              </div>
            </div>
          </div>
        </div>

        {/* Agent Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="rounded-xl border border-border/60 bg-[#141414] p-6 flex flex-col highlight-card"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${agent.bgColor}`}>
                  <agent.icon className={`h-5 w-5 ${agent.color}`} />
                </div>
                <span className={`font-mono text-xs font-bold uppercase tracking-wider ${agent.color} px-2 py-1 rounded-full border border-current/20`}>
                  Agent
                </span>
              </div>

              <h3 className="font-mono text-lg font-semibold text-foreground mb-1">
                {agent.name}
              </h3>
              <p className={`font-mono text-xs uppercase tracking-wider mb-4 ${agent.color}`}>
                {agent.role}
              </p>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {agent.description}
              </p>

              <div className="mt-auto">
                <p className="font-mono text-xs text-muted-foreground mb-3 uppercase tracking-wider">Core Capabilities</p>
                <ul className="space-y-2">
                  {agent.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${agent.color.replace("text-", "bg-")} shrink-0`} />
                      {cap}
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
