import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Send,
  FolderGit2,
  Award,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
        setStatusMessage({
          type: "success",
          text: "Message sent successfully! Thank you for reaching out.",
        });
        setForm({ name: "", email: "", message: "" });
      } catch (error) {
        console.warn("EmailJS failed, falling back to mail client:", error);
        triggerMailtoFallback();
      } finally {
        setLoading(false);
      }
    } else {
      // Direct mailto fallback if EmailJS credentials are not configured in environment
      triggerMailtoFallback();
      setLoading(false);
    }
  };

  const triggerMailtoFallback = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name || "Colleague"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}\n`
    );
    window.location.href = `mailto:work.ajaytandale@gmail.com?subject=${subject}&body=${body}`;
    setStatusMessage({
      type: "info",
      text: "Opening your default email client to send message to work.ajaytandale@gmail.com",
    });
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12">
        <TitleHeader
          title="Get In Touch — Let’s Connect"
          sub="Engineering Inquiries, Collaborations & Professional Opportunities"
        />

        {/* 4 Direct Contact Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href="mailto:work.ajaytandale@gmail.com"
            className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all group flex items-start gap-3.5 shadow-md"
          >
            <div className="size-10 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center flex-none group-hover:scale-110 transition-transform">
              <Mail className="size-5 text-cyan-400" />
            </div>
            <div className="overflow-hidden">
              <span className="text-xs font-mono text-cyan-400 block">Direct Email</span>
              <span className="text-sm font-semibold text-white truncate block">
                work.ajaytandale@gmail.com
              </span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/ajay-tandale-8030b8231/"
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-blue-500/50 hover:bg-slate-900/90 transition-all group flex items-start gap-3.5 shadow-md"
          >
            <div className="size-10 rounded-lg bg-blue-950/60 border border-blue-500/30 flex items-center justify-center flex-none group-hover:scale-110 transition-transform">
              <img src="/images/linkedin.png" alt="LinkedIn" className="size-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-blue-400 block">LinkedIn</span>
              <span className="text-sm font-semibold text-white block">
                Ajay Tandale
              </span>
            </div>
          </a>

          <a
            href="https://github.com/ajju-py"
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-slate-600 hover:bg-slate-900/90 transition-all group flex items-start gap-3.5 shadow-md"
          >
            <div className="size-10 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center flex-none group-hover:scale-110 transition-transform">
              <FolderGit2 className="size-5 text-slate-300" />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-400 block">GitHub</span>
              <span className="text-sm font-semibold text-white block">
                @ajju-py
              </span>
            </div>
          </a>

          <a
            href="https://www.credly.com/users/ajay-tandale"
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-amber-500/50 hover:bg-slate-900/90 transition-all group flex items-start gap-3.5 shadow-md"
          >
            <div className="size-10 rounded-lg bg-amber-950/60 border border-amber-500/30 flex items-center justify-center flex-none group-hover:scale-110 transition-transform">
              <Award className="size-5 text-amber-400" />
            </div>
            <div>
              <span className="text-xs font-mono text-amber-400 block">Credly</span>
              <span className="text-sm font-semibold text-white block">
                7 Verified Badges
              </span>
            </div>
          </a>
        </div>

        {/* Contact Form & 3D Computer View */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT: Contact Form */}
          <div className="lg:col-span-6 rounded-2xl border border-slate-800 bg-slate-950/80 p-8 shadow-xl">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="size-5 text-cyan-400" />
              <h3 className="text-xl font-bold text-white">Send Me a Message</h3>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Linus Torvalds"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="e.g. colleague@enterprise.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                  YOUR MESSAGE / LAB INQUIRY
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Discussing cloud engineering opportunities, Linux configurations, or container architectures..."
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              {statusMessage && (
                <div
                  className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                    statusMessage.type === "success"
                      ? "bg-emerald-950/60 border border-emerald-500/30 text-emerald-300"
                      : "bg-cyan-950/60 border border-cyan-500/30 text-cyan-300"
                  }`}
                >
                  <CheckCircle2 className="size-4 flex-none" />
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
              >
                <Send className="size-4" />
                <span>{loading ? "Processing..." : "Send Message via Email"}</span>
              </button>
            </form>
          </div>

          {/* RIGHT: 3D Workstation Computer Model */}
          <div className="lg:col-span-6 relative w-full h-[420px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/40 shadow-xl flex items-center justify-center">
            <div className="absolute top-3 left-4 z-20 flex items-center gap-2 pointer-events-none">
              <span className="size-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono text-slate-300">
                Interactive 3D Hardware Model
              </span>
            </div>

            <div className="w-full h-full cursor-grab active:cursor-grabbing">
              <ContactExperience />
            </div>

            <div className="absolute bottom-3 right-4 z-20 pointer-events-none text-[11px] font-mono text-cyan-400/80 bg-black/60 px-2.5 py-1 rounded-md border border-cyan-500/20 backdrop-blur-sm">
              Drag to view 3D desk
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
