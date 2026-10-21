import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      if (!counter) return;
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];

      // Set initial value to 0
      gsap.set(numberElement, { innerText: "0" });

      // Create the counting animation
      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: "#counter",
          start: "top 85%",
        },
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    });
  }, []);

  return (
    <div id="counter" ref={counterRef} className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-900/90 hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all" />
            <div className="counter-number text-cyan-400 font-extrabold text-3xl sm:text-4xl md:text-5xl font-mono mb-2">
              0{item.suffix}
            </div>
            <div className="text-slate-300 text-xs sm:text-sm font-medium tracking-wide">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
