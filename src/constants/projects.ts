import { ProjectType } from "../types";

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Crypto Trading Platform",
    projectStart: "Jan 2025",
    projectEnd: "Apr 2025",
    description:
      "Architected a full-stack cryptocurrency platform tracking 20+ trading pairs with an AI-driven chatbot for market insights. Built WebSocket-based streaming APIs delivering real-time prices to 500+ concurrent connections, secured with JWT-based authentication for 100% safe wallet transfers. Containerised the platform with Docker and optimised MySQL queries via advanced indexing, cutting query latency by 60%.",
    techStack: ["React.js", "Spring Boot", "MySQL", "WebSocket", "AI", "Docker"],
    live: "",
    github: "https://github.com/PriyanshuTarsauliya/Source-Code",
    image: ["/project_crypto.png"],
  },
  {
    id: 2,
    title: "Dr. Gunja Gupta Clinic",
    projectStart: "2024",
    projectEnd: "2024",
    description:
      "Developed a modern, responsive clinic website using HTML, CSS, and JavaScript with a focus on UI/UX and mobile accessibility. Implemented complex CSS animations, custom styling, and an interactive mobile navigation system without relying on heavy frameworks. Integrated Technical SEO (JSON-LD schema, Open Graph) and performance tracking tools (Google Analytics, Microsoft Clarity) to boost local search visibility and patient engagement.",
    techStack: ["HTML5", "CSS3", "JavaScript", "SEO", "Analytics", "UI/UX"],
    live: "https://drgunjagupta.com/",
    github: "https://github.com/PriyanshuTarsauliya",
    image: ["/project_clinic.png"],
  },
  {
    id: 3,
    title: "AI Number & Alphabet Detection",
    projectStart: "Jan 2024",
    projectEnd: "Apr 2024",
    description:
      "Developed a CNN-based recognition system achieving 96% classification accuracy on handwritten numbers and alphabets, integrating OpenCV for preprocessing. Optimised the image processing pipeline for real-time text extraction, reducing latency to under 200ms per frame. Processed and analysed 10,000+ test samples for handwritten character recognition, ensuring robust model training and validation.",
    techStack: ["Python", "Machine Learning", "CNN", "OpenCV", "NumPy"],
    live: "",
    github: "https://github.com/PriyanshuTarsauliya",
    image: ["/project_ai.png"],
  },
  {
    id: 4,
    title: "Portfolio Website",
    projectStart: "Jan 2023",
    projectEnd: "Mar 2023",
    description:
      "Designed and deployed a portfolio site responsive across mobile, tablet, and desktop breakpoints, achieving a 95+ Lighthouse performance score. Reduced page load time from 4.2s to 1.1s (74% faster) via lazy-loading techniques and minimised JavaScript overhead.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Performance Optimization"],
    live: "https://priyanshu-tarsauliya-portfolio.netlify.app/",
    github: "https://github.com/PriyanshuTarsauliya",
    image: ["/project_portfolio.png"],
  },
];

