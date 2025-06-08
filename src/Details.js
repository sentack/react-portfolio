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
  about1: `I'm a Full-stack Developer focused on building smooth, user-friendly web and mobile apps, with solid experience in both front-end and back-end development.`,
  about2: `I enjoy solving problems and creating smart, practical solutions. I’m quick to learn new technologies and skilled at building websites from the ground up.`,
  about3: `Alongside software development, I have over 7 years of experience in graphic design, video production, and photography—specializing in logos, web design, motion graphics, and video editing.`,
  about4: `I'm committed to continuous learning and always exploring new tools and techniques to stay ahead in tech and design.`,
};

// Social Media
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/sentack/",
  github: "https://www.github.com/sentack",
  twitter: "https://twitter.com/sentak01",
  instagram: "https://www.instagram.com/sentak01/",
};

// Work Experience
export const workDetails = [
  {
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
export const eduDetails = [
  {
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
  { name: "HTML", image: html, type: "webdev" },
  { name: "CSS", image: css, type: "webdev" },
  { name: "Sass", image: sass, type: "webdev" },
  { name: "Tailwind", image: tailwind, type: "webdev" },
  { name: "Bootstrap", image: bootstrap, type: "webdev" },
  { name: "JavaScript", image: js, type: "webdev" },
  { name: "React", image: react, type: "webdev" },
  { name: "PHP", image: php, type: "webdev" },
  { name: "NodeJS", image: node, type: "webdev" },
  // { name: "Django", image: django, type: "webdev" },
  // { name: "Flask", image: flask, type: "webdev" },

  // Mobile
  { name: "Flutter", image: flutter, type: "mobile" },
  { name: "Dart", image: dart, type: "mobile" },
  // { name: "Python", image: py, type: "mobile" },

  // Databases
  { name: "MySql", image: mysql, type: "databases" },
  { name: "MongoDB", image: mongodb, type: "databases" },

  //Tools
  { name: "A. Studio", image: astudio, type: "tools" },
  { name: "VSCode", image: vscode, type: "tools" },
  { name: "npm", image: npm, type: "tools" },
  { name: "Git", image: git, type: "tools" },
  { name: "Figma", image: figma, type: "tools" },
  { name: "Vercel", image: vercel, type: "tools" },
  { name: "Netlify", image: netlify, type: "tools" },
];

// Project Details
export const projectDetails = [
  {
    title: "Berhane Kristos Church Website",
    image: churchImage1,
    images: [
      churchImage1,
      churchImage2,
      churchImage3,
      churchImage4,
      churchImage5,
    ],
    description: `This is a website I made for Burayu Berhane Kristos Church. It showcases the church's information, events, and services, utilizing modern design and interactive features. The website supports three languages: Amharic, English, and Afaan Oromo.`,
    previewLink: "https://burayuberhanekristoschurch.com/",
    githubLink: "https://github.com/sentack",
    duration: "1 month",
    team: "Solo Project",
    role: "Full-stack Developer",
    challenges: [],
    features: [
      "Modern responsive design",
      "Interactive user interface",
      "Multiple Language Support",
      "Dark and Light Mode",
      "Optimized performance",
      "Cross-platform compatibility",
      "SEO optimization",
      "Accessibility features",
    ],
    technologies: ["ReactJs", "TailwindCSS", "JavaScript"],
  },
  {
    title: "Salma Furniture Website",
    image: salmaImage1,
    images: [salmaImage1],
    description: `Website for Salma Furniture. The website features their exquisite furniture collection and offers a user-friendly browsing experience for visitors.`,
    previewLink: "",
    githubLink: "https://github.com/sentack",
    duration: "2 months",
    team: "Solo Project",
    role: "Full-stack Developer",
    challenges: [],
    features: [
      "Modern responsive design",
      "Admin Dashboard",
      "Product Management",
      "Order Management",
      "User Authentication",
      "Cross-platform compatibility",
      "SEO optimization",
      "Accessibility features",
    ],
    technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "DeepSeek-R1 AI Chat App",
    image: chatbotImage1,
    images: [chatbotImage1, chatbotImage2, chatbotImage3],
    description: `I built a modern, responsive AI chat app using the DeepSeek-R1 model. It features real-time conversations, dark/light mode, code highlighting with copy support, and persistent chat history—all in a sleek, intuitive UI.`,
    previewLink: "https://eth-chatbot.onrender.com/",
    githubLink: "https://github.com/sentack/chatbot",
    duration: "2 weeks",
    team: "Solo Project",
    role: "Full-stack Developer",
    challenges: [],
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
    images: [
      portfolioImage1,
      portfolioImage2,
      portfolioImage3,
      portfolioImage4,
      portfolioImage5,
      portfolioImage6,
    ],
    description: `This is my personal portfolio site I'm working on using React. It's a user-friendly website that showcases my Education Background, Work Experience and Some other Projects I made before.`,

    previewLink: "https://sentack-portfolio.vercel.app/",
    githubLink: "https://github.com/sentack",
    duration: "3 months",
    team: "Solo Project",
    role: "Full-stack Developer",
    challenges: [],
    features: [
      "Modern responsive design",
      "Interactive user interface",
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
