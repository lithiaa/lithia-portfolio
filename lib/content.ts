import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaDocker,
  FaGithub,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { RiRobot2Line, RiSupabaseFill } from "react-icons/ri";
import {
  SiApachejmeter,
  SiBootstrap,
  SiCypress,
  SiDart,
  SiDjango,
  SiFlutter,
  SiJavascript,
  SiLangchain,
  SiLaravel,
  SiMysql,
  SiN8N,
  SiNextdotjs,
  SiNestjs,
  SiPostman,
  SiSelenium,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TfiWorld } from "react-icons/tfi";
import type {
  Award,
  Certificate,
  EducationEntry,
  ExperienceEntry,
  Project,
  TechItem,
} from "./types";

export const techStack: TechItem[] = [
  { name: "PHP", icon: FaPhp, color: "text-[#777bb4]", categories: ["backend"] },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#d6b600]", categories: ["backend"] },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178c6]", categories: ["backend"] },
  { name: "Python", icon: FaPython, color: "text-[#3776ab]", categories: ["backend", "ai-automation"] },
  { name: "Laravel", icon: SiLaravel, color: "text-[#ff2d20]", categories: ["backend"] },
  { name: "Next.js", icon: SiNextdotjs, color: "text-[#171717]", categories: ["backend"] },
  { name: "React", icon: FaReact, color: "text-[#149eca]", categories: ["backend"] },
  { name: "Django", icon: SiDjango, color: "text-[#092e20]", categories: ["backend"] },
  { name: "MySQL", icon: SiMysql, color: "text-[#4479a1]", categories: ["backend"] },
  { name: "PostgreSQL", icon: BiLogoPostgresql, color: "text-[#4169e1]", categories: ["backend"] },
  { name: "Docker", icon: FaDocker, color: "text-[#2496ed]", categories: ["backend", "ai-automation"] },
  { name: "n8n", icon: SiN8N, color: "text-[#ea4b71]", categories: ["ai-automation"] },
  { name: "LangChain", icon: SiLangchain, color: "text-[#1c3c3c]", categories: ["ai-automation"] },
  { name: "AI Agents", icon: RiRobot2Line, color: "text-[#7c3aed]", categories: ["ai-automation"] },
  { name: "Supabase", icon: RiSupabaseFill, color: "text-[#3ecf8e]", categories: ["backend"] },
  { name: "Nest.js", icon: SiNestjs, color: "text-[#e0234e]", categories: ["backend"] },
  { name: "Flutter", icon: SiFlutter, color: "text-[#02569b]", categories: ["backend"] },
  { name: "Dart", icon: SiDart, color: "text-[#0175c2]", categories: ["backend"] },
  { name: "Postman", icon: SiPostman, color: "text-[#ff6c37]", categories: ["qa"] },
  { name: "Cypress", icon: SiCypress, color: "text-[#17202c]", categories: ["qa"] },
  { name: "Selenium", icon: SiSelenium, color: "text-[#43b02a]", categories: ["qa"] },
  { name: "JMeter", icon: SiApachejmeter, color: "text-[#d22128]", categories: ["qa"] },
];

const projectTech = {
  php: { name: "PHP", icon: FaPhp, color: "text-[#777bb4]" },
  laravel: { name: "Laravel", icon: SiLaravel, color: "text-[#ff2d20]" },
  tailwind: { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06b6d4]" },
  javascript: { name: "JavaScript", icon: SiJavascript, color: "text-[#d6b600]" },
  mysql: { name: "MySQL", icon: SiMysql, color: "text-[#4479a1]" },
  bootstrap: { name: "Bootstrap", icon: SiBootstrap, color: "text-[#7952b3]" },
  python: { name: "Python", icon: FaPython, color: "text-[#3776ab]" },
  dart: { name: "Dart", icon: SiDart, color: "text-[#0175c2]" },
  flutter: { name: "Flutter", icon: SiFlutter, color: "text-[#02569b]" },
  django: { name: "Django", icon: SiDjango, color: "text-[#092e20]" },
  typescript: { name: "TypeScript", icon: SiTypescript, color: "text-[#3178c6]" },
  next: { name: "Next.js", icon: SiNextdotjs, color: "text-[#171717]" },
  nest: { name: "Nest.js", icon: SiNestjs, color: "text-[#e0234e]" },
  postgres: { name: "PostgreSQL", icon: BiLogoPostgresql, color: "text-[#4169e1]" },
};

