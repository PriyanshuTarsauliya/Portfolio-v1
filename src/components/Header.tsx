import { motion } from "motion/react";
import { useState, useEffect } from "react";

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
  const leftContentVariants = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="flex justify-center items-center mb-8 mt-12 w-full">
      <motion.div
        className="flex flex-col items-center gap-6 text-center"
        initial="hidden"
        animate="visible"
        variants={leftContentVariants}
      >
        <motion.a
          href="/"
          className="cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img
            src="/profile.jpeg"
            alt="Priyanshu Tarsauliya"
            className="h-28 w-28 md:h-32 md:w-32 rounded-full shadow-[0_0_30px_rgba(20,235,163,0.5)] object-cover ring-4 ring-accent"
            animate={{ y: [-6, 6, -6] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </motion.a>
        <div className="flex flex-col items-center">
          <p className="text-text-primary font-bold text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-accent mb-2">
            Priyanshu Tarsauliya
          </p>
          <p className="text-text-secondary font-medium text-lg md:text-xl tracking-wide h-8">
            <Typewriter text="Software Developer & AI Enthusiast" delay={100} />
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
