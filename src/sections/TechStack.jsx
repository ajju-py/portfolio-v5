import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Terminal,
  Box,
  Cloud,
  Cpu,
  Shield,
  CheckCircle2,
  Code2,
} from "lucide-react";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";
import { PORTFOLIO_DATA } from "../data/portfolioData";

const categoryIconMap = {
  Terminal: Terminal,
  Box: Box,
  Cloud: Cloud,
  Cpu: Cpu,
  Shield: Shield,
};

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  useGSAP(() => {
    gsap.fromTo(
      ".tech-card-3d",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 75%",
        },
      }
    );
  }, []);

  const categories = PORTFOLIO_DATA.skillsCategories;

  const displayCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12">
        <TitleHeader
          title="Technical Competencies & Tooling"
          sub="Hands-On Linux, Containers, Cloud & Automation"
        />

        {/* 3D Interactive Tech Models from Source Repository */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase font-mono tracking-wider text-cyan-400">
              Interactive 3D Technology Models (Orbit & Inspect)
            </span>
            <span className="text-xs font-mono text-slate-500 hidden sm:inline">
              Drag models to rotate
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {techStackIcons.map((tech) => (
              <div
                key={tech.name}
                className="tech-card-3d group relative rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all duration-300"
              >
                <div className="w-full h-44 cursor-grab active:cursor-grabbing">
                  <TechIconCardExperience model={tech} />
                </div>
                <div className="p-3 text-center border-t border-slate-800/80 bg-slate-950/60">
                  <p className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                    {tech.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mt-14 flex flex-wrap gap-2 justify-center">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeCategory === "all"
                ? "bg-cyan-500 text-black font-semibold shadow-md shadow-cyan-500/20"
                : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            All Competencies (5)
          </button>
          {categories.map((cat) => {
            const IconComponent = categoryIconMap[cat.icon] || Code2;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-cyan-500 text-black font-semibold shadow-md shadow-cyan-500/20"
                    : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                <IconComponent className="size-3.5" />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Structured Skills Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCategories.map((cat) => {
            const IconComponent = categoryIconMap[cat.icon] || Code2;
            return (
              <div
                key={cat.id}
                className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 group shadow-lg"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center flex-none group-hover:scale-110 transition-transform">
                      <IconComponent className="size-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base sm:text-lg">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-slate-400">{cat.summary}</p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="mt-5 space-y-2">
                    {cat.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-slate-900/50 border border-slate-800/60 text-xs"
                      >
                        <span className="text-slate-200 font-medium flex items-center gap-1.5">
                          <CheckCircle2 className="size-3 text-cyan-400" />
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                            skill.level.includes("Certified")
                              ? "bg-red-950/60 text-red-300 border border-red-500/30"
                              : skill.level.includes("Lab")
                              ? "bg-cyan-950/60 text-cyan-300 border border-cyan-500/30"
                              : "bg-slate-800 text-slate-400"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Terminal Preview Snippet */}
                {cat.terminalPreview && (
                  <div className="mt-5 pt-4 border-t border-slate-800/80">
                    <div className="rounded-lg bg-black/80 border border-slate-800 p-2.5 font-mono text-[11px] text-cyan-400/90 overflow-x-auto">
                      <div className="flex items-center gap-1.5 text-slate-500 mb-1 text-[10px]">
                        <Terminal className="size-3" />
                        <span>terminal preview</span>
                      </div>
                      <pre className="whitespace-pre">{cat.terminalPreview}</pre>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
