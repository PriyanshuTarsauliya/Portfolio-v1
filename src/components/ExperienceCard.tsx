import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RxCross2 } from "react-icons/rx";

import { ExperienceType } from "../types";
import Tilt3D from "./ui/Tilt3D";

const ExperienceCard = ({ experience }: { experience: ExperienceType }) => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="group relative border-l-2 border-accent/30 pl-6 ml-2 my-8"
      >
        {/* Animated 3D Node on Timeline */}
        <motion.div
          className="absolute -left-[9px] top-6 h-4 w-4 rounded-full bg-accent ring-4 ring-background-primary shadow-[0_0_12px_rgba(20,235,163,0.8)]"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: experience.id * 0.1, duration: 0.4 }}
        />

        <Tilt3D
          maxTilt={7}
          scale={1.015}
          glare={true}
          className="w-full"
        >
          {/* Card Body with 3D Depth */}
          <div
            style={{ transformStyle: "preserve-3d" }}
            className="p-6 rounded-2xl border border-border-primary/40 group-hover:border-accent/40 bg-background-primary/80 backdrop-blur-md shadow-sm group-hover:shadow-xl transition-all duration-300"
          >
            <div
              style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-2"
            >
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary font-bold text-xl hover:text-accent transition-colors"
              >
                {experience.company}
              </a>

              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent/15 text-accent border border-accent/30 self-start sm:self-auto">
                {experience.designation}
              </span>
            </div>

            <p
              style={{ transform: "translateZ(14px)" }}
              className="text-xs text-text-secondary font-mono mb-3"
            >
              {experience.startDate} — {experience.endDate}
            </p>

            <p
              style={{ transform: "translateZ(16px)" }}
              className="text-text-secondary text-sm leading-relaxed"
            >
              {experience.description}
            </p>

            {experience.certificates && experience.certificates.length > 0 && (
              <div
                style={{ transform: "translateZ(24px)" }}
                className="mt-5 flex flex-wrap gap-4 pt-4 border-t border-border-primary/20"
              >
                {experience.certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative rounded-lg overflow-hidden border border-accent/30 shadow-md group/cert cursor-zoom-in"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <img
                      src={cert}
                      alt={`Certificate ${index + 1}`}
                      className="w-auto h-28 md:h-36 object-contain bg-background-secondary/30 transition-transform duration-300 group-hover/cert:scale-105"
                    />
                    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <span className="text-[10px] bg-background-primary/90 text-text-primary font-medium px-2 py-1 rounded shadow">
                        Click to Zoom
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </Tilt3D>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-md flex justify-center items-center p-4 cursor-zoom-out"
          >
            <motion.button
              className="absolute top-6 right-6 text-white hover:text-accent p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={() => setSelectedCert(null)}
            >
              <RxCross2 size={24} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.85, opacity: 0, rotateX: 20 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              src={selectedCert}
              alt="Enlarged Certificate"
              className="max-w-full max-h-[88vh] object-contain rounded-xl shadow-2xl ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExperienceCard;