export const projects: Project[] = [
  {
    id: "polinema-esports",
    title: "Polinema Esports Website",
    description:
      "Polinema Esports website is a website for providing real-time updates on tournaments, events, and announcements.",
    techStack: [projectTech.php, projectTech.laravel, projectTech.tailwind, projectTech.javascript, projectTech.mysql],
    image: "/polinema_esports.png",
    links: [
      { label: "Visit Website", url: "https://www.polinemaesports.id", icon: TfiWorld },
      { label: "Client Source", url: "https://github.com/radeonaru/polinemaesports", icon: FaGithub },
    ],
    categories: ["backend"],
  },
  {
    id: "sirw",
    title: "SIRW",
    description:
      "SIRW is a solution-based platform to facilitate services, management, and transparency within the Rukun Warga environment.",
    techStack: [projectTech.php, projectTech.laravel, projectTech.bootstrap, projectTech.javascript, projectTech.mysql],
    image: "/SIRW.png",
    links: [{ label: "Client Source", url: "https://github.com/radeonaru/SI2X", icon: FaGithub }],
    categories: ["backend"],
  },
  {
    id: "tertib-app",
    title: "TertibApp",
    description:
      "TertibApp is a platform for reporting violations of rules and regulations on campus, especially in the Information Technology Department, Malang State Polytechnic.",
    techStack: [projectTech.php, projectTech.bootstrap, projectTech.javascript, projectTech.mysql],
    image: "/TertibApp.png",
    links: [{ label: "Client Source", url: "https://github.com/radeonaru/TertibApp", icon: FaGithub }],
    categories: ["backend"],
  },
  {
    id: "age-play",
    title: "Age Play",
    description:
      "AgePlay is a face recognition mobile app that can detect age and gender. This app is able to provide personalized game recommendations according to the user's detection results. AgePlay was developed as a Convolutional Neural Network (CNN)-based application that is able to provide real-time game recommendations, support easier search, and provide a safe and relevant gaming experience for all groups, including children.",
    techStack: [projectTech.python, projectTech.dart, projectTech.mysql, projectTech.flutter, projectTech.django],
    image: "/age_play.png",
    links: [{ label: "Client Source", url: "https://github.com/radeonaru/AgePlay", icon: FaGithub }],
    categories: ["backend"],
  },
  {
    id: "hris",
    title: "HRIS",
    description:
      "HRIS (Human Resource Information System) is a comprehensive platform for managing human resources operations, including employee data management, attendance tracking, and HR workflow automation.",
    techStack: [projectTech.typescript, projectTech.next, projectTech.nest, projectTech.postgres],
    image: "/HRIS.png",
    links: [{ label: "Client Source", url: "https://github.com/PBL-Dream-Team/HRIS", icon: FaGithub }],
    categories: ["backend"],
  },
  {
    id: "sewo-app",
    title: "SewoApp",
    description:
      "SewoApp is a mobile application designed for rental services, providing users with an easy and efficient platform to rent various items and services through a user-friendly mobile interface.",
    techStack: [projectTech.dart, projectTech.flutter, projectTech.php, projectTech.mysql],
    image: "/sewoapp.png",
    links: [{ label: "Client Source", url: "https://github.com/lithiaa/sewoapp", icon: FaGithub }],
    categories: ["backend"],
  },
];

export const education: EducationEntry = {
  institution: "Politeknik Negeri Malang",
  qualification: "Bachelor of Applied Science in Informatics Engineering",
  duration: "Aug 2022 - July 2026",
  logo: "/polinema-logo.png",
  logoAlt: "Politeknik Negeri Malang logo",
};

export const experience: ExperienceEntry = {
  role: "Quality Assurance Intern",
  company: "PT. CMLABS Indonesia",
  duration: "July 2025 - December 2025",
  description:
    "Responsible for testing and ensuring the quality of web applications. I work with the development team to identify and resolve bugs.",
  logo: "/cmlabs-logo.jpg",
  logoAlt: "PT. CMLABS Indonesia logo",
};

export const certificates: Certificate[] = [
  {
    id: "bnsp-qa",
    title: "Sertikom BNSP - Quality Assurance",
    issuer: "Badan Nasional Sertifikasi Profesi",
  },
  {
    id: "bnsp-web-developer",
    title: "Sertikom BNSP - Web Developer",
    issuer: "Badan Nasional Sertifikasi Profesi",
  },
  {
    id: "digital-skola-qa",
    title: "Bootcamp Quality Assurance",
    issuer: "Digital Skola",
  },
];

export const awards: Award[] = [
  {
    id: "best-pitching",
    title: "Best Pitching",
    event: "Business Plan Competition",
    organizer: "Pateron Indonesia & Pemkab Blitar",
  },
];
