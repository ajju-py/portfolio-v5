import { useState } from "react";
import {
  ShieldCheck,
  ExternalLink,
  Award,
  Calendar,
  CheckCircle2,
  Filter,
} from "lucide-react";
import TitleHeader from "../components/TitleHeader";
import { certifications } from "../data/certifications";

const Certifications = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Credentials (7)" },
    { id: "highlight", label: "Professional Certs (RHCSA & EX188)" },
    { id: "System Administration", label: "System Administration" },
    { id: "Containers & Cloud-Native", label: "Containers & Cloud" },
  ];

  const filteredCerts = certifications.filter((cert) => {
    if (filter === "all") return true;
    if (filter === "highlight") return cert.highlight;
    return cert.category === filter;
  });

  return (
    <section id="certifications" className="section-padding relative">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12 relative z-10">
        <TitleHeader
          title="Verified Credentials & Certifications"
          sub="Official Red Hat & Industry Badges on Credly"
        />

        {/* Filter Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="size-4 text-cyan-400 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all ${
                  filter === cat.id
                    ? "bg-cyan-500 text-black font-semibold shadow-md shadow-cyan-500/20"
                    : "bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <a
            href="https://www.credly.com/users/ajay-tandale"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-300 hover:bg-amber-950/30 hover:border-amber-400/50 text-xs md:text-sm font-semibold transition-all"
          >
            <Award className="size-4 text-amber-400" />
            VIEW ALL ON CREDLY
            <ExternalLink className="size-3.5" />
          </a>
        </div>

        {/* Certifications Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className={`group relative rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                cert.highlight
                  ? "bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-900 border-cyan-500/40 shadow-xl shadow-cyan-500/10"
                  : "bg-slate-950/70 border-slate-800/80 hover:border-slate-700"
              }`}
            >
              <div>
                {/* Header: Badge Art & Verified Pill */}
                <div className="flex items-start justify-between gap-4">
                  <div className="size-20 flex-none rounded-xl bg-white/5 border border-white/10 p-2 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                    <img
                      src={cert.badgeImage}
                      alt={cert.badgeTitle}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/images/badges/rhcsa.png";
                      }}
                    />
                  </div>

                  <div className="flex flex-col items-end gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[11px] font-mono">
                      <CheckCircle2 className="size-3" />
                      Verified
                    </span>
                    {cert.examCode && (
                      <span className="text-[11px] font-mono text-cyan-300/80 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/20">
                        {cert.examCode}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & Issuer */}
                <div className="mt-5 space-y-1">
                  <h3 className="font-bold text-white text-lg leading-snug group-hover:text-cyan-300 transition-colors">
                    {cert.badgeTitle}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                    <span className="text-red-400 font-semibold">{cert.issuer}</span>
                    <span>&bull;</span>
                    <span>{cert.category}</span>
                  </p>
                </div>

                {/* Issue and Expiration Dates */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-300 font-mono">
                  <div className="flex items-center gap-2">
                    <Calendar className="size-3.5 text-slate-400" />
                    <span>Issued: {cert.issueDate}</span>
                  </div>
                  {cert.expirationDate && (
                    <div className="flex items-center gap-2 text-cyan-300">
                      <ShieldCheck className="size-3.5 text-cyan-400" />
                      <span>Valid Thru: {cert.expirationDate}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="mt-3 text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {cert.description}
                </p>

                {/* Skills Chips */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cert.skills.slice(0, 4).map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded bg-slate-900/60 text-[10px] text-slate-500 font-mono">
                      +{cert.skills.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Verify Credential Button */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-cyan-500 hover:text-black border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Global Bottom Credly Banner */}
        <div className="mt-12 p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="size-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-none">
              <Award className="size-6 text-amber-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-base sm:text-lg">
                Official Credly Earner Profile
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                All 7 Red Hat and industry certifications are cryptographically verified and publicly auditable.
              </p>
            </div>
          </div>

          <a
            href="https://www.credly.com/users/ajay-tandale"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/20 text-nowrap"
          >
            VIEW ALL CERTIFICATIONS
            <ExternalLink className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
