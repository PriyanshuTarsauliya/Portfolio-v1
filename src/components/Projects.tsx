import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import ProjectCard from "./ProjectCard";
import { projects } from "../constants/projects";
import { ProjectType } from "../types";

const categories = ["All", "Frontend", "Fullstack", "Android"];

const getCategory = (project: ProjectType) => {
  if (project.techStack.includes("Android SDK") || project.techStack.includes("Android Services")) return "Android";
  if (project.techStack.includes("Spring Boot") || project.techStack.includes("MySQL")) return "Fullstack";
  return "Frontend";
};

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    return getCategory(project) === filter;
  }).reverse();

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
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <motion.h2
          className="font-semibold text-3xl text-text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <motion.div 
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category 
                  ? "bg-accent text-background-primary shadow-lg shadow-accent/20" 
                  : "bg-background-secondary/50 text-text-secondary hover:text-text-primary hover:bg-background-secondary"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
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
