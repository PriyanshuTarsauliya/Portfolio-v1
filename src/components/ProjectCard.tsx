import { RxArrowTopRight, RxGithubLogo } from "react-icons/rx";
import { motion } from "motion/react";

import { useTheme } from "../context/theme.context.tsx";

import { ProjectType } from "../types";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const { isDarkMode } = useTheme();

  const cardVariants = {
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

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
      },
    },
  };

  const imageToUse =
    project.image.length > 1
      ? isDarkMode
        ? project.image[1]
        : project.image[0]
      : project.image[0];

  return (
    <div className="relative group rounded-xl">
      <div className="absolute -inset-[1px] bg-gradient-to-r from-accent to-blue-500 rounded-xl opacity-0 group-hover:opacity-40 blur-md transition duration-500" />
      <motion.div
        className="relative h-full rounded-xl shadow-md shadow-accent/5 border border-border-primary/50 bg-background-primary transition-all duration-300"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="overflow-hidden rounded-t-xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <motion.img
            src={imageToUse}
            alt={project.title}
            className="aspect-[16/10] h-full w-full object-cover"
            loading="lazy"
            variants={imageVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

      <motion.div className="p-3 flex flex-col gap-2" variants={cardVariants}>
        <div>
          <motion.h3
            className="text-md font-semibold text-text-primary"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            {project.title}
          </motion.h3>
          <motion.p
            className="mt-0 text-xs font-normal text-text-secondary"
            variants={cardVariants}
            transition={{ delay: 0.4 }}
          >
            {project.projectStart} - {project.projectEnd}
          </motion.p>
          <motion.p
            className="mt-4 text-xs font-light text-text-primary line line-clamp-3"
            variants={cardVariants}
            transition={{ delay: 0.4 }}
          >
            {project.description}
          </motion.p>
          <motion.div className="flex flex-wrap gap-2 mt-4">
            {project.techStack.map((item, index) => (
              <p
                className="text-[10px] px-2 py-1 rounded-md text-text-secondary hover:text-text-primary hover:bg-accent/20 transition-all duration-300 border border-border-primary/50 cursor-pointer"
                key={index}
              >
                {item}
              </p>
            ))}
          </motion.div>
        </div>

        <div className="mt-4 flex justify-around items-center gap-2">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs flex justify-center items-center gap-2 w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Github
              <RxGithubLogo className="h-4 w-4" />
            </motion.a>
          )}
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs flex justify-center items-center gap-2 w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Website
              <RxArrowTopRight className="h-4 w-4" />
            </motion.a>
          )}
        </div>
      </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
