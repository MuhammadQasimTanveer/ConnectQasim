import figma from '../assets/Images/figma.png';
import netlify from '../assets/Images/netlify.png';
import nodejs from '../assets/Images/nodejs.png';
import canva from '../assets/Images/canva.png';
import react from '../assets/Images/react.png';
import nextjs from '../assets/Images/next-js.png';
import javascript from '../assets/Images/javascript.png';
import tailwind from '../assets/Images/tailwind.png';
import mongodb from '../assets/Images/mongodb.png';
import sql from '../assets/Images/sql.png';
import firebase from '../assets/Images/firebase.png';
import vercel from '../assets/Images/vercel.png';
import git from '../assets/Images/git.png';
import github from '../assets/Images/github.png';
import dotnet from '../assets/Images/dotnet.png';
import { MonitorCloud, School, GraduationCap } from 'lucide-react';

export const projects = [
  {
    id: 1,
    title: "Resumon",
    slug: "resumon",
    category: "MERN SaaS",
    tools: [, "React", "Node.js", "MongoDB"],
    description: "Resumon is a MERN-stack SaaS platform designed to make resume building both professional and effortless. Users can register easily, input their personal and work details, and immediately preview their resume in real-time. By providing customizable templates, the platform ensures that creating an ATS-friendly resume is secure, efficient, and streamlined from start to finish. ",
    about:"Users complete structured forms with live previews, select from multiple templates, customize layouts and styles, and export resumes as PDFs, while all data is securely managed in the backend.",
    implementation: "The implementation focused on providing a seamless flow: MongoDB manages data, Node.js/Express handles authentication and CRUD operations, React delivers dynamic previews, and Tailwind CSS ensures a responsive interface, resulting in a robust and user-friendly platform. ",
    image: ""
  },
  {
    id: 2,
    category: "Next.js App",
    slug: "trimlinker",
    title: "TrimLinker",
    tools: ["Next.js", "CSS Modules", "Fetch API"],
    description: "TrimLinker is a modern link shortening platform built with Next.js, designed to simplify URL management by converting long links into short, shareable ones, providing a clean and efficient experience for users. ",
    about: "The platform allows users to input any URL, generate a shortened version instantly, and copy it for sharing, while validating inputs to ensure all links are correct and functional.",
    implementation:"The implementation focused on providing a seamless process from URL input to shortened output, validating links, sending them to an external API, and updating the interface to display the compact URL with confirmation, while maintaining a responsive and reliable user experience.",
    image: ""
  },
  {
    id: 3,
    category: "UI/UX",
    slug: "grocerystoreUI",
    title: "GroceryStore",
    tools: ["Figma", "User Research", "Prototyping"],
    description: "The Grocery Store App is a design-focused platform that organizes products, categories, and the shopping cart clearly. Visual hierarchy and spacing guide users through key actions, and interactive elements support smooth navigation. The interface ensures information is accessible and consistently presented.",
    about: "Users can browse categories, search products, and add items to the cart, while quantities and selections update dynamically. The cart icon, product counts, and category menu provide feedback, and keyboard navigation allows smooth interaction. These features focus on usability, clarity, and responsiveness.",
    implementation:"The design process began by analyzing user behavior and mapping browsing and cart interactions with wireframes. Prototypes refined layouts, spacing, and interactive feedback, while testing focused on usability and clarity. The final interface is structured, consistent, and supports efficient navigation across devices. ",
    image: ""
  },
  {
    id: 4,
    category: "React App",
    slug: "ecommerce-analytics",
    title: "Ecommerce Analytics",
    tools: ["React", "Tailwind", "Chart.js"],
    description: "The E-commerce Analytics Dashboard is a professional business intelligence solution created to help e-commerce businesses understand their performance clearly, and it focuses on turning complex data into simple, structured insights through visual analytics and organized layouts, which reflects strong skills in designing analytical interfaces that support informed and confident business decisions. ",
    about: "The dashboard presents customer behavior, sales performance, and key business metrics using interactive charts and detailed tables, allowing users to switch between views, apply filters, and explore trends over time with ease, while the interface remains clear, responsive, and easy to use across all screen sizes.",
    implementation:"The implementation focused on creating a smooth analytical experience through structured layouts, interactive controls, and responsive design, where visual components clearly represent data using charts, tables, and dynamic filters, and careful attention to usability, consistency, and performance ensures a reliable and professional dashboard experience.",
    image: ""
  },
  {
    id: 5,
    category: "UI/UX",
    slug: "resumonui",
    title: "ResumonUI",
    tools: ["Figma", "User Research", "Prototyping"],
    description: "Resumon is a design-focused SaaS platform that helps users create professional resumes easily. The interface is clear and organized, guiding users to focus on their content while keeping layouts consistent. Templates are arranged to look good and stay readable, making every resume both attractive and functional.",
    about: "Users can enter their information and immediately see how it looks in the resume. The platform allows adjustments to sections, fonts, and spacing, and templates automatically adapt to the content, making the process smooth and easy without any confusion.",
    implementation:"The project started with research on common challenges in resume creation and mapping the workflow with wireframes. Prototypes refined the visual style, typography, and spacing, while iterative feedback helped polish the templates so that the platform is clear, consistent, and easy to use across devices.",
    image: ""
  },
  {
    id: 6,
    category: ".NET Desktop",
    slug: "tailorMS",
    title: "Tailor Management System",
    tools: [".NET", "C#", "WinForms", "SQL"],
    description: "The Tailor Management System is a modern solution designed to help tailors manage their daily work efficiently, replacing paper-based records with digital tools, allowing users to handle customer information, track suit orders, and manage billing in one place, while improving organization, reducing mistakes, and providing a clear overview of pending, ready, and delivered orders to help tailors plan and deliver timely results.",
    about: "The system allows tailors to add customers with measurements, view and search records, update information quickly, and track orders from creation to delivery, supporting receipt generation, suit detail updates, and printing final bills, while the dashboard shows real-time counts, notifications provide feedback, and interactive controls make navigation simple, ensuring accuracy, reducing repetitive tasks, and providing a reliable way to manage the business.",
    implementation:"The implementation focused on a seamless workflow, with secure login for authorized access, dynamic forms with validation to prevent errors, status indicators and dashboards showing order progress, real-time updates and notifications keeping users informed, and a structured layout connecting customer data, orders, and billing to ensure smooth, efficient, and clear daily operations.",
    image: ""
  }
];


