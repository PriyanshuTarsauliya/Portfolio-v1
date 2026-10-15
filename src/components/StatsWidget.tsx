import { motion } from "motion/react";
import Tilt3D from "./ui/Tilt3D";

const StatsWidget = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row justify-center items-stretch gap-6 mt-12 mb-8 w-full max-w-4xl"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      {/* GitHub Live Stats Card with 3D Tilt */}
      <div className="flex-1 w-full">
        <Tilt3D maxTilt={10} scale={1.02} glare={true} className="h-full group">
          <div
            style={{ transformStyle: "preserve-3d" }}
            className="h-full rounded-2xl bg-background-primary/80 backdrop-blur-md p-5 border border-border-primary/40 group-hover:border-accent/40 shadow-sm group-hover:shadow-xl transition-all duration-300 flex flex-col justify-center items-center"
          >
            <a
              href="https://github.com/PriyanshuTarsauliya"
              target="_blank"
              rel="noopener noreferrer"
              style={{ transform: "translateZ(20px)" }}
              className="w-full flex justify-center items-center"
            >
              <img
                src="https://github-readme-stats.vercel.app/api?username=PriyanshuTarsauliya&show_icons=true&theme=transparent&hide_border=true&title_color=14eba3&text_color=888888&icon_color=14eba3"
                alt="GitHub Stats"
                className="w-full max-w-[380px] h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </a>
          </div>
        </Tilt3D>
      </div>

      {/* DSA Problem Solving 3D Holographic Card */}
      <div className="flex-1 w-full">
        <Tilt3D maxTilt={10} scale={1.02} glare={true} className="h-full group">
          <div
            style={{ transformStyle: "preserve-3d" }}
            className="h-full rounded-2xl bg-background-primary/80 backdrop-blur-md p-6 border border-border-primary/40 group-hover:border-accent/40 shadow-sm group-hover:shadow-xl transition-all duration-300 flex flex-col justify-center items-center text-center relative overflow-hidden"
          >
            <div
              style={{ transform: "translateZ(10px)" }}
              className="absolute -top-12 -right-12 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none"
            />

            <div style={{ transform: "translateZ(26px)" }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold mb-2">
                Problem Solving
              </div>
              <h3 className="text-accent font-extrabold text-4xl mb-1 tracking-tight">
                500+
              </h3>
              <p className="text-text-secondary text-sm font-medium">
                DSA Problems Solved
              </p>
            </div>

            <div
              style={{ transform: "translateZ(30px)" }}
              className="mt-5 flex flex-wrap justify-center gap-2"
            >
              <span className="text-[11px] px-2.5 py-1 bg-accent/15 text-accent rounded-lg border border-accent/30 font-medium shadow-sm">
                5★ HackerEarth
              </span>
              <span className="text-[11px] px-2.5 py-1 bg-yellow-500/15 text-yellow-500 rounded-lg border border-yellow-500/30 font-medium shadow-sm">
                LeetCode (200+)
              </span>
              <span className="text-[11px] px-2.5 py-1 bg-blue-500/15 text-blue-400 rounded-lg border border-blue-500/30 font-medium shadow-sm">
                CodeChef
              </span>
            </div>
          </div>
        </Tilt3D>
      </div>
    </motion.div>
  );
};

export default StatsWidget;
