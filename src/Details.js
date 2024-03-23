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
import django from "./assets/techstack/django.png";
import flask from "./assets/techstack/flask.png";
import node from "./assets/techstack/node.png";

// Mobile
import flutter from "./assets/techstack/flutter.png";
import dart from "./assets/techstack/dart.png";
import py from "./assets/techstack/py.png";

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
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";
import projectImage4 from "./assets/projects/project4.png";

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
  about1: `I'm a passionate Full-stack Developer specializing in web and mobile applications, dedicated to creating seamless and user-friendly experiences with a balance of front-end and back-end expertise.`,
  about2: `I take great pleasure in crafting innovative solutions and staying updated with the latest skills and technologies in the field. I have a knack for creating websites from the ground up, utilizing my strong analytical and problem-solving skills to adapt to new technologies quickly.`,
  about3: `Beyond my software engineering pursuits, I have over 5 years of experience in graphic design, video production, and photography. From designing logos to creating captivating web designs, motion graphics, and video editing, I excel at producing visually appealing content that effectively communicates messages while keeping up with current trends.`,  
  about4: `Continual learning is a top priority for me, and I take pride in mastering new software and techniques to stay ahead of the game. I'm motivated by pushing boundaries and making valuable contributions to the ever-evolving world of technology.`
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
    Duration: "Jun 2021 - Present",
  },
];

// Tech Stack and Tools
export const techStackDetails = [
  // Web
  { name: "HTML", image: html, type: "webdev" },
  { name: "CSS", image: css, type: "webdev" },
  { name: "Sass", image: sass, type: "webdev" },
  { name: "Tailwind CSS", image: tailwind, type: "webdev" },
  { name: "Bootstrap", image: bootstrap, type: "webdev" },
  { name: "JavaScript", image: js, type: "webdev" },
  { name: "React", image: react, type: "webdev" },
  { name: "PHP", image: php, type: "webdev" },
  { name: "NodeJS", image: node, type: "webdev" },
  { name: "Django", image: django, type: "webdev" },
  { name: "Flask", image: flask, type: "webdev" },

  // Mobile
  { name: "Flutter", image: flutter, type: "mobile" },
  { name: "Dart", image: dart, type: "mobile" },
  { name: "Python", image: py, type: "mobile" },

  // Databases
  { name: "MySql", image: mysql, type: "databases" },
  { name: "MongoDB", image: mongodb, type: "databases" },

  //Tools
  { name: "Android Studio", image: astudio, type: "tools" },
  { name: "Visual Studio Code", image: vscode, type: "tools" },
  { name: "npm", image: npm, type: "tools" },
  { name: "Git", image: git, type: "tools" },
  { name: "Figma", image: figma, type: "tools" },
  { name: "Vercel", image: vercel, type: "tools" },
  { name: "Netlify", image: netlify, type: "tools" },
];

// Project Details 
export const projectDetails = [
  {
    title: "Berhane Kristos Church",
    image: projectImage1,
    description: `This is a website I made for Burayu Berhane Kristos Church. It showcases the church's information, events, and services, utilizing modern design and interactive features.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "",
    githubLink: "https://github.com/sentack",
  },
  {
    title: "Salma Furniture",
    image: projectImage2,
    description: `Website for Salma Furniture. The website features their exquisite furniture collection and offers a user-friendly browsing experience for visitors.`,
    techstack: "HTML/CSS, JavaScript, PHP",
    previewLink: "",
    githubLink: "https://github.com/sentack",
  },
  {
    title: "Simple Chatbot",
    image: projectImage3,
    description: `This is my personal project I'm working on using NodeJS. It uses OpenAI gpt3.5 API and google translate API to understand different languages and reply in English. This is still in development!  `,
    techstack: "HTML/CSS, JavaScript, NodeJs, ExpressJs",
    previewLink: "https://eth-chatbot.onrender.com/",
    githubLink: "https://github.com/sentack",
  },
  {
    title: "Personal Portfolio",
    image: projectImage4,
    description: `This is my personal portfolio site I'm working on using React. It's a user-friendly website that showcases my Education Background, Work Experience and Some other Projects I made before. `,
    techstack: "HTML/CSS, JavaScript, ReactJs, NodeJs",
    previewLink: "https://sentack-portfolio.vercel.app/",
    githubLink: "https://github.com/sentack",
  },
];

// Contact Details
export const contactDetails = {
  email: "sentak16@outlook.com",
  phone: "+251910621532",
};
