import { Trophy, Award, Users, CheckCircle2, ShieldCheck, ExternalLink } from "lucide-react";
import TitleHeader from "../components/TitleHeader";
import { PORTFOLIO_DATA } from "../data/portfolioData";

const iconMap = {
  ShieldCheck: ShieldCheck,
  Trophy: Trophy,
  Users: Users,
  CheckCircle: CheckCircle2,
};

const Testimonials = () => {
  const achievements = PORTFOLIO_DATA.achievements;

  return (
    <section id="achievements" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12">
        <TitleHeader
          title="Endorsements & Academic Distinctions"
          sub="Verified Recognitions & Technical Community Contributions"
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <div
                key={index}
                className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-6 flex flex-col justify-between hover:border-cyan-500/40 hover:bg-slate-900/50 transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="size-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center flex-none group-hover:scale-110 transition-transform">
                      <Icon className="size-6 text-cyan-400" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                      Verified
                    </span>
                  </div>

                  <div className="mt-5 space-y-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-cyan-300">
                    <CheckCircle2 className="size-3.5 text-cyan-400" />
                    Official Record
                  </span>
                  <span>Ajay Raju Tandale</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
