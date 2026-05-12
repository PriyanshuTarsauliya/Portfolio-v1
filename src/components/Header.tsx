import { motion } from "motion/react";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const leftContentVariants = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const rightContentVariants = {
    hidden: {
      x: 10,
      opacity: 0,
    },
    visible: {
      x: 0,
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
    <div className="flex justify-between items-center mb-16">
      <motion.div
        className="flex items-center gap-4"
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
          <img
            src="/profile.jpeg"
            alt="Priyanshu Tarsauliya"
            className="h-12 w-12 rounded-full shadow-[0_0_15px_rgba(20,235,163,0.3)] object-cover ring-2 ring-accent/30"
          />
        </motion.a>
        <div className="flex flex-col">
          <p className="text-text-primary font-bold text-md">Priyanshu Tarsauliya</p>
          <p className="text-text-secondary font-normal text-sm">
            Software Developer
          </p>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={rightContentVariants}
      >
        <ThemeToggle />
      </motion.div>
    </div>
  );
};

export default Header;
