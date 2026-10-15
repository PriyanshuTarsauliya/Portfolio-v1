import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { RxLayers, RxLightningBolt, RxCheckCircled } from "react-icons/rx";

const Typewriter = ({ text, delay }: { text: string; delay: number }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span>
      {currentText}
      <span className="animate-pulse font-bold text-accent">|</span>
    </span>
  );
};

const Header = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouch(
        window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
      );
    }
  }, []);

  // 3D Parallax Motion for the entire Hero cluster
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isTouch) return;
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={heroRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ perspective: "1000px" }}
      className="flex justify-center items-center mb-8 mt-6 sm:mt-12 w-full select-none"
    >
      <motion.div
        style={{
          rotateX: isTouch ? 0 : rotateX,
          rotateY: isTouch ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative flex flex-col items-center gap-6 text-center max-w-2xl px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Central 3D Avatar with Orbital Floating Badges */}
        <div
          style={{ transformStyle: "preserve-3d" }}
          className="relative flex justify-center items-center my-2"
        >
          {/* Animated Ambient Pulsing Aura */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-accent/40 via-emerald-400/20 to-blue-500/30 rounded-full blur-2xl opacity-70 animate-pulse pointer-events-none" />

          {/* Profile Photo Pedestal */}
          <motion.div
            style={{ transform: "translateZ(30px)" }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="relative cursor-pointer z-10"
          >
            <div className="p-1 rounded-full bg-gradient-to-tr from-accent via-emerald-300 to-blue-400 shadow-[0_0_35px_rgba(20,235,163,0.4)]">
              <img
                src="/profile.jpeg"
                alt="Priyanshu Tarsauliya"
                className="h-28 w-28 md:h-36 md:w-36 rounded-full object-cover ring-2 ring-background-primary"
              />
            </div>
            {/* Status indicator pill */}
            <span className="absolute bottom-1 right-2 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-accent ring-2 ring-background-primary"></span>
            </span>
          </motion.div>

          {/* Floating 3D Satellite Badge 1 (Left - Full Stack) */}
          <motion.div
            style={{
              transform: "translateZ(45px)",
              transformStyle: "preserve-3d",
            }}
            animate={{ y: [-4, 5, -4] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="hidden sm:flex absolute -left-28 md:-left-36 top-6 items-center gap-2 px-3 py-1.5 rounded-full bg-background-primary/90 border border-accent/40 shadow-lg shadow-accent/10 backdrop-blur-md"
          >
            <div className="p-1 rounded-full bg-accent/20 text-accent">
              <RxLightningBolt className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold text-text-primary">
              Full-Stack Eng
            </span>
          </motion.div>

          {/* Floating 3D Satellite Badge 2 (Right - AI & ML) */}
          <motion.div
            style={{
              transform: "translateZ(50px)",
              transformStyle: "preserve-3d",
            }}
            animate={{ y: [5, -4, 5] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="hidden sm:flex absolute -right-28 md:-right-36 top-10 items-center gap-2 px-3 py-1.5 rounded-full bg-background-primary/90 border border-blue-400/40 shadow-lg shadow-blue-500/10 backdrop-blur-md"
          >
            <div className="p-1 rounded-full bg-blue-500/20 text-blue-400">
              <RxLayers className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold text-text-primary">
              AI / ML Eng
            </span>
          </motion.div>
        </div>

        {/* Mobile-only badges row */}
        <div className="flex sm:hidden justify-center items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/30">
            <RxLightningBolt className="w-3 h-3" /> Full-Stack
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/30">
            <RxLayers className="w-3 h-3" /> AI & ML
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <RxCheckCircled className="w-3 h-3" /> Azure Certified
          </span>
        </div>

        {/* Name and Typewriter Heading in 3D Depth */}
        <div
          style={{ transform: "translateZ(25px)" }}
          className="flex flex-col items-center"
        >
          <h1 className="text-text-primary font-extrabold text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-text-primary via-text-primary to-accent mb-2 tracking-tight">
            Priyanshu Tarsauliya
          </h1>
          <div className="text-text-secondary font-medium text-base md:text-xl tracking-wide h-8 flex items-center justify-center">
            <Typewriter text="Full-Stack Software Engineer • AI & ML" delay={65} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
