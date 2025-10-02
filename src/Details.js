// Logo images
import logogradient from "./assets/logo.png";
import logo from "./assets/logo.png";

// Profile Image
import profile from "./assets/profile.jpg";

// Tech stack images
// Web
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import php from "./assets/techstack/php.png";
// import django from "./assets/techstack/django.png";
// import flask from "./assets/techstack/flask.png";
import node from "./assets/techstack/node.png";

// Mobile
import flutter from "./assets/techstack/flutter.png";
import dart from "./assets/techstack/dart.png";
// import py from "./assets/techstack/py.png";

// Databases
import mysql from "./assets/techstack/mysql.png";
import mongodb from "./assets/techstack/mongodb.png";

// Tools
import vscode from "./assets/techstack/vscode.png";
import git from "./assets/techstack/git.png";
import figma from "./assets/techstack/figma.png";
import astudio from "./assets/techstack/astudio.png";
import netlify from "./assets/techstack/netlify.png";
import vercel from "./assets/techstack/vercel.png";
import npm from "./assets/techstack/npm.png";

// Project Images

// Project 1 Images
import churchImage1 from "./assets/projects/church/hero.png";
import churchImage2 from "./assets/projects/church/about_dark.png";
import churchImage3 from "./assets/projects/church/about_light.png";
import churchImage4 from "./assets/projects/church/contact_dark.png";
import churchImage5 from "./assets/projects/church/contact_light.png";

// Project 2 Images
import salmaImage1 from "./assets/projects/salma/hero.png";

// Project 3 Images
import chatbotImage1 from "./assets/projects/chatbot/dark_mode.png";
import chatbotImage2 from "./assets/projects/chatbot/light_mode.png";
import chatbotImage3 from "./assets/projects/chatbot/code_copy_feature.png";

// Project 4 Images
import portfolioImage1 from "./assets/projects/portfolio/homepage.png";
import portfolioImage2 from "./assets/projects/portfolio/about.png";
import portfolioImage3 from "./assets/projects/portfolio/contact.png";
import portfolioImage4 from "./assets/projects/portfolio/projects.png";
import portfolioImage6 from "./assets/projects/portfolio/project_decription.png";
import portfolioImage5 from "./assets/projects/portfolio/skills.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Sena Takele",
  tagline: "But, you can call me Sentack :)",
  img: profile,
  about1: `Full-stack engineer with 3 years of experience in the MERN stack, specializing in building scalable and user-friendly web applications. Recently earned a Software Engineering degree, combining academic knowledge with real-world expertise. Skilled in front-end and back-end development, problem-solving, and delivering high-quality software solutions through collaboration and innovation.`
};

// Social Media
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/sentack/",
  github: "https://www.github.com/sentack",
  twitter: "https://twitter.com/sentak01",
  instagram: "https://www.instagram.com/sentak01/",
};

// Work Experience
export const workDetails = [{
    Position: "Photographer and Video Editor",
    Company: `Bini Pictures`,
    Location: "Addis Ababa",
    Type: "Part-time",
    Duration: "2016 - 2021",
  },
  {
    Position: "Video Editor",
    Company: `Sami Pictures`,
    Location: "Addis Ababa",
    Type: "Part-time",
    Duration: "2017 - 2021",
  },
  {
    Position: "Network Installation and Configuration",
    Company: `Commercial Bank of Ethiopia`,
    Location: "Addis Ababa",
    Type: "Internship",
    Duration: "Jun 2023 - Sep 2023",
  },
  {
    Position: "Full Stack Web and Mobile Developer",
    Company: `Everlink Digital Technologies`,
    Location: "Mexico, Addis Ababa",
    Type: "Internship",
    Duration: "Jun 2024 - Sep 2024",
  },
  {
    Position: "Full Stack Web Developer",
    Company: `Self-Employed`,
    Location: "Addis Ababa",
    Type: "Fulltime",
    Duration: "2022 - Present",
  },
];

// Enter your Education Details here
export const eduDetails = [{
    Position: "High School Diploma",
    Company: "Medhanealem Preparatory School",
    Location: "Addis Ababa",
    Type: "Full Time",
    Duration: "Sep 2019 - Apr 2021",
  },
  {
    Position: "Bachelor in Software Engineering",
    Company: `Adama Science and Technology University (ASTU)`,
    Location: "Adama",
    Type: "Full Time",
    Duration: "Jun 2021 - Jun 2025",
  },
];

// Tech Stack and Tools
export const techStackDetails = [
  // Web
  {
    name: "HTML",
    image: html,
    type: "webdev"
  },
  {
    name: "CSS",
    image: css,
    type: "webdev"
  },
  {
    name: "Sass",
    image: sass,
    type: "webdev"
  },
  {
    name: "Tailwind",
    image: tailwind,
    type: "webdev"
  },
  {
    name: "Bootstrap",
    image: bootstrap,
    type: "webdev"
  },
  {
    name: "JavaScript",
    image: js,
    type: "webdev"
  },
  {
    name: "React",
    image: react,
    type: "webdev"
  },
  {
    name: "PHP",
    image: php,
    type: "webdev"
  },
  {
    name: "NodeJS",
    image: node,
    type: "webdev"
  },
  // { name: "Django", image: django, type: "webdev" },
  // { name: "Flask", image: flask, type: "webdev" },

  // Mobile
  {
    name: "Flutter",
    image: flutter,
    type: "mobile"
  },
  {
    name: "Dart",
    image: dart,
    type: "mobile"
  },
  // { name: "Python", image: py, type: "mobile" },

  // Databases
  {
    name: "MySql",
    image: mysql,
    type: "databases"
  },
  {
    name: "MongoDB",
    image: mongodb,
    type: "databases"
  },

  //Tools
  {
    name: "A. Studio",
    image: astudio,
    type: "tools"
  },
  {
    name: "VSCode",
    image: vscode,
    type: "tools"
  },
  {
    name: "npm",
    image: npm,
    type: "tools"
  },
  {
    name: "Git",
    image: git,
    type: "tools"
  },
  {
    name: "Figma",
    image: figma,
    type: "tools"
  },
  {
    name: "Vercel",
    image: vercel,
    type: "tools"
  },
  {
    name: "Netlify",
    image: netlify,
    type: "tools"
  },
];

