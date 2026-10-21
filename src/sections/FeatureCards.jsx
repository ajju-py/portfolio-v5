import { abilities } from "../constants";

const FeatureCards = () => (
  <div className="w-full max-w-7xl mx-auto px-5 md:px-10 lg:px-12 my-16">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
          className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-8 flex flex-col gap-4 hover:border-cyan-500/40 hover:bg-slate-900/50 transition-all duration-300 shadow-xl"
        >
          <div className="size-14 flex items-center justify-center rounded-xl bg-cyan-950/50 border border-cyan-500/20 p-2.5 group-hover:scale-110 transition-transform">
            <img src={imgPath} alt={title} className="max-h-full max-w-full object-contain" />
          </div>
          <h3 className="text-white text-xl font-bold mt-2 group-hover:text-cyan-300 transition-colors">
            {title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;