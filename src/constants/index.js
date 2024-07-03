import {
  mobile,
  backend,
  creator,
  web,
  javascript,
 
  html,
  css,
  reactjs,
  
  tailwind,
  nodejs,
  
  
   
  
  threejs,
  github,
} from "../assets";

import anasoftImage from './anasoft.png';
import TWtechlogoImage from './TWtechlogo.png';
import ZephyrlogoImage from './Zephyrlogo.png';
import bootstrapImage from './bootstrap.png';
import canvaImage from './canva.jpeg';
import nextjsImage from './nextjs.png';
import PHPlogoImage from './PHPlogo.png';
import blogImage from './blog.png';
import opticalImage from './optical.png';
import interviewTakerImage from './interviewTaker.png';
import portfolioImage from './portfolio.png';
import  dpImage from './dp.jpeg';
import  nishImage from './nish.jpeg';
import  maniImage from './mani.jpeg';


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Designing",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Implementation",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "canva",
    icon: canvaImage, 
  },
  {
    name: "nextjs",
    icon: nextjsImage, 
  },
  {
    name: "PHPlogo",
    icon: PHPlogoImage, 
  },
  {
    name: "Bootstrap",
    icon: bootstrapImage, 
  },
  
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "anasoft",
    img: anasoftImage,
    iconBg: "#383E56",
    date: "March 2022 - Aug 2023",
    points: [
      "Developing and maintaining web and mobile applications using React.js, React Native, and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-platform compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "ReactJS Developer",
    company_name: "12tech",
    img: TWtechlogoImage,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - March 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Zephyr",
    img: ZephyrlogoImage,
    iconBg: "#383E56",
    date: "Apr 2024 - Aug 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but NV proved me wrong.",
    name: "Durga Prasad",
    designation: "Full Stack Developer",
    company: "Anasoft",
    image: dpImage,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like NV does.",
    name: "Manikanta",
    designation: "Front End Developer",
    company: "Zephyr Technologies",
    image: maniImage,
  },
  {
    testimonial:
    "NV has imparted invaluable knowledge and expertise to our team. We are truly grateful.",
    name: "Nishmitha",
    designation: "web Designer",
    company: "Zephyr Technologiess",
    image: nishImage,
  },
];

const projects = [
  {
    name: "AI Interview Taker",
    description:
      "AI Interview Taker is a web platform using GEMIN I AI to simulate interview scenarios. Built with React.js and Next.js, it offers interactive practice for job interviews with AI-generated responses.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "gemini-AI",
          color: "purple-text-gradient",
        },
        {
          name: "postgresql",
          color: "yellow-text-gradient",
        },
        {
          name: "vercel",
          color: "teal-text-gradient",
        },
    ],
    image: interviewTakerImage,
    source_code_link: "https://github.com/Nithishdpn/AI-Interview-Mocker",
  },
  {
    name: "3D Portfolio",
    description:
   "A dynamic web app that presents 3D models interactively, leveraging React.js for frontend functionality, Three.js for immersive 3D graphics, Tailwind CSS for responsive design, and EmailJS for seamless email integration.",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "three js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "purple-text-gradient",
      },
      {
        name: "email js",
        color: "yellow-text-gradient",
      },
      {
        name: "vite",
        color: "teal-text-gradient",
      },
    ],
    image: portfolioImage,
    source_code_link: "https://github.com/",
  },
  {
    name: "Optical shop manag. sys.",
    description:
     "An efficient system for optical shops to manage inventory, sales, customer data, and generate reports. Built with HTML, CSS, JavaScript for interactivity, PHP for server-side processing, and MySQL for database management.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "php",
          color: "purple-text-gradient",
        },
        {
          name: "mysql",
          color: "yellow-text-gradient",
        },
    ],
    image: opticalImage,
    source_code_link: "https://github.com/Nithishdpn/optical",
  },
  {
    name: "Blog Site",
    description:
      "A dynamic web application allowing users to create, read, update, and delete blog posts. Built with HTML, CSS, and JavaScript for frontend interaction, PHP for server-side scripting, and MySQL for database management.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "purple-text-gradient",
      },
      {
        name: "mysql",
        color: "yellow-text-gradient",
      },
    ],
    image: blogImage,
    source_code_link: "https://github.com/Nithishdpn/lagori-web",
  },
];

export { services, technologies, experiences, testimonials, projects };
