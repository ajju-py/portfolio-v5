import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  GraduationCap,
  ShieldCheck,
  Terminal,
  Award,
  Calendar,
  CheckCircle2,
} from "lucide-react";

import TitleHeader from "../components/TitleHeader";
import { PORTFOLIO_DATA } from "../data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const milestones = PORTFOLIO_DATA.learningMilestones;

  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -30,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "80% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });
  }, []);

  return (
    <section id="journey" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12">
        <TitleHeader
          title="Learning Journey & Key Milestones"
          sub="Disciplined Progression Across Systems, Containers & Academics"
        />

        <div className="mt-20 relative">
          <div className="space-y-16">
            {milestones.map((item, index) => (
              <div
                key={index}
                className="timeline-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Left Card: Snapshot & Tags */}
                <div className="lg:col-span-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm space-y-4 hover:border-cyan-500/40 transition-colors shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-mono text-cyan-400">
                      {item.year}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
                      {item.organization}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1 font-mono">
                      <Calendar className="size-3 text-slate-400" />
                      {item.date}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-300 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Detailed narrative */}
                <div className="lg:col-span-8 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-6 space-y-4 hover:border-slate-700 transition-colors shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="size-9 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center flex-none">
                      {index === 0 ? (
                        <ShieldCheck className="size-5 text-cyan-400" />
                      ) : index === 1 ? (
                        <Terminal className="size-5 text-cyan-400" />
                      ) : index === 2 ? (
                        <GraduationCap className="size-5 text-cyan-400" />
                      ) : (
                        <Award className="size-5 text-amber-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {item.role}
                      </h3>
                      <p className="text-xs text-cyan-400 font-mono">
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <CheckCircle2 className="size-3.5 text-emerald-400" />
                    <span>Verified Academic & Lab Achievement</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
