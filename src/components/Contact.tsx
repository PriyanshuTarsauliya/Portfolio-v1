import { motion } from "motion/react";
import { useState } from "react";
import { RxPaperPlane } from "react-icons/rx";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Tilt3D from "./ui/Tilt3D";
import Magnetic from "./ui/Magnetic";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(""), 3500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-text-secondary text-sm"
          variants={itemVariants}
        >
          Have a question or looking to collaborate? Reach out anytime!
        </motion.p>
      </div>

      {/* 3D Contact Cards Row */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
        variants={itemVariants}
      >
        <Tilt3D maxTilt={10} scale={1.03} glare={true} className="h-full">
          <a
            href="mailto:priyanshutarsauliya@gmail.com"
            className="flex items-center gap-3.5 p-4 rounded-xl border border-border-primary/40 bg-background-primary/90 hover:border-accent/50 hover:bg-accent/5 transition-all group h-full shadow-sm"
          >
            <div className="p-2.5 rounded-lg bg-accent/10 text-accent group-hover:scale-110 transition-transform">
              <FiMail className="w-5 h-5" />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs text-text-secondary">Email</p>
              <p className="text-sm font-medium text-text-primary truncate">
                priyanshutarsauliya@gmail.com
              </p>
            </div>
          </a>
        </Tilt3D>

        <Tilt3D maxTilt={10} scale={1.03} glare={true} className="h-full">
          <a
            href="tel:+916387831138"
            className="flex items-center gap-3.5 p-4 rounded-xl border border-border-primary/40 bg-background-primary/90 hover:border-accent/50 hover:bg-accent/5 transition-all group h-full shadow-sm"
          >
            <div className="p-2.5 rounded-lg bg-accent/10 text-accent group-hover:scale-110 transition-transform">
              <FiPhone className="w-5 h-5" />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs text-text-secondary">Phone</p>
              <p className="text-sm font-medium text-text-primary truncate">
                +91 63878 31138
              </p>
            </div>
          </a>
        </Tilt3D>

        <Tilt3D maxTilt={10} scale={1.03} glare={true} className="h-full">
          <div className="flex items-center gap-3.5 p-4 rounded-xl border border-border-primary/40 bg-background-primary/90 h-full shadow-sm">
            <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
              <FiMapPin className="w-5 h-5" />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs text-text-secondary">Location</p>
              <p className="text-sm font-medium text-text-primary truncate">
                Bhopal, MP, India
              </p>
            </div>
          </div>
        </Tilt3D>
      </motion.div>

      {/* Form Card */}
      <motion.div
        className="p-6 md:p-8 rounded-2xl border border-border-primary/30 bg-background-primary/80 backdrop-blur-md shadow-lg"
        variants={itemVariants}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-text-primary">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="px-4 py-3 rounded-xl bg-background-primary border border-border-primary/50 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all placeholder:text-text-secondary/50"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-text-primary">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-4 py-3 rounded-xl bg-background-primary border border-border-primary/50 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all placeholder:text-text-secondary/50"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-text-primary">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="px-4 py-3 rounded-xl bg-background-primary border border-border-primary/50 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none placeholder:text-text-secondary/50"
              placeholder="How can I help you?"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-accent text-sm font-medium h-5">{status}</p>
            <Magnetic strength={0.2}>
              <motion.button
                type="submit"
                className="btn-primary flex items-center gap-2 px-6 py-2.5 rounded-xl shadow-md hover:shadow-accent/20 cursor-pointer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <span>Send Message</span>
                <RxPaperPlane className="w-4 h-4" />
              </motion.button>
            </Magnetic>
          </div>
        </form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
