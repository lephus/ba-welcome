"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Database,
  Network,
  Layers,
} from "lucide-react";

export function HeroSection() {
  const [displayedText1, setDisplayedText1] = useState("");
  const [displayedText2, setDisplayedText2] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const text1 = "AI Knowledge Operating System";
  const text2 = "for Business Analysis";

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
            Open-source AI-native infrastructure for business analysis
          </div>

          <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl relative">
            <span className="invisible" aria-hidden="true">
              <span className="text-balance">AI Knowledge Operating System</span>
              <br />
              <span className="text-balance">for Business Analysis</span>
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
                    className={`inline-block w-[3px] h-[0.9em] bg-accent ml-1 ${isTypingDone ? "animate-blink" : "animate-pulse"
                      }`}
                  />
                )}
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl lg:text-2xl">
            BusinessAnalysis.io is an AI Knowledge Operating System that transforms scattered knowledge into a structured, actionable foundation for business analysis.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground/70 sm:text-lg">
            BusinessAnalysis.io builds the infrastructure for AI-assisted analytical work.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="mailto:hoang@businessanalysis.io" target="_blank" rel="noopener noreferrer">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
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
                  <Layers className="h-4 w-4 text-accent" />
                  <span className="font-mono text-sm font-semibold">Traditional BA Stack vs. BAWS</span>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border/60">
                {/* Traditional Stack */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <Database className="h-5 w-5 text-muted-foreground/60" />
                    <h3 className="font-mono text-sm font-semibold text-muted-foreground uppercase tracking-wider">Traditional RAG-based Stack</h3>
                  </div>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4 text-sm text-muted-foreground">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500/60 shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground/80 block mb-1">Retrieval without context</span>
                        Searches paragraphs without understanding the underlying business domain or intent.
                      </div>
                    </li>
                    <li className="flex items-start gap-4 text-sm text-muted-foreground">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500/60 shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground/80 block mb-1">Static documents</span>
                        Information is locked in PDFs, Word docs, and isolated knowledge bases.
                      </div>
                    </li>
                    <li className="flex items-start gap-4 text-sm text-muted-foreground">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500/60 shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground/80 block mb-1">No institutional memory</span>
                        When a project ends, the analytical reasoning and context are permanently lost.
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Knowledge OS */}
                <div className="p-8 bg-accent/5 relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent/10 blur-3xl rounded-full pointer-events-none" />
                  <div className="flex items-center gap-2 mb-6 relative z-10">
                    <Network className="h-5 w-5 text-accent" />
                    <h3 className="font-mono text-sm font-semibold text-accent uppercase tracking-wider">Structured Knowledge System</h3>
                  </div>
                  <ul className="space-y-5 relative z-10">
                    <li className="flex items-start gap-4 text-sm text-muted-foreground">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground/90 block mb-1">Self-hosted & Sovereign</span>
                        Your knowledge base runs locally. Full ownership and privacy over your organization's data.
                      </div>
                    </li>
                    <li className="flex items-start gap-4 text-sm text-muted-foreground">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground/90 block mb-1">Open & Extensible workflows</span>
                        Open-source AI Analyst Agents autonomously navigate and build upon shared capabilities.
                      </div>
                    </li>
                    <li className="flex items-start gap-4 text-sm text-muted-foreground">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground/90 block mb-1">Compounding intelligence</span>
                        Every project enriches your team's analytical reasoning and history.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
