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