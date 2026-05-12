import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RxChevronUp } from "react-icons/rx";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
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
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[90] p-3 bg-accent rounded-full text-background-primary shadow-[0_0_15px_rgba(20,235,163,0.4)] transition-all hover:bg-accent/90"
          aria-label="Scroll to top"
        >
          <RxChevronUp className="h-6 w-6 font-bold" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
