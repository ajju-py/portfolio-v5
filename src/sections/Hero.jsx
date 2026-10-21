import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  ExternalLink,
  FileText,
  ShieldCheck,
  FolderGit2,
  Mail,
  ChevronRight,
  Terminal,
} from "lucide-react";

import AnimatedCounter from "../components/AnimatedCounter";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-anim-item",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.9, ease: "power2.out" }
    );
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen pt-28 pb-16">
      {/* Background radial gradient & pattern */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-700/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[75vh]">
          {/* LEFT COLUMN: Hero Identity & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Small introductory text */}
            <div className="hero-anim-item flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase">
                <Terminal className="size-3.5" />
                HELLO, I'M
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Engineering Roles
              </span>
            </div>

            {/* Main heading */}
            <div className="hero-anim-item">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                AJAY TANDALE
              </h1>
            </div>

            {/* Professional Headline */}
            <div className="hero-anim-item">
              <div className="inline-block px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-cyan-300 font-semibold text-base sm:text-lg md:text-xl">
                Cloud Engineer &bull; Linux &bull; Containers &bull; DevOps
              </div>
            </div>

            {/* Animated Rotating Subtitle with source repo dynamic style */}
            <div className="hero-anim-item flex items-center text-xl sm:text-2xl text-slate-300 font-medium">
              <span>Engineering with&nbsp;</span>
              <span className="inline-block h-8 overflow-hidden font-semibold text-cyan-400">
                <span className="wrapper flex flex-col">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 h-8 pb-1"
                    >
                      <img
                        src={word.imgPath}
                        alt={word.text}
                        className="size-5 object-contain"
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </div>

            {/* Supporting description */}
            <p className="hero-anim-item text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Building reliable infrastructure through Linux, cloud technologies,
              containerization, and automation. Computer Science Engineering student
              at Maharashtra Institute of Technology with dual Red Hat certifications.
            </p>

            {/* Primary Buttons */}
            <div className="hero-anim-item flex flex-wrap gap-3.5 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <FolderGit2 className="size-4" />
                Explore My Projects
                <ChevronRight className="size-4" />
              </a>

              <a
                href="#certifications"
                className="px-6 py-3.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-300 font-semibold text-sm sm:text-base flex items-center gap-2 hover:bg-cyan-950/40 hover:border-cyan-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <ShieldCheck className="size-4 text-cyan-400" />
                View My Certifications
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm sm:text-base flex items-center gap-2 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Mail className="size-4" />
                Contact Me
              </a>
            </div>

            {/* Secondary Links & Verified Resume */}
            <div className="hero-anim-item pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-500">
                Verified Profiles:
              </span>
              <a
                href="https://github.com/ajju-py"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <img src="/images/tech/git.png" alt="GitHub" className="size-4" />
                <span>GitHub</span>
                <ExternalLink className="size-3 text-slate-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/ajay-tandale-8030b8231/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <img src="/images/linkedin.png" alt="LinkedIn" className="size-4" />
                <span>LinkedIn</span>
                <ExternalLink className="size-3 text-slate-500" />
              </a>
              <a
                href="https://www.credly.com/users/ajay-tandale"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <img src="/images/badges/rhcsa.png" alt="Credly" className="size-4" />
                <span>Credly (7 Badges)</span>
                <ExternalLink className="size-3 text-slate-500" />
              </a>
              <a
                href="/Ajay_Tandale_Resume.pdf"
                download="Ajay_Tandale_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-900/50 hover:text-white transition-colors"
              >
                <FileText className="size-3.5" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive 3D Workstation Experience */}
          <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[480px] lg:h-[550px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/60 shadow-2xl backdrop-blur-sm">
            <div className="absolute top-3 left-4 z-20 flex items-center gap-2 pointer-events-none">
              <span className="size-2.5 rounded-full bg-red-500/80" />
              <span className="size-2.5 rounded-full bg-yellow-500/80" />
              <span className="size-2.5 rounded-full bg-green-500/80" />
              <span className="text-[11px] font-mono text-slate-400 ml-2">
                ajay@lab-rhel9: ~ 3D Room
              </span>
            </div>

            <div className="w-full h-full cursor-grab active:cursor-grabbing">
              <HeroExperience />
            </div>

            <div className="absolute bottom-3 right-4 z-20 pointer-events-none text-[11px] font-mono text-cyan-400/80 bg-black/60 px-2.5 py-1 rounded-md border border-cyan-500/20 backdrop-blur-sm">
              Interactive 3D &bull; Drag to rotate
            </div>
          </div>
        </div>
      </div>

      {/* Verified metrics counter underneath */}
      <div className="mt-12">
        <AnimatedCounter />
      </div>
    </section>
  );
};

export default Hero;
