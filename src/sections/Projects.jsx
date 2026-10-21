import { useState } from "react";
import {
  FolderGit2,
  ExternalLink,
  ShieldCheck,
  Server,
  Layers,
  Terminal,
  CheckCircle2,
} from "lucide-react";
import TitleHeader from "../components/TitleHeader";
import { PORTFOLIO_DATA } from "../data/portfolioData";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const projects = PORTFOLIO_DATA.projects;

  const categories = [
    { id: "all", label: "All Practical Labs (5)" },
    { id: "Infrastructure", label: "Linux & Hardening" },
    { id: "Containers", label: "Containers & Podman" },
    { id: "Cloud", label: "Cloud & AWS" },
    { id: "Software", label: "Software & Web" },
  ];

  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === "all") return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12">
        <TitleHeader
          title="Practical Engineering Projects & Labs"
          sub="Reproducible Infrastructure, Containerized Services & Automation"
        />

        {/* Filter categories */}
        <div className="mt-12 flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-cyan-500 text-black font-semibold shadow-md shadow-cyan-500/20"
                  : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 flex flex-col justify-between hover:border-cyan-500/40 hover:bg-slate-900/50 transition-all duration-300 group shadow-xl"
            >
              <div>
                {/* Category Badge & Code Link */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
                    <Terminal className="size-3" />
                    {project.badge}
                  </span>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="View on GitHub"
                      className="size-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-cyan-950/50 text-slate-400 hover:text-cyan-300 flex items-center justify-center transition-all"
                    >
                      <FolderGit2 className="size-4" />
                    </a>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div className="mt-4 space-y-1">
                  <h3 className="font-bold text-white text-lg sm:text-xl group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-cyan-400/80 font-mono">
                    {project.subtitle}
                  </p>
                </div>

                {/* Summary */}
                <p className="mt-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {project.summary}
                </p>

                {/* Highlights */}
                <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                    Key Engineering Highlights:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {project.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="size-3.5 text-cyan-400 flex-none mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 hover:bg-cyan-500 hover:text-black text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    <FolderGit2 className="size-3.5" />
                    <span>View Repository</span>
                    <ExternalLink className="size-3" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveProjectModal(project)}
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 text-xs font-semibold flex items-center justify-center gap-2"
                  >
                    <span>Lab Documentation</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => setActiveProjectModal(project)}
                  className="py-2 px-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-slate-700 text-xs font-medium transition-all"
                >
                  Deliverables
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Deliverables Modal */}
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="max-w-lg w-full rounded-2xl border border-slate-700 bg-slate-950 p-6 space-y-4 shadow-2xl">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-mono text-cyan-400">
                    {activeProjectModal.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {activeProjectModal.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProjectModal(null)}
                  className="size-8 rounded-lg bg-slate-900 text-slate-400 hover:text-white flex items-center justify-center"
                >
                  &times;
                </button>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-200">
                  Key Technical Deliverables:
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {activeProjectModal.deliverables?.map((del, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="size-4 text-emerald-400 flex-none mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
                {activeProjectModal.githubUrl && (
                  <a
                    href={activeProjectModal.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-lg bg-cyan-500 text-black text-xs font-semibold flex items-center gap-1.5"
                  >
                    <span>Inspect GitHub Code</span>
                    <ExternalLink className="size-3" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setActiveProjectModal(null)}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
