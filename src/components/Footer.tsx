import { motion } from "motion/react";
import { socialsInfo } from "../constants/socials";
import Magnetic from "./ui/Magnetic";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.footer
      className="w-full py-8 mt-auto border-t border-border-primary/30 bg-background-primary/50 backdrop-blur-sm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left"
          variants={containerVariants}
        >
          <motion.p
            className="text-text-secondary text-xs sm:text-sm"
            variants={itemVariants}
          >
            © {currentYear} Priyanshu Tarsauliya • Built with React, Tailwind & 3D Motion
          </motion.p>

          <motion.div
            className="flex items-center gap-4"
            variants={containerVariants}
          >
            {socialsInfo.map((social) => {
              const Icon = social.icon;
              return (
                <Magnetic key={social.id} strength={0.3}>
                  <motion.a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full text-text-secondary hover:text-accent hover:bg-accent/10 transition-colors duration-200 block"
                    aria-label={social.name}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                </Magnetic>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
