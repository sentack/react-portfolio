// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";

// Profile Image
import profile from "./assets/profile.jpg";



// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import cplus from "./assets/techstack/c++.png";
import figma from "./assets/techstack/figma.png";
import java from "./assets/techstack/java.png";
import py from "./assets/techstack/py.png";
import php from "./assets/techstack/php.png";

// Project Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";

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
  about1: `Hello! I'm Sena Takele, a passionate and organized software engineering student. Web development, mobile app development, and creative problem-solving are my true passions.`,
  about2: `I take great pleasure in crafting innovative solutions and staying updated with the latest skills and technologies in the field. I have a knack for creating websites from the ground up, utilizing my strong analytical and problem-solving skills to adapt to new technologies quickly.`,
  about3: `Beyond my software engineering pursuits, I have over 5 years of experience in graphic design, video production, and photography. From designing logos to creating captivating web designs, motion graphics, and video editing, I excel at producing visually appealing content that effectively communicates messages while keeping up with current trends.`,  
  about4: `Continual learning is a top priority for me, and I take pride in mastering new software and techniques to stay ahead of the game. I'm motivated by pushing boundaries and making valuable contributions to the ever-evolving world of technology.`};

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
  { name: "HTML", image: html, type: "frontend" },
  { name: "CSS", image: css, type: "frontend" },
  { name: "JavaScript", image: js, type: "frontend" },
  { name: "React", image: react, type: "frontend" },
  { name: "Sass", image: sass, type: "frontend" },
  { name: "Tailwind CSS", image: tailwind, type: "frontend" },
  { name: "Bootstrap", image: bootstrap, type: "frontend" },
  { name: "Visual Studio Code", image: vscode, type: "tools" },
  { name: "C++", image: cplus, type: "others" },
  { name: "npm", image: npm, type: "tools" },
  { name: "Git", image: git, type: "tools" },
  { name: "GitHub", image: github, type: "tools" },
  { name: "Figma", image: figma, type: "tools" },
  { name: "PHP", image: php, type: "backend" },
  { name: "Python", image: py, type: "backend" },
  { name: "Java", image: java, type: "others" }
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
];

// Contact Details
export const contactDetails = {
  email: "sentak16@outlook.com",
  phone: "+251910621532",
};
