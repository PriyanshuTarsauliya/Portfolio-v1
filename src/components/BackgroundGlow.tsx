import { motion } from "motion/react";

const BackgroundGlow = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          x: ["-10%", "30%", "-10%"],
          y: ["-20%", "20%", "-20%"],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[120px] md:blur-[180px] opacity-60 dark:opacity-40"
      />
      <motion.div
        animate={{
          x: ["20%", "-20%", "20%"],
          y: ["20%", "-10%", "20%"],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[10%] -right-[10%] w-[60vw] h-[60vw] bg-blue-500/10 rounded-full blur-[150px] md:blur-[200px] opacity-60 dark:opacity-40"
      />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
    </div>
  );
};

export default BackgroundGlow;