export const experience = [
  {
    icon: MonitorCloud,
    period: "July 2025 - Aug 2025",
    company: "Alpha Network",
    role: "Web Developer Intern",
    info: "Contributed to React-based projects by developing functional components, enhancing UI/UX designs, and collaborating with the team to deliver efficient and user-friendly applications."
  }
];

export const education = [
    {
        icon: School,
        period: "2021 - 2023",
        institute: "PGC Ayub Park Campus, Rawaplindi",
        degree: "Intermediate in CS",
        info: "Developed a strong foundation in computer science and mathematics, helping me understand core programming concepts and logical thinking."
    },
    {
        icon: GraduationCap,
        period: "2023 - 2027",
        institute: "Riphah International University",
        degree: "Bachelors of Science in CS",
        info: "Studying Computer Science, applying modern software engineering principles to build interactive MERN Stack applications and exploring machine learning."
    }
];

export const deployment = [
  { name: "Git", icon: git },
  { name: "Github", icon: github },
  { name: "Vercel", icon: vercel },
  { name: "Netlify", icon: netlify },
  { name: "Firebase", icon: firebase }
];

export const designing = [
  { name: "Canva", icon: canva },
  { name: "Figma", icon: figma }
];

export const frontend = [
  { name: "Javascript", icon: javascript },
  { name: "Tailwind", icon: tailwind },
  { name: "React", icon: react },
  { name: "Nextjs", icon: nextjs }
];

export const coreDev = [
  { name: "NodeJs", icon: nodejs },
  { name: "SQL", icon: sql },
  { name: "MongoDB", icon: mongodb },
  { name: ".Net", icon: dotnet }
];