import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";

const BackgroundGlow = () => {
  const [isTouch, setIsTouch] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 80 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const orb1X = useTransform(smoothX, [-0.5, 0.5], [-40, 40]);
  const orb1Y = useTransform(smoothY, [-0.5, 0.5], [-40, 40]);
  const orb2X = useTransform(smoothX, [-0.5, 0.5], [50, -50]);
  const orb2Y = useTransform(smoothY, [-0.5, 0.5], [50, -50]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouch(
        window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
      );

      const handlePointerMove = (e: PointerEvent) => {
        const xPct = e.clientX / window.innerWidth - 0.5;
        const yPct = e.clientY / window.innerHeight - 0.5;
        mouseX.set(xPct);
        mouseY.set(yPct);
      };

      if (!isTouch) {
        window.addEventListener("pointermove", handlePointerMove);
        return () => window.removeEventListener("pointermove", handlePointerMove);
      }
    }
  }, [isTouch]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* 3D Atmospheric Emerald Glow Orb */}
      <motion.div
        style={{
          x: isTouch ? 0 : orb1X,
          y: isTouch ? 0 : orb1Y,
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[12%] -left-[10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] bg-accent/20 rounded-full blur-[110px] md:blur-[160px]"
      />

      {/* 3D Atmospheric Indigo/Blue Glow Orb */}
      <motion.div
        style={{
          x: isTouch ? 0 : orb2X,
          y: isTouch ? 0 : orb2Y,
        }}
        animate={{
          scale: [1.1, 0.95, 1.1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] -right-[15%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-blue-500/15 rounded-full blur-[130px] md:blur-[180px]"
      />

      {/* Ambient Cyber Grid Overlay with Radial Fade */}
      <div
        className="absolute inset-0 opacity-[0.12] dark:opacity-[0.07]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(20, 235, 163, 0.8) 1px, transparent 0)
          `,
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 65% 65% at 50% 50%, #000 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 65% at 50% 50%, #000 60%, transparent 100%)",
        }}
      />

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay" />
    </div>
  );
};

export default BackgroundGlow;
