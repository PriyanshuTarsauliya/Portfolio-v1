import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import ThemeToggle from "./ThemeToggle";

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
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <a href="#home" className="font-bold text-xl tracking-tight text-text-primary">
            Priyanshu<span className="text-accent">.</span>
          </a>
          
          <div className="hidden md:flex gap-8 items-center">
            {links.map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-text-secondary hover:text-accent transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button 
              className="md:hidden text-text-primary p-1"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[72px] left-0 right-0 z-[90] bg-background-primary/95 backdrop-blur-lg border-b border-border-primary/20 md:hidden overflow-hidden"
          >
            <div className="flex flex-col py-4 px-6 gap-4">
              {links.map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-text-secondary hover:text-accent transition-colors py-2 border-b border-border-primary/10"
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
