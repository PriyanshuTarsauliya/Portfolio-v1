import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RxChevronUp } from "react-icons/rx";
import Magnetic from "./ui/Magnetic";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-[95]">
          <Magnetic strength={0.3}>
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              whileHover={{ scale: 1.12, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-3 bg-accent rounded-full text-background-primary shadow-[0_0_20px_rgba(20,235,163,0.5)] transition-all hover:bg-accent/90 cursor-pointer flex items-center justify-center ring-2 ring-background-primary"
              aria-label="Scroll to top"
            >
              <RxChevronUp className="h-5 w-5 font-bold" />
            </motion.button>
          </Magnetic>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
