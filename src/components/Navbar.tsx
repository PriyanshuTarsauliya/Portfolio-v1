import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import ThemeToggle from "./ThemeToggle";
import Magnetic from "./ui/Magnetic";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[100] px-6 py-4 bg-background-primary/80 backdrop-blur-md border-b border-border-primary/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto w-full flex justify-between items-center">
          <Magnetic strength={0.2}>
            <a href="#home" className="font-bold text-xl tracking-tight text-text-primary block">
              Priyanshu<span className="text-accent">.</span>
            </a>
          </Magnetic>

          <div className="hidden md:flex gap-7 items-center">
            {links.map((item) => (
              <Magnetic key={item} strength={0.2}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-text-secondary hover:text-accent transition-colors duration-200 px-2 py-1 block"
                >
                  {item}
                </a>
              </Magnetic>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Magnetic strength={0.25}>
              <ThemeToggle />
            </Magnetic>
            <button
              className="md:hidden text-text-primary p-1 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Menu with Spring Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            className="fixed top-[68px] left-0 right-0 z-[90] bg-background-primary/95 backdrop-blur-lg border-b border-border-primary/20 md:hidden overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col py-4 px-6 gap-3">
              {links.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-text-secondary hover:text-accent transition-colors py-2.5 border-b border-border-primary/10"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