// Project Details
export const projectDetails = [{
    title: "Berhane Kristos Church Website",
    image: churchImage1,
    category: "web",
    images: [
      churchImage1,
      churchImage2,
      churchImage3,
      churchImage4,
      churchImage5,
    ],
    description: `A multilingual website developed for Burayu Berhane Kristos Church using React and TailwindCSS. It showcases the church’s history, services, schedules, and minister profiles. The site includes an interactive contact form using EmailJS and provides language support for Amharic, English, and Afaan Oromo.`,
    previewLink: "https://burayuberhanekristoschurch.com/",
    githubLink: "https://github.com/sentack",
    duration: "1 month",
    team: "Solo Project",
    role: "Full-stack Developer",
    challenges: [
      "Implementing secure email functionality without exposing SMTP credentials",
      "Adding multilingual support manually for three languages",
      "Improving SEO optimization for better visibility",
    ],
    features: [
      "Modern responsive design",
      "Dark and Light Mode with smooth transitions",
      "Interactive sections with beautiful UI",
      "Seamless navigation between sections",
      "Multilingual support (Amharic, English, Afaan Oromo)",
      "Email contact form integration using EmailJS",
      "Cross-platform compatibility",
      "SEO optimization",
      "Accessibility features",
    ],
    technologies: ["ReactJs", "TailwindCSS", "JavaScript"],
  },
  {
    title: "Salma Furniture Website",
    image: salmaImage1,
    category: "web",
    images: [salmaImage1],
    description: `A dynamic website built for Salma Furniture using HTML5, CSS3, PHP, and MySQL. It presents the furniture collection and offers an admin panel for managing products and orders. The site features secure authentication and emphasizes user-friendly order processing.`,
    previewLink: "",
    githubLink: "https://github.com/sentack",
    duration: "2 months",
    team: "Solo Project",
    role: "Full-stack Developer",
    challenges: [
      "Handling SQL injection prevention securely",
      "Implementing admin panel authentication",
      "Designing themes without using advanced CSS frameworks",
    ],
    features: [
      "Modern responsive design",
      "Admin Dashboard for product/order management",
      "Secure user authentication for admin access",
      "Streamlined product and order management system",
      "Cross-platform compatibility",
      "SEO optimization",
      "Accessibility features",
    ],
    technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "DeepSeek-R1 AI Chat App",
    image: chatbotImage1,
    category: "web",
    images: [chatbotImage1, chatbotImage2, chatbotImage3],
    description: `A responsive AI chat application powered by the DeepSeek-R1 model. Built with React, Node, and TailwindCSS, it supports real-time chat, code syntax highlighting with copy support, and persistent chat history. The UI is clean, modern, and user-focused.`,
    previewLink: "https://eth-chatbot.onrender.com/",
    githubLink: "https://github.com/sentack/chatbot",
    duration: "2 weeks",
    team: "Solo Project",
    role: "Full-stack Developer",
    challenges: [
      "Avoiding OpenAI API costs by using DeepSeek's free tier",
      "Managing request limits and performance within free API usage",
    ],
    features: [
      "Dark/Light mode with smooth transitions",
      "Real-time chat with DeepSeek-R1 responses",
      "Automatic code block formatting and syntax highlighting",
      "Code copy button for convenience",
      "Persistent chat history with restore functionality",
      "Responsive layout for all devices",
      "Animated UI with sidebar navigation",
      "About section explaining the model",
      "Clean and modern interface using TailwindCSS and Framer Motion",
    ],
    technologies: [
      "ReactJs",
      "TailwindCSS",
      "JavaScript",
      "NodeJs",
      "ExpressJs",
    ],
  },
  {
    title: "Personal Portfolio",
    image: portfolioImage1,
    category: "web",
    images: [
      portfolioImage1,
      portfolioImage2,
      portfolioImage3,
      portfolioImage4,
      portfolioImage5,
      portfolioImage6,
    ],
    description: `A minimal and elegant personal portfolio site built with React and TailwindCSS. It showcases education background, work experience, and previous projects. The design focuses on smooth transitions, animations, and a clean layout for a pleasant browsing experience.`,
    previewLink: "https://sentack-portfolio.vercel.app/",
    githubLink: "https://github.com/sentack",
    duration: "3 months",
    team: "Solo Project",
    role: "Full-stack Developer",
    challenges: [
      "Balancing minimal design with feature-rich content",
      "Creating smooth transitions and animations without overcomplication",
    ],
    features: [
      "Modern responsive design",
      "Interactive user interface",
      "Seamless page transitions and animations",
      "Optimized performance",
      "Cross-platform compatibility",
      "SEO optimization",
      "Accessibility features",
    ],
    technologies: ["ReactJs", "TailwindCSS", "JavaScript", "ReactJs", "NodeJs"],
  },
];

// Contact Details
export const contactDetails = {
  email: "sentak16@outlook.com",
  phone: "+251910621532",
};