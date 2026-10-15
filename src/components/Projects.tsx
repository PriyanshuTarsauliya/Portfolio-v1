import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import ProjectCard from "./ProjectCard";
import { projects } from "../constants/projects";
import { ProjectType } from "../types";
import Magnetic from "./ui/Magnetic";

const categories = ["All", "Fullstack", "AI / ML", "Frontend", "Android"];

const getCategory = (project: ProjectType) => {
  const stack = project.techStack;
  if (stack.some((t) => t.includes("Python") || t.includes("AI") || t.includes("ML") || t.includes("Computer Vision") || t.includes("TensorFlow"))) {
    return "AI / ML";
  }
  if (stack.includes("Android SDK") || stack.includes("Android Services")) {
    return "Android";
  }
  if (stack.includes("Spring Boot") || stack.includes("MySQL") || stack.includes("Node.js") || stack.includes("Tailwind CSS, React.js")) {
    return "Fullstack";
  }
  return "Frontend";
};

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    return getCategory(project) === filter;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      className="mb-14 pt-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <motion.h2
            className="font-bold text-3xl text-text-primary tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-text-secondary text-sm mt-1"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hover or touch cards to inspect 3D tilt perspective and live demos
          </motion.p>
        </div>

        {/* Filter Badges with Magnetic attraction */}
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <Magnetic key={category} strength={0.15}>
              <button
                onClick={() => setFilter(category)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  filter === category
                    ? "bg-accent text-background-primary shadow-lg shadow-accent/25 scale-105"
                    : "bg-background-secondary/50 text-text-secondary hover:text-text-primary hover:bg-background-secondary border border-border-primary/30"
                }`}
              >
                {category}
              </button>
            </Magnetic>
          ))}
        </motion.div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-7"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
