import { RxDownload } from "react-icons/rx";
import { motion } from "motion/react";

import SocialButtons from "./SocialButtons";
import Magnetic from "./ui/Magnetic";

import { socialsInfo } from "../constants/socials";
import { DESCRIPTION_TEXT } from "../constants/about";

const HighlightedText = ({ text }: { text: string }) => (
  <motion.span
    className="text-text-primary font-medium"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    data-cursor="true"
  >
    {text}
  </motion.span>
);

const About = () => {
  const handleResumeClick = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1FSjXPXmzJaaBz2qhFT-r26AZsz_FjKla/view?usp=sharing";
    window.open(resumeUrl, "_blank", "noopener noreferrer");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <motion.section
      className="mb-14 flex flex-col items-center w-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-7xl font-light text-text-primary mb-6 leading-[1.3] text-center"
        variants={itemVariants}
      >
        Crafting{" "}
        <span className="italic font-medium font-serif" data-cursor="true">
          digital experiences
        </span>{" "}
        <br className="hidden md:block" />
        that{" "}
        <span className="relative inline-block text-4xl sm:text-5xl md:text-7xl font-medium text-text-primary z-10">
          matter.
          <motion.span
            className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-3 md:h-4 bg-accent/40 -z-10 rounded-sm"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeInOut" }}
            style={{ originX: 0 }}
          />
        </span>
      </motion.h1>

      <motion.p
        className="text-text-secondary font-light text-base md:text-xl mt-4 mb-10 leading-relaxed text-center max-w-3xl px-2"
        variants={itemVariants}
      >
        {DESCRIPTION_TEXT.parts.map((part, index) =>
          part.highlight ? (
            <HighlightedText key={index} text={part.text} />
          ) : (
            <motion.span
              key={index}
              custom={index}
              variants={fadeInVariant}
              initial="hidden"
              animate="visible"
            >
              {part.text}
            </motion.span>
          )
        )}
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center items-center gap-6"
        variants={itemVariants}
      >
        <Magnetic strength={0.25}>
          <motion.button
            onClick={handleResumeClick}
            className="btn-primary text-base px-8 py-3.5 flex items-center gap-2 rounded-full shadow-lg shadow-accent/20 hover:shadow-accent/40 relative overflow-hidden group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 font-semibold tracking-wide flex items-center gap-2">
              Download Resume
              <RxDownload className="h-5 w-5 group-hover:translate-y-0.5 transition-transform duration-200" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/20 to-accent/0 -translate-x-full group-hover:translate-x-full duration-1000 transition-transform" />
          </motion.button>
        </Magnetic>

        <div className="flex gap-4">
          {socialsInfo.map((social, index) => (
            <Magnetic key={social.id} strength={0.3}>
              <motion.div
                variants={itemVariants}
                custom={index}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                <SocialButtons social={social} />
              </motion.div>
            </Magnetic>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
