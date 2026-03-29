import { motion } from "motion/react";

import { ExperienceType } from "../types";

const ExperienceCard = ({ experience }: { experience: ExperienceType }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="group relative border-l border-[#14eba3] pl-4"
    >
      {/* Animated dot on timeline */}
      <motion.div
        className="absolute -left-[5px] top-[6px] h-2 w-2 rounded-full bg-[#14eba3]"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: experience.id * 0.1, duration: 0.3 }}
      />

      <motion.div variants={contentVariants}>
        <motion.p
          className="text-sm text-text-secondary mb-1"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {experience.startDate} - {experience.endDate}
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-between md:items-center md:gap-2 mb-2"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <a
            href={experience.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary font-medium hover:underline"
          >
            {experience.company}
          </a>

          <span className="text-sm text-text-primary font-normal">
            {experience.designation}
          </span>
        </motion.div>

        <motion.p
          className="text-text-secondary text-sm leading-relaxed"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: experience.id * 0.1 + 0.3,
              },
            },
          }}
        >
          {experience.description}
        </motion.p>

        {experience.certificates && experience.certificates.length > 0 && (
          <motion.div
            className="mt-4 flex flex-wrap gap-4"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delay: experience.id * 0.1 + 0.5 },
              },
            }}
          >
            {experience.certificates.map((cert, index) => (
              <img
                key={index}
                src={cert}
                alt={`Certificate ${index + 1}`}
                className="w-auto h-32 md:h-40 object-contain rounded-md border border-[#14eba3]/30 hover:scale-105 transition-transform duration-300 shadow-sm"
              />
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;
