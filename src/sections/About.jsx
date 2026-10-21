import { useState, useRef } from "react";
import {
  GraduationCap,
  ShieldCheck,
  Terminal,
  Server,
  Layers,
  FileText,
  Sparkles,
  MapPin,
  Mail,
  Play,
  Pause,
} from "lucide-react";
import TitleHeader from "../components/TitleHeader";
import { PORTFOLIO_DATA } from "../data/portfolioData";

const About = () => {
  const [activeMediaTab, setActiveMediaTab] = useState("professional");
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12">
        <TitleHeader
          title="About Me & Engineering Focus"
          sub="Bridging System Administration, Containers & Automation"
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: Multi-Persona Interactive Media Showcase */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {/* Media Selector Tabs */}
            <div className="flex rounded-xl bg-slate-900/80 p-1 border border-slate-800">
              <button
                type="button"
                onClick={() => setActiveMediaTab("professional")}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                  activeMediaTab === "professional"
                    ? "bg-cyan-500 text-black font-semibold shadow-md shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Red Hat Portrait
              </button>
              <button
                type="button"
                onClick={() => setActiveMediaTab("cyborg")}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1 ${
                  activeMediaTab === "cyborg"
                    ? "bg-cyan-500 text-black font-semibold shadow-md shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Sparkles className="size-3" />
                Cyborg Video
              </button>
            </div>

            {/* Media Display Container */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/80 aspect-[4/5] shadow-2xl flex items-center justify-center group">
              {/* Professional Red Hat Photo */}
              {activeMediaTab === "professional" && (
                <div className="w-full h-full relative">
                  <img
                    src="/images/ajay-professional.png"
                    alt="Ajay Tandale - Red Hat Certified"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-medium">
                      <ShieldCheck className="size-3.5" />
                      Red Hat Certified (RHCSA & EX188)
                    </span>
                    <p className="text-white text-sm font-semibold mt-1">
                      Ajay Tandale &bull; Enterprise Linux & Containers
                    </p>
                  </div>
                </div>
              )}

              {/* Cyborg Transformation Video */}
              {activeMediaTab === "cyborg" && (
                <div className="w-full h-full relative">
                  <video
                    ref={videoRef}
                    src="/videos/ajay-cyborg-transformation.mp4"
                    poster="/images/ajay-cyborg-poster.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Video Play/Pause Control */}
                  <button
                    type="button"
                    onClick={toggleVideoPlay}
                    aria-label="Toggle Video Playback"
                    className="absolute top-4 right-4 z-20 size-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black/90 transition-all"
                  >
                    {isPlaying ? <Pause className="size-4" /> : <Play className="size-4" />}
                  </button>

                  <div className="absolute bottom-4 left-4 right-4 text-left pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono">
                      <Sparkles className="size-3.5" />
                      Creative Visual &bull; Digital Evolution
                    </span>
                    <p className="text-slate-300 text-xs mt-1">
                      Secondary futuristic visual concept (respects reduced motion)
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Badges Strip */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/60 flex items-center gap-2">
                <MapPin className="size-3.5 text-cyan-400" />
                <span className="text-slate-300">Maharashtra, India</span>
              </div>
              <div className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/60 flex items-center gap-2">
                <Mail className="size-3.5 text-cyan-400" />
                <span className="text-slate-300 truncate">work.ajaytandale@gmail.com</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Detailed Bio, Education & Technical Principles */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
              <p className="text-white font-medium text-lg sm:text-xl">
                {PORTFOLIO_DATA.profile.headline}
              </p>
              <p>
                {PORTFOLIO_DATA.profile.shortIntro}
              </p>
              <p>
                {PORTFOLIO_DATA.profile.about}
              </p>
            </div>

            {/* Structured Education Cards */}
            <div className="pt-4 border-t border-slate-800 space-y-4">
              <h3 className="text-white font-semibold text-xl flex items-center gap-2">
                <GraduationCap className="size-5 text-cyan-400" />
                Academic Background
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* B.Tech */}
                <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                    <span>Undergraduate</span>
                    <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/20">
                      Pursuing
                    </span>
                  </div>
                  <h4 className="font-semibold text-white text-base">
                    {PORTFOLIO_DATA.profile.education.degree}
                  </h4>
                  <p className="text-sm text-cyan-300">
                    {PORTFOLIO_DATA.profile.education.branch}
                  </p>
                  <p className="text-xs text-slate-400">
                    {PORTFOLIO_DATA.profile.education.institution}
                  </p>
                </div>

                {/* Diploma */}
                <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
                    <span>Polytechnic</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/20">
                      Completed
                    </span>
                  </div>
                  <h4 className="font-semibold text-white text-base">
                    {PORTFOLIO_DATA.profile.diploma.degree}
                  </h4>
                  <p className="text-sm text-emerald-300">
                    {PORTFOLIO_DATA.profile.diploma.honors}
                  </p>
                  <p className="text-xs text-slate-400">
                    {PORTFOLIO_DATA.profile.diploma.institution}
                  </p>
                </div>
              </div>
            </div>

            {/* Core Technical Highlights */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <Server className="size-4 text-cyan-400" />
                Engineering Principles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                <div className="p-3 rounded-lg border border-slate-800/80 bg-slate-900/30">
                  <div className="font-semibold text-cyan-300 flex items-center gap-1.5 mb-1">
                    <Terminal className="size-3.5" />
                    Reproducibility
                  </div>
                  <p className="text-slate-400 text-xs">
                    Scripted environments and declarative configurations that can be rebuilt in minutes.
                  </p>
                </div>

                <div className="p-3 rounded-lg border border-slate-800/80 bg-slate-900/30">
                  <div className="font-semibold text-cyan-300 flex items-center gap-1.5 mb-1">
                    <Layers className="size-3.5" />
                    Security by Default
                  </div>
                  <p className="text-slate-400 text-xs">
                    Enforcing SELinux, rootless Podman user namespaces, and strict firewalld boundaries.
                  </p>
                </div>

                <div className="p-3 rounded-lg border border-slate-800/80 bg-slate-900/30">
                  <div className="font-semibold text-cyan-300 flex items-center gap-1.5 mb-1">
                    <ShieldCheck className="size-3.5" />
                    Disciplined Labs
                  </div>
                  <p className="text-slate-400 text-xs">
                    Hands-on verification of cloud and container architectures before any deployment claims.
                  </p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="/Ajay_Tandale_Resume.pdf"
                download="Ajay_Tandale_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-lg bg-cyan-500 text-black font-semibold text-sm flex items-center gap-2 hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
              >
                <FileText className="size-4" />
                Download Verified Resume (PDF)
              </a>
              <a
                href="#certifications"
                className="px-5 py-2.5 rounded-lg border border-slate-700 bg-slate-800/60 text-white font-medium text-sm flex items-center gap-2 hover:bg-slate-700 transition-colors"
              >
                <ShieldCheck className="size-4 text-cyan-400" />
                View 7 Credly Badges
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
