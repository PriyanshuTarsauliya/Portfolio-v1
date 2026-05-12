import { motion } from "motion/react";

const StatsWidget = () => {
  return (
    <motion.div 
      className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12 mb-8 w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <div className="group relative rounded-xl bg-background-secondary/20 p-4 border border-border-primary/30 backdrop-blur-sm hover:border-accent/50 transition-colors w-full md:w-auto">
        <a href="https://github.com/PriyanshuTarsauliya" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://github-readme-stats.vercel.app/api?username=PriyanshuTarsauliya&show_icons=true&theme=transparent&hide_border=true&title_color=14eba3&text_color=888888&icon_color=14eba3" 
            alt="GitHub Stats" 
            className="w-full max-w-[400px] h-auto object-contain"
          />
        </a>
      </div>
      
      <div className="group relative rounded-xl bg-background-secondary/20 p-4 border border-border-primary/30 backdrop-blur-sm hover:border-accent/50 transition-colors w-full md:w-auto flex justify-center items-center">
        <div className="text-center">
          <h3 className="text-accent font-bold text-3xl mb-1">500+</h3>
          <p className="text-text-secondary text-sm font-medium">LeetCode Problems</p>
          <div className="mt-3 flex justify-center gap-2">
            <span className="text-[10px] px-2 py-1 bg-green-500/10 text-green-500 rounded border border-green-500/20">Easy</span>
            <span className="text-[10px] px-2 py-1 bg-yellow-500/10 text-yellow-500 rounded border border-yellow-500/20">Medium</span>
            <span className="text-[10px] px-2 py-1 bg-red-500/10 text-red-500 rounded border border-red-500/20">Hard</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StatsWidget;
