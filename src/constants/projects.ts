import { ProjectType } from "../types";

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Crypto Trading Platform",
    projectStart: "2024",
    projectEnd: "2024",
    description:
      "Developed a comprehensive trading platform featuring an AI-driven chatbot and secure wallet transfer capabilities. Solved latency challenges by implementing WebSocket-based streaming APIs and optimized database queries to handle high-frequency data.",
    techStack: ["React.js", "Spring Boot", "MySQL", "WebSockets"],
    live: "",
    github: "https://github.com/PriyanshuTarsauliya/Source-Code",
    image: ["/project_crypto.png"],
  },
  {
    id: 2,
    title: "E-Commerce Frontend Interface",
    description:
      "Engineered a high-fidelity replica of a major e-commerce user interface, focusing on pixel-perfect design. Utilized CSS Flexbox and Grid systems with advanced media queries to ensure 100% responsiveness across all device types and manage complex product listings.",
    techStack: ["HTML", "CSS", "JavaScript", "Flexbox"],
    live: "",
    github: "https://github.com/PriyanshuTarsauliya/Amazon-Clone",
    image: ["/project_ecommerce.png"],
    projectStart: "2023",
    projectEnd: "2023",
  },
  {
    id: 3,
    title: "Music Player App",
    description:
      "Built a native Android application for offline music playback with an intuitive user interface. Implemented Android Service components and Lifecycle management to ensure uninterrupted background playback while multitasking.",
    techStack: ["Java", "Android SDK", "Android Services", "XML"],
    live: "",
    github: "https://github.com/PriyanshuTarsauliya/Android-App",
    image: ["/project_music.png"],
    projectStart: "2023",
    projectEnd: "2023",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Designed a responsive personal portfolio optimized for speed and visual appeal. Improved load times by implementing lazy loading for images and minimizing JavaScript execution.",
    techStack: ["HTML", "CSS", "JavaScript", "Optimization"],
    live: "",
    github: "",
    image: ["/project_portfolio.png"],
    projectStart: "2023",
    projectEnd: "2023",
  },
];
