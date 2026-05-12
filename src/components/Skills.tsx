import { motion } from "motion/react";

const skills = [
  { category: "Frontend", items: ["React.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"] },
  { category: "Backend", items: ["Node.js", "Spring Boot", "Java", "Express.js", "REST APIs"] },
  { category: "Database & Cloud", items: ["MySQL", "MongoDB", "AWS", "Azure", "Docker"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Postman", "Vite"] },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      className="mb-14 pt-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2 
        className="font-semibold text-3xl text-text-primary mb-8"
        variants={itemVariants}
      >
        Technical Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {skills.map((skillGroup, index) => (
          <motion.div 
            key={index} 
            className="group relative"
            variants={itemVariants}
            whileHover={{ y: -4 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/0 to-accent/0 group-hover:from-accent/30 group-hover:to-blue-500/30 rounded-xl blur-md transition duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative h-full p-6 rounded-xl border border-border-primary/40 bg-background-primary/80 backdrop-blur-sm shadow-sm overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150" />
              <h3 className="text-lg font-semibold text-text-primary mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {skillGroup.items.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3.5 py-1.5 text-xs font-medium rounded-lg bg-background-secondary/50 border border-border-primary/30 text-text-secondary hover:text-text-primary hover:bg-accent/10 hover:border-accent/40 transition-all duration-300 shadow-[0_2px_10px_transparent] hover:shadow-accent/20 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
