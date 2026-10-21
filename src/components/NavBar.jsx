import { useState, useEffect } from "react";
import { Menu, X, FileText, ShieldCheck, Mail } from "lucide-react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full left-0 top-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3.5 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="size-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white font-black text-base shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            AT
          </div>
          <div className="flex flex-col text-left">
            <span className="text-white font-bold text-base md:text-lg tracking-tight group-hover:text-cyan-300 transition-colors">
              Ajay Tandale
            </span>
            <span className="text-[10px] font-mono text-cyan-400 -mt-1 flex items-center gap-1">
              <span className="size-1.5 rounded-full bg-cyan-400" />
              Cloud &bull; Linux &bull; DevOps
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map(({ link, name }) => (
            <a
              key={name}
              href={link}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
            >
              {name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/Ajay_Tandale_Resume.pdf"
            download="Ajay_Tandale_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900/60 text-xs font-medium text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all"
          >
            <FileText className="size-3.5 text-cyan-400" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs transition-all shadow-md shadow-cyan-500/20"
          >
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="size-9 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 flex items-center justify-center hover:text-white"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-5 py-6 space-y-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map(({ link, name }) => (
              <a
                key={name}
                href={link}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-cyan-400 transition-colors"
              >
                {name}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2">
            <a
              href="/Ajay_Tandale_Resume.pdf"
              download="Ajay_Tandale_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 rounded-lg border border-slate-700 bg-slate-900 text-center text-xs font-medium text-slate-300 flex items-center justify-center gap-2"
            >
              <FileText className="size-4 text-cyan-400" />
              Download Resume (PDF)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-lg bg-cyan-500 text-center text-xs font-semibold text-black flex items-center justify-center gap-2"
            >
              <Mail className="size-4" />
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
