import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RxCross2 } from "react-icons/rx";

import { ExperienceType } from "../types";

const ExperienceCard = ({ experience }: { experience: ExperienceType }) => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

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
    <>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="group relative border-l-2 border-accent/40 pl-6 ml-2"
      >
        {/* Animated dot on timeline */}
        <motion.div
          className="absolute -left-[7px] top-[6px] h-3 w-3 rounded-full bg-accent ring-4 ring-background-primary"
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
              className="text-text-primary font-medium hover:underline text-lg"
            >
              {experience.company}
            </a>

            <span className="text-sm text-accent font-medium mt-1 md:mt-0">
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
                  onClick={() => setSelectedCert(cert)}
                  className="w-auto h-32 md:h-40 object-contain rounded-md border border-accent/20 hover:border-accent/60 hover:scale-105 transition-all duration-300 shadow-sm cursor-zoom-in"
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex justify-center items-center p-4 cursor-zoom-out"
          >
            <motion.button
              className="absolute top-6 right-6 text-white hover:text-accent p-2 rounded-full bg-black/50 transition-colors"
              onClick={() => setSelectedCert(null)}
            >
              <RxCross2 size={24} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedCert}
              alt="Enlarged Certificate"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExperienceCard;
