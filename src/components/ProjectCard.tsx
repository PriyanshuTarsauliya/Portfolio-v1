import { RxArrowTopRight, RxGithubLogo } from "react-icons/rx";
import { motion } from "motion/react";

import { useTheme } from "../context/theme.context.tsx";
import { ProjectType } from "../types";
import Tilt3D from "./ui/Tilt3D";
import Magnetic from "./ui/Magnetic";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const { isDarkMode } = useTheme();

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
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
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="h-full"
    >
      <Tilt3D
        maxTilt={11}
        scale={1.02}
        glare={true}
        className="h-full group"
      >
        {/* Dynamic 3D ambient aura glow behind the card */}
        <div className="absolute -inset-[2px] bg-gradient-to-r from-accent/30 via-emerald-500/20 to-blue-500/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10" />

        <div
          style={{ transformStyle: "preserve-3d" }}
          className="relative h-full rounded-2xl shadow-lg shadow-black/5 dark:shadow-accent/5 border border-border-primary/50 group-hover:border-accent/50 bg-background-primary/95 backdrop-blur-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
        >
          {/* Top Image Preview Layer with 3D Depth */}
          <div
            style={{ transform: "translateZ(22px)", transformStyle: "preserve-3d" }}
            className="overflow-hidden rounded-t-2xl relative"
          >
            <motion.div
              className="relative aspect-[16/10] w-full overflow-hidden bg-background-secondary/40"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={imageToUse}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300" />
            </motion.div>
          </div>

          {/* Card Content with Multi-Layer 3D Depth */}
          <div
            style={{ transform: "translateZ(26px)", transformStyle: "preserve-3d" }}
            className="p-5 flex flex-col flex-grow justify-between gap-4"
          >
            <div>
              <div className="flex justify-between items-start gap-2 mb-1.5">
                <h3
                  style={{ transform: "translateZ(15px)" }}
                  className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors duration-300"
                >
                  {project.title}
                </h3>
                <span
                  style={{ transform: "translateZ(12px)" }}
                  className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-background-secondary/60 text-text-secondary border border-border-primary/40 whitespace-nowrap"
                >
                  {project.projectStart} - {project.projectEnd}
                </span>
              </div>

              <p
                style={{ transform: "translateZ(10px)" }}
                className="mt-2 text-xs font-normal text-text-secondary line-clamp-3 leading-relaxed"
              >
                {project.description}
              </p>

              {/* Tech Stack Pills in 3D Depth */}
              <div
                style={{ transform: "translateZ(20px)" }}
                className="flex flex-wrap gap-1.5 mt-4"
              >
                {project.techStack.map((item, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="text-[11px] px-2.5 py-1 rounded-md text-text-secondary hover:text-text-primary hover:bg-accent/15 hover:border-accent/40 bg-background-secondary/40 transition-all duration-200 border border-border-primary/40 cursor-default font-mono"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Action Buttons Layer with Magnetic Effect */}
            <div
              style={{ transform: "translateZ(32px)" }}
              className="mt-2 pt-3 border-t border-border-primary/30 flex justify-between items-center gap-3"
            >
              {project.github && (
                <Magnetic strength={0.2} className="w-full">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs flex justify-center items-center gap-2 w-full py-2 rounded-lg border border-border-primary/50 hover:border-accent/50"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <RxGithubLogo className="h-4 w-4" />
                    <span>Code</span>
                  </motion.a>
                </Magnetic>
              )}

              {project.live && (
                <Magnetic strength={0.2} className="w-full">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs flex justify-center items-center gap-2 w-full py-2 rounded-lg shadow-sm hover:shadow-accent/25"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <span>Live Demo</span>
                    <RxArrowTopRight className="h-4 w-4" />
                  </motion.a>
                </Magnetic>
              )}
            </div>
          </div>
        </div>
      </Tilt3D>
    </motion.div>
  );
};

export default ProjectCard;
