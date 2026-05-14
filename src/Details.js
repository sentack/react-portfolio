// Logo
import logo from "./assets/logo.png";

// Profile Image
import profile from "./assets/profile.JPG";

// Tech stack icons — from react-icons/si (Simple Icons)
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiDjango,
  SiPython,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiGooglecloud,
  SiVscodium,
} from "react-icons/si";

// Project Images

// Project 1 — Church Website
import churchImage1 from "./assets/projects/church/hero.png";
import churchImage2 from "./assets/projects/church/about_dark.png";
import churchImage3 from "./assets/projects/church/about_light.png";
import churchImage4 from "./assets/projects/church/contact_dark.png";
import churchImage5 from "./assets/projects/church/contact_light.png";

// Project 2 — Salma Furniture
import salmaImage1 from "./assets/projects/salma/hero.png";

// Project 3 — AI Chat App
import chatbotImage1 from "./assets/projects/chatbot/dark_mode.png";
import chatbotImage2 from "./assets/projects/chatbot/light_mode.png";
import chatbotImage3 from "./assets/projects/chatbot/code_copy_feature.png";

// Project 4 — Personal Portfolio
import portfolioImage1 from "./assets/projects/portfolio/homepage.png";
import portfolioImage2 from "./assets/projects/portfolio/about.png";
import portfolioImage3 from "./assets/projects/portfolio/contact.png";
import portfolioImage4 from "./assets/projects/portfolio/projects.png";
import portfolioImage5 from "./assets/projects/portfolio/skills.png";
import portfolioImage6 from "./assets/projects/portfolio/project_decription.png";

export const logos = {
  logo: logo,
};

// Personal Details
export const personalDetails = {
  name: "Sena Takele",
  tagline: "But, you can call me Sentack :)",
  img: profile,
  about1: `Full-stack engineer with 4+ years of experience building scalable, production-ready web applications. Recently earned a Software Engineering degree, combining strong academic foundations with hands-on industry experience. Skilled in designing and developing reliable backend systems, implementing secure payment integrations, and delivering end-to-end solutions from concept to deployment. Experienced collaborating in cross-functional Agile teams to ship high-quality software that drives real business impact.`,
};

// Social Media
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/sentack/",
  github: "https://www.github.com/sentack",
  twitter: "https://twitter.com/sentak01",
  instagram: "https://www.instagram.com/sentak01/",
};

// Work Experience — newest first
export const workDetails = [
  {
    Position: "Backend Developer",
    Company: "AdV3nture",
    Location: "Remote",
    Type: "Full-time",
    Duration: "Dec 2025 – Present",
    details: [
      "Developed backend for an investor-startup connection platform using MERN stack with PostgreSQL",
      "Built a Tinder-style swipe algorithm enabling investors and startups to express mutual interest and connect",
      "Integrated TalkJS for real-time messaging and chat functionality between connected parties",
      "Implemented KYC verification for platform users to ensure compliance and trust",
      "Developed subscription tier system with feature restrictions and Stripe payment processing",
      "Built user-facing analytics dashboards to help investors and startups track engagement",
      "Implemented comprehensive admin portal with sophisticated analytics for platform monitoring",
      "Platform launched February 2026, currently serving <100 users with zero critical post-launch issues",
    ],
  },
  {
    Position: "Full-Stack Developer",
    Company: "Otech Engineering",
    Location: "Addis Ababa",
    Type: "Full-time",
    Duration: "Jul 2025 – Sep 2025",
    details: [
      "Updated company website using Django templates, HTML/CSS, and Bootstrap — improved page load speed by 60%",
      "Contributed to ERP system development on the procurement module using Python, Odoo, and PostgreSQL",
      "Successfully deployed the procurement module to production, enabling streamlined purchasing workflows",
      "Collaborated in Agile/Scrum environment with sprint planning, daily standups, and code reviews",
    ],
  },
  {
    Position: "Full-Stack Developer",
    Company: "Everlink Digital Technologies",
    Location: "Addis Ababa",
    Type: "Internship",
    Duration: "Jun 2023 – Sep 2024",
    details: [
      "Hello Balemuya Platform: Joined a struggling project and resolved all existing backend issues, stabilising the platform",
      "Built core features including workforce-employer matching algorithm, location sharing, and map integration",
      "Developed a comprehensive call centre support system — ticket creation, team assignment, and analytics reporting",
      "Furniture Raffle Platform: Sole backend developer for a complete raffle management system",
      "Implemented raffle algorithms, ticket purchasing/management, and user management",
      "Integrated SantimPay payment gateway for local bank payments",
      "Built full-featured admin portal and collaborated with frontend and mobile teams during integration",
    ],
  },
  {
    Position: "Full-Stack Developer",
    Company: "Freelance",
    Location: "Addis Ababa",
    Type: "Freelance",
    Duration: "Jan 2022 – Present",
    details: [
      "Developed 10+ web solutions for local businesses — churches, furniture stores, and photography studios",
      "Built full-featured order management systems with admin portals, order tracking, staff management, financial tracking, and custom reporting",
      "Created a custom photo delivery system for photography studios, eliminating third-party file-sharing services",
      "Automated manual order management processes, enabling remote business monitoring and reducing processing time",
      "Delivered solutions using MERN stack and PHP/MySQL based on client requirements",
    ],
  },
];

