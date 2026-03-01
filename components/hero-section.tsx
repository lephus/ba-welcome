"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Building2,
  Briefcase,
  BarChart2,
} from "lucide-react";

export function HeroSection() {
  const [displayedText1, setDisplayedText1] = useState("");
  const [displayedText2, setDisplayedText2] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const text1 = "Analyze smarter.";
  const text2 = "Trace everything.";

  useEffect(() => {
    let currentIndex = 0;
    const fullText = text1 + "|" + text2; // Use | as separator

    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        const currentChar = fullText.substring(0, currentIndex);
        const parts = currentChar.split("|");
        setDisplayedText1(parts[0] || "");
        setDisplayedText2(parts[1] || "");
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTypingDone(true);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    interface GridDot {
      x: number;
      y: number;
      direction: "horizontal" | "vertical";
      speed: number;
      size: number;
      opacity: number;
      color: string;
      targetX: number;
      targetY: number;
      trail: { x: number; y: number }[];
    }

    const colors = ["rgba(255, 255, 255, 0.5)"]; // Changed colors array to white with 0.5 opacity
    const gridSize = 64; // 4rem = 64px to match the grid background
    const dotCount = 30; // Increased dot count from 12 to 30

    const snapToGrid = (value: number) =>
      Math.round(value / gridSize) * gridSize;

    const gridDots: GridDot[] = [];

    for (let i = 0; i < dotCount; i++) {
      const isHorizontal = Math.random() > 0.5;
      const x = snapToGrid(Math.random() * canvas.offsetWidth);
      const y = snapToGrid(Math.random() * canvas.offsetHeight);

      gridDots.push({
        x,
        y,
        direction: isHorizontal ? "horizontal" : "vertical",
        speed: Math.random() * 9 + 7.5,
        size: Math.random() * 2 + 2,
        opacity: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        targetX: x,
        targetY: y,
        trail: [],
      });
    }

    let animationId: number;
    let lastTime = 0;
    const frameInterval = 1000 / 30;

    const animate = (currentTime: number) => {
      animationId = requestAnimationFrame(animate);

      const deltaTime = currentTime - lastTime;
      if (deltaTime < frameInterval) return;
      lastTime = currentTime - (deltaTime % frameInterval);

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      gridDots.forEach((dot) => {
        dot.trail.unshift({ x: dot.x, y: dot.y });
        if (dot.trail.length > 10) dot.trail.pop();

        if (dot.direction === "horizontal") {
          if (Math.abs(dot.x - dot.targetX) < dot.speed) {
            dot.x = dot.targetX;
            if (Math.random() > 0.7) {
              dot.direction = "vertical";
              const steps = Math.floor(Math.random() * 5) + 1;
              dot.targetY =
                dot.y + (Math.random() > 0.5 ? 1 : -1) * steps * gridSize;
            } else {
              const steps = Math.floor(Math.random() * 8) + 2;
              dot.targetX =
                dot.x + (Math.random() > 0.5 ? 1 : -1) * steps * gridSize;
            }
          } else {
            dot.x += dot.x < dot.targetX ? dot.speed : -dot.speed;
          }
        } else {
          if (Math.abs(dot.y - dot.targetY) < dot.speed) {
            dot.y = dot.targetY;
            if (Math.random() > 0.7) {
              dot.direction = "horizontal";
              const steps = Math.floor(Math.random() * 8) + 2;
              dot.targetX =
                dot.x + (Math.random() > 0.5 ? 1 : -1) * steps * gridSize;
            } else {
              const steps = Math.floor(Math.random() * 5) + 1;
              dot.targetY =
                dot.y + (Math.random() > 0.5 ? 1 : -1) * steps * gridSize;
            }
          } else {
            dot.y += dot.y < dot.targetY ? dot.speed : -dot.speed;
          }
        }

        if (dot.x < -gridSize) {
          dot.x = canvas.offsetWidth + gridSize;
          dot.targetX = dot.x;
          dot.trail = [];
        }
        if (dot.x > canvas.offsetWidth + gridSize) {
          dot.x = -gridSize;
          dot.targetX = dot.x;
          dot.trail = [];
        }
        if (dot.y < -gridSize) {
          dot.y = canvas.offsetHeight + gridSize;
          dot.targetY = dot.y;
          dot.trail = [];
        }
        if (dot.y > canvas.offsetHeight + gridSize) {
          dot.y = -gridSize;
          dot.targetY = dot.y;
          dot.trail = [];
        }

        if (dot.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          for (let i = 0; i < dot.trail.length; i++) {
            ctx.lineTo(dot.trail[i].x, dot.trail[i].y);
          }
          ctx.strokeStyle = dot.color;
          ctx.globalAlpha = dot.opacity * 0.4;
          ctx.lineWidth = dot.size;
          ctx.lineCap = "round";
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.globalAlpha = dot.opacity * 0.15;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.globalAlpha = dot.opacity;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative overflow-hidden pt-20 pb-10 sm:pt-28 sm:pb-16 lg:pt-36">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,#000_40%,transparent_100%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Now in early access — Powered by Gemini AI
          </div>

          <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl relative">
            <span className="invisible" aria-hidden="true">
              <span className="text-balance">Analyze smarter.</span>
              <br />
              <span className="text-balance">Trace everything.</span>
            </span>

            <span className="absolute inset-0 flex flex-col items-center">
              <span className="text-balance bg-gradient-to-r from-[#FFEFBA] to-[#FFFFFF] bg-clip-text text-transparent">
                {displayedText1}
                {displayedText2 === "" && (
                  <span className="inline-block w-[3px] h-[0.9em] bg-accent ml-1 animate-pulse" />
                )}
              </span>
              <span className="text-balance bg-gradient-to-r from-[#E44D26] to-[#F16529] bg-clip-text text-transparent">
                {displayedText2}
                {displayedText2 !== "" && (
                  <span
                    className={`inline-block w-[3px] h-[0.9em] bg-accent ml-1 ${
                      isTypingDone ? "animate-blink" : "animate-pulse"
                    }`}
                  />
                )}
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl lg:text-2xl">
            An AI-powered workspace that transforms scattered requirements,
            interviews, and stakeholder conversations into a traceable,
            structured knowledge graph for Business Analysts.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground/70 sm:text-lg">
            Designed for BAs managing complex projects — BA Workspace unifies
            documents, conversations, and decisions into a living system that
            ensures traceability, consistency, and clarity.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto">
              <a href="https://github.com/lephus/ba-workspace" target="_blank" rel="noopener noreferrer">
                Get started
              </a>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-transparent"
              asChild
            >
              <a
                href="https://docs.businessanalysis.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                View documentation
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-20 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 blur-3xl opacity-50" />

          <div className="relative">
            <div className="relative rounded-xl border border-border/60 bg-[#141414] backdrop-blur-sm overflow-hidden shadow-2xl">
              {/* Header bar */}
              <div className="flex items-center justify-between border-b border-border/60 px-6 py-4 bg-[#1a1a1a]">
                <div className="flex items-center gap-2">
                  <BarChart2 className="h-4 w-4 text-accent" />
                  <span className="font-mono text-sm font-semibold">Who Are We Serving</span>
                  <span className="ml-2 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[10px] font-mono text-accent">ICP</span>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border/60">
                {/* Primary ICP */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="h-4 w-4 text-accent" />
                    <h3 className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">Primary ICP</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Business Analysts in software development, digital transformation, or system implementation.",
                      "BAs on multi-phase projects with multiple stakeholders.",
                      "BA teams managing requirements across distributed organizations.",
                      "Consultancies delivering BA services to multiple clients.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Secondary ICP */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="h-4 w-4 text-blue-400" />
                    <h3 className="font-mono text-xs font-semibold text-blue-400 uppercase tracking-wider">Secondary ICP</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Product Managers who perform BA functions.",
                      "Project Managers responsible for requirements management.",
                      "Enterprise Architects who need requirements traceability.",
                      "Business Analysis Centers of Excellence (CoE).",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company Characteristics */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="h-4 w-4 text-purple-400" />
                    <h3 className="font-mono text-xs font-semibold text-purple-400 uppercase tracking-wider">Company Profile</h3>
                  </div>
                  <ul className="space-y-3 mb-5">
                    {[
                      "50–1,000 employees.",
                      "Concurrent projects with complex stakeholder ecosystems.",
                      "High rework costs due to requirement defects.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <p className="font-mono text-[10px] text-muted-foreground/60 uppercase tracking-wider mb-2">Industries</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Technology", "Healthcare", "Finance", "Government", "Consulting"].map((tag) => (
                        <span key={tag} className="rounded-md border border-border/60 bg-secondary/50 px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
