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
import resumon from '../assets/Images/project1.png';
import grocery from '../assets/Images/project2.png';
import trimlinker from '../assets/Images/project3.png';
import ecomAnalytics from '../assets/Images/project4.png';
import tailorMngr from '../assets/Images/project5.png';
import { MonitorCloud, School, GraduationCap } from 'lucide-react';


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

export const projects = [
  {
    id: 1,
    title: "Resumon",
    slug: "resumon",
    category: "MERN SaaS",
    tools: [, "React", "Node.js", "MongoDB"],
    overview: "Resumon is a MERN-stack SaaS platform designed to make resume building both professional and effortless. Users can register easily, input their personal and work details, and immediately preview their resume in real-time. By providing customizable templates, the platform ensures that creating an ATS-friendly resume is secure, efficient, and streamlined from start to finish. ",
    features: ["Manage personal and work details easily", "Live preview of resume in real-time", "Multiple customizable resume templates", "ATS-friendly resume generation", "Export resumes as PDF"],
    implementation: "The implementation focused on providing a seamless flow: MongoDB manages data, Node.js/Express handles authentication and CRUD operations, React delivers dynamic previews, and Tailwind CSS ensures a responsive interface, resulting in a robust and user-friendly platform. ",
    image: resumon
  },
  {
    id: 2,
    category: "UI/UX",
    slug: "grocerystoreUi",
    title: "GroceryStoreUI",
    tools: ["Figma", "User Research", "Prototyping"],
    overview: "The Grocery Store App is a design-focused platform that organizes products, categories, and the shopping cart clearly. Visual hierarchy and spacing guide users through key actions, and interactive elements support smooth navigation. The interface ensures information is accessible and consistently presented.",
    features: ["Browse products by category","Search and add items to cart","Dynamic cart updates and feedback","Smooth interactive navigation","Consistent visual hierarchy"],
    implementation: "The design process began by analyzing user behavior and mapping browsing and cart interactions with wireframes. Prototypes refined layouts, spacing, and interactive feedback, while testing focused on usability and clarity. The final interface is structured, consistent, and supports efficient navigation across devices. ",
    image: grocery
  },
  {
    id: 3,
    category: "Next.js App",
    slug: "trimlinker",
    title: "TrimLinker",
    tools: ["Next.js", "CSS Modules", "Fetch API"],
    overview: "TrimLinker is a modern link shortening platform built with Next.js, designed to simplify URL management by converting long links into short, shareable ones, providing a clean and efficient experience for users. ",
    features: ["Instantly shorten long URLs", "Copy & share shortened links", "Validate URLs automatically"],
    implementation: "The implementation focused on providing a seamless process from URL input to shortened output, validating links, sending them to an external API, and updating the interface to display the compact URL with confirmation, while maintaining a responsive and reliable user experience.",
    image: trimlinker
  },
  {
    id: 4,
    category: "React App",
    slug: "ecommerce-analytics",
    title: "Ecommerce Analytics",
    tools: ["React", "Tailwind", "Chart.js"],
    overview: "The E-commerce Analytics Dashboard is a professional business intelligence solution created to help e-commerce businesses understand their performance clearly, and it focuses on turning complex data into simple, structured insights through visual analytics and organized layouts, which reflects strong skills in designing analytical interfaces that support informed and confident business decisions. ",
    features: ["Analyze customer segments with charts", "View detailed sortable tables", "Filter data by time and segment", "View detailed data in sortable tables"],
    implementation: "Implementation focused on creating a smooth analytical experience with structured layouts, interactive controls, and responsive design. Charts, tables, and filters clearly present data, while usability, consistency, and performance ensure a reliable dashboard.",
    image: ecomAnalytics
  },
  {
    id: 5,
    category: ".NET Desktop",
    slug: "tailormanager",
    title: "Tailor Manager",
    tools: [".NET", "C#", "WinForms", "SQL"],
    overview: "Tailor Manager is a digital platform for tailors to streamline daily operations. It lets tailors manage customer profiles and measurements, track suit orders from start to delivery, generate receipts, and update order details. An intuitive dashboard shows active orders and real-time status, while interactive controls simplify navigation.",
    features: ["Manage customer profiles","Track suit orders end-to-end","Generate receipts and update orders","Dashboard with real-time status","Interactive navigation controls"],
    implementation: "The implementation focused on a seamless workflow, with secure login for authorized access, dynamic forms with validation, status indicators and dashboards showing order progress, real-time updates and notifications, and a structured layout connecting customer data, orders, and billing for smooth and efficient operations.",
    image: tailorMngr
  },
  {
    id: 6,
    category: "UI/UX",
    slug: "resumonUi",
    title: "ResumonUI",
    tools: ["Figma", "User Research", "Prototyping"],
    overview: "Resumon is a design-focused SaaS platform that helps users create professional resumes easily. The interface is clear and organized, guiding users to focus on their content while keeping layouts consistent. Templates are arranged to look good and stay readable, making every resume both attractive and functional.",
    features: [ "Preview resumes in real-time", "Customize sections, and fonts", "Templates adapt automatically to content", "Clear and organized interface","Smooth and intuitive workflow"],
    implementation: "The project started with research on common challenges in resume creation and mapping the workflow with wireframes. Prototypes refined the visual style, typography, and spacing, while iterative feedback helped polish the templates so that the platform is clear, consistent, and easy to use across devices.",
    image: resumon
  }
];