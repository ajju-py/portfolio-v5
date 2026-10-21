import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex items-center gap-3 px-6 py-3 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm shadow-md">
      <img
        src={icon.imgPath}
        alt={icon.name}
        className="size-7 object-contain"
      />
      <span className="text-sm font-mono text-slate-300 font-semibold">
        {icon.name}
      </span>
    </div>
  );
};

const LogoShowcase = () => (
  <div className="py-12 relative overflow-hidden">
    <div className="text-center mb-6">
      <span className="text-xs uppercase font-mono tracking-widest text-slate-400">
        Enterprise Linux &bull; Cloud &bull; Container &bull; DevOps Ecosystem
      </span>
    </div>

    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-20">
      <div className="marquee-box gap-6">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={`first-${index}`} icon={icon} />
        ))}
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={`second-${index}`} icon={icon} />
        ))}
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={`third-${index}`} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