// Education
export const eduDetails = [
  {
    Position: "Bachelor in Software Engineering",
    Company: "Adama Science and Technology University (ASTU)",
    Location: "Adama",
    Type: "Full-time",
    Duration: "Jun 2021 – Jul 2025",
    details: [
      "GPA: 3.23 / 4.0",
      "Final Year Project: Served as Project Manager and Full-Stack Developer for a platform streamlining Ethiopia's public transport system",
      "Built backend using Express.js and developed three frontend applications: a Flutter mobile app for commuters, plus two web dashboards for service providers and transport authorities",
      "Project received A+ grade — highly praised by examiners for real-world impact and technical execution",
    ],
  },
];

// Tech Stack — from resume, using Simple Icons via react-icons/si
// icon: react-icons/si component | label: text fallback when no icon available
export const techStackDetails = [
  // Frontend
  { name: "HTML5",      icon: SiHtml5,      label: null, type: "frontend" },
  { name: "CSS",        icon: SiCss,        label: null, type: "frontend" },
  { name: "JavaScript", icon: SiJavascript, label: null, type: "frontend" },
  { name: "React",      icon: SiReact,      label: null, type: "frontend" },

  // Backend
  { name: "Node.js",    icon: SiNodedotjs,  label: null, type: "backend" },
  { name: "Express",    icon: SiExpress,    label: null, type: "backend" },
  { name: "PHP",        icon: SiPhp,        label: null, type: "backend" },
  { name: "Django",     icon: SiDjango,     label: null, type: "backend" },
  { name: "Python",     icon: SiPython,     label: null, type: "backend" },

  // Databases
  { name: "MySQL",      icon: SiMysql,      label: null, type: "databases" },
  { name: "MongoDB",    icon: SiMongodb,    label: null, type: "databases" },
  { name: "PostgreSQL", icon: SiPostgresql, label: null, type: "databases" },

  // Tools & Cloud
  { name: "Git",        icon: SiGit,        label: null, type: "tools" },
  { name: "Docker",     icon: SiDocker,     label: null, type: "tools" },
  { name: "GCP",        icon: SiGooglecloud,label: null, type: "tools" },
  { name: "AWS",        icon: null,         label: "AWS", type: "tools" },
  { name: "VS Code",    icon: SiVscodium,   label: null, type: "tools" },
];

