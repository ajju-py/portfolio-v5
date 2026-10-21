import { Mail, FolderGit2, Award, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-24 border-t border-slate-800 bg-slate-950/90 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12 flex flex-col space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity */}
          <div className="flex flex-col text-center md:text-left">
            <span className="text-white font-bold text-lg">
              Ajay Raju Tandale
            </span>
            <span className="text-xs font-mono text-cyan-400">
              Cloud Engineer &bull; Linux &bull; Containers &bull; DevOps
            </span>
            <span className="text-xs text-slate-400 mt-1">
              B.Tech in Computer Science &bull; Maharashtra Institute of Technology
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:work.ajaytandale@gmail.com"
              aria-label="Email Ajay Tandale"
              className="size-10 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/50 hover:text-cyan-400 flex items-center justify-center transition-all"
            >
              <Mail className="size-4" />
            </a>
            <a
              href="https://github.com/ajju-py"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="size-10 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-slate-600 hover:text-white flex items-center justify-center transition-all"
            >
              <FolderGit2 className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ajay-tandale-8030b8231/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="size-10 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-blue-500/50 hover:text-blue-400 flex items-center justify-center transition-all"
            >
              <img src="/images/linkedin.png" alt="LinkedIn" className="size-4" />
            </a>
            <a
              href="https://www.credly.com/users/ajay-tandale"
              target="_blank"
              rel="noreferrer"
              aria-label="Credly Profile"
              className="size-10 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-amber-500/50 hover:text-amber-400 flex items-center justify-center transition-all"
            >
              <Award className="size-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="size-10 rounded-xl border border-slate-800 bg-cyan-950/40 text-cyan-400 hover:bg-cyan-500 hover:text-black flex items-center justify-center transition-all ml-2"
            >
              <ArrowUp className="size-4" />
            </button>
          </div>
        </div>

        {/* Attribution & Legal Notice */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Ajay Raju Tandale. All rights reserved.
          </p>
          <p className="text-center sm:text-right text-[11px] text-slate-400">
            Source 3D architecture adapted under MIT License from Adrian Hajdin / JS Mastery.
            <br />
            Content, branding, certifications, and engineering projects represent Ajay Tandale.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
