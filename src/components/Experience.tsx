import { motion } from "motion/react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../constants/experience";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      <div className="flex flex-col gap-2 mb-8">
        <motion.h2
          className="font-bold text-3xl text-text-primary tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience & Education
        </motion.h2>
        <motion.p
          className="text-text-secondary text-sm"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Timeline of engineering work, academic foundation, and verified credentials
        </motion.p>
      </div>

      <motion.div className="space-y-4">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Experience;