// Project Details
export const projectDetails = [
  {
    title: "Berhane Kristos Church Website",
    image: churchImage1,
    category: "web",
    images: [churchImage1, churchImage2, churchImage3, churchImage4, churchImage5],
    description: `A multilingual website developed for Burayu Berhane Kristos Church using React and TailwindCSS. It showcases the church's history, services, schedules, and minister profiles. The site includes an interactive contact form using EmailJS and provides language support for Amharic, English, and Afaan Oromo.`,
    previewLink: "https://burayuberhanekristoschurch.com/",
    githubLink: "https://github.com/sentack",
    duration: "1 month",
    team: "Solo Project",
    role: "Full-Stack Developer",
    challenges: [
      "Implementing secure email functionality without exposing SMTP credentials",
      "Adding multilingual support manually for three languages",
      "Improving SEO optimisation for better visibility",
    ],
    features: [
      "Modern responsive design",
      "Dark and Light Mode with smooth transitions",
      "Multilingual support (Amharic, English, Afaan Oromo)",
      "Email contact form integration via EmailJS",
      "SEO optimisation and cross-platform compatibility",
    ],
    technologies: ["ReactJs", "TailwindCSS", "JavaScript"],
  },
  {
    title: "Salma Furniture Website",
    image: salmaImage1,
    category: "web",
    images: [salmaImage1],
    description: `A dynamic website built for Salma Furniture using HTML5, CSS3, PHP, and MySQL. It presents the furniture collection and offers an admin panel for managing products and orders. The site features secure authentication and emphasises user-friendly order processing.`,
    previewLink: "",
    githubLink: "https://github.com/sentack",
    duration: "2 months",
    team: "Solo Project",
    role: "Full-Stack Developer",
    challenges: [
      "Handling SQL injection prevention securely",
      "Implementing admin panel authentication",
      "Designing responsive themes without advanced CSS frameworks",
    ],
    features: [
      "Admin dashboard for product and order management",
      "Secure user authentication for admin access",
      "Streamlined order management system",
      "Responsive design and SEO optimisation",
    ],
    technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "DeepSeek-R1 AI Chat App",
    image: chatbotImage1,
    category: "web",
    images: [chatbotImage1, chatbotImage2, chatbotImage3],
    description: `A responsive AI chat application powered by the DeepSeek-R1 model. Built with React, Node.js, and TailwindCSS, it supports real-time chat, code syntax highlighting with copy support, and persistent chat history. The UI is clean, modern, and user-focused.`,
    previewLink: "https://eth-chatbot.onrender.com/",
    githubLink: "https://github.com/sentack/chatbot",
    duration: "2 weeks",
    team: "Solo Project",
    role: "Full-Stack Developer",
    challenges: [
      "Avoiding OpenAI API costs by integrating DeepSeek's free tier",
      "Managing request limits and performance within free API usage",
    ],
    features: [
      "Real-time chat with DeepSeek-R1 AI responses",
      "Automatic code block formatting and syntax highlighting",
      "Code copy button for convenience",
      "Persistent chat history with restore functionality",
      "Dark/Light mode and animated UI with sidebar navigation",
    ],
    technologies: ["ReactJs", "Node.js", "Express.js", "TailwindCSS", "JavaScript"],
  },
  {
    title: "Personal Portfolio",
    image: portfolioImage1,
    category: "web",
    images: [portfolioImage1, portfolioImage2, portfolioImage3, portfolioImage4, portfolioImage5, portfolioImage6],
    description: `A minimal personal portfolio site built with React and TailwindCSS. It showcases work experience, education background, and selected projects with a single-page scroll architecture, smooth animations, and a clean black-and-white aesthetic.`,
    previewLink: "https://sentack-portfolio.vercel.app/",
    githubLink: "https://github.com/sentack",
    duration: "3 months",
    team: "Solo Project",
    role: "Full-Stack Developer",
    challenges: [
      "Balancing minimal design with feature-rich content",
      "Creating smooth animations and transitions without overcomplication",
    ],
    features: [
      "Single-page scroll architecture with anchor navigation",
      "Pure black-and-white editorial design",
      "Filterable skills and projects sections",
      "Project modal with image gallery",
      "Responsive design and optimised performance",
    ],
    technologies: ["ReactJs", "TailwindCSS", "JavaScript", "Framer Motion"],
  },
];

// Contact Details
export const contactDetails = {
  email: "sentak16@outlook.com",
  phone: "+251910621532",
};
