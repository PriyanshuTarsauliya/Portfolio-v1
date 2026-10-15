import { motion } from "motion/react";
import Tilt3D from "./ui/Tilt3D";

const skills = [
  { category: "Languages", items: ["Java", "Python", "C++", "JavaScript", "HTML5", "CSS3", "SQL (MySQL)"] },
  { category: "Backend", items: ["Spring Boot", "Spring MVC", "Node.js", "RESTful API Design", "Microservices", "WebSockets", "Maven"] },
  { category: "Frontend", items: ["React.js", "Tailwind CSS", "Bootstrap", "TypeScript"] },
  { category: "CS Core", items: ["Data Structures & Algorithms", "OOP", "System Design", "AI / ML", "Query Optimization"] },
  { category: "Cloud & DevOps", items: ["Azure (Certified)", "AWS", "GCP", "Docker", "CI/CD Pipelines (GitHub Actions)", "Git", "GitHub"] },
  { category: "Tools / Methods", items: ["VS Code", "Postman", "Agile / Scrum Sprint", "SEO"] },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
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
          variants={itemVariants}
        >
          Technical Skills
        </motion.h2>
        <motion.p
          className="text-text-secondary text-sm"
          variants={itemVariants}
        >
          Hover over categories for 3D perspective and stack breakdown
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {skills.map((skillGroup, index) => (
          <motion.div key={index} variants={itemVariants} className="h-full">
            <Tilt3D
              maxTilt={9}
              scale={1.02}
              glare={true}
              className="h-full group"
            >
              {/* Outer dynamic ambient blur */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/0 to-accent/0 group-hover:from-accent/30 group-hover:to-blue-500/25 rounded-2xl blur-md transition duration-500 opacity-0 group-hover:opacity-100 -z-10" />

              <div
                style={{ transformStyle: "preserve-3d" }}
                className="relative h-full p-6 rounded-2xl border border-border-primary/40 group-hover:border-accent/40 bg-background-primary/90 backdrop-blur-md shadow-sm group-hover:shadow-xl group-hover:shadow-accent/5 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* 3D background corner gradient */}
                <div
                  style={{ transform: "translateZ(8px)" }}
                  className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full -mr-8 -mt-8 pointer-events-none transition-transform duration-500 group-hover:scale-125"
                />

                <div style={{ transform: "translateZ(22px)", transformStyle: "preserve-3d" }}>
                  <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent ring-2 ring-accent/30 animate-pulse" />
                    {skillGroup.category}
                  </h3>
                </div>

                <div
                  style={{ transform: "translateZ(26px)" }}
                  className="flex flex-wrap gap-2 pt-2"
                >
                  {skillGroup.items.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.08, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-background-secondary/60 border border-border-primary/40 text-text-secondary hover:text-text-primary hover:bg-accent/15 hover:border-accent/50 transition-colors duration-200 shadow-sm cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Tilt3D>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
