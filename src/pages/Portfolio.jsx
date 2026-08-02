import React from "react";
import { useInView } from "react-intersection-observer";
import { FaPhp, FaJava, FaReact, FaPython, FaDatabase, FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiDjango,
  SiLaravel,
  SiFlutter,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiDart,
  SiNextdotjs,
  SiNestjs,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import { TfiWorld } from "react-icons/tfi";

const projects = [
  {
    title: "Polinema Esports Website",
    description: "Polinema Esports website is a website for providing real-time updates on tournaments, events, and announcements.",
    techStack: [
      { name: "PHP", icon: <FaPhp className="text-purple-600" /> },
      { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    ],
    image: "/polinema_esports.png",
    links: [
      { label: "Visit Website", url: "https://www.polinemaesports.id", icon:<TfiWorld className="text-gray-800" /> },
      { label: "Client Source", url: "https://github.com/radeonaru/polinemaesports", icon:<FaGithub className="text-gray-800" /> },
    ],
  },
  {
    title: "SIRW",
    description: "SIRW is a solution-based platform to facilitate services, management, and transparency within the Rukun Warga environment.",
    techStack: [
      { name: "PHP", icon: <FaPhp className="text-purple-600" /> },
      { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    ],
    image: "/SIRW.png",
    links: [
      { label: "Client Source", url: "https://github.com/radeonaru/SI2X", icon:<FaGithub className="text-gray-800" /> },
    ],
  },
  {
    title: "TertibApp",
    description: "TertibApp is a platform for reporting violations of rules and regulations on campus, especially in the Information Technology Department, Malang State Polytechnic.",
    techStack: [
      { name: "PHP", icon: <FaPhp className="text-purple-600" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    ],
    image: "/TertibApp.png",
    links: [
      { label: "Client Source", url: "https://github.com/radeonaru/TertibApp", icon:<FaGithub className="text-gray-800" /> },
    ],
  },
  {
    title: "Age Play",
    description: "AgePlay is a face recognition mobile app that can detect age and gender. This app is able to provide personalized game recommendations according to the user's detection results. AgePlay was developed as a Convolutional Neural Network (CNN)-based application that is able to provide real-time game recommendations, support easier search, and provide a safe and relevant gaming experience for all groups, including children.",
    techStack: [
    { name: "Python", icon: <FaPython className="text-blue-500" /> },
    { name: "Dart", icon: <SiDart className="text-blue-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
    { name: "Django", icon: <SiDjango className="text-green-500" /> },
    ],
    image: "/age_play.png",
    links: [
      { label: "Client Source", url: "https://github.com/radeonaru/AgePlay", icon:<FaGithub className="text-gray-800" /> },
    ],
  },
  {
    title: "HRIS",
    description: "HRIS (Human Resource Information System) is a comprehensive platform for managing human resources operations, including employee data management, attendance tracking, and HR workflow automation.",
    techStack: [
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
      { name: "Nest.js", icon: <SiNestjs className="text-red-600" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
    ],
    image: "/HRIS.png",
    links: [
      { label: "Client Source", url: "https://github.com/PBL-Dream-Team/HRIS", icon:<FaGithub className="text-gray-800" /> },
    ],
  },
  {
    title: "SewoApp",
    description: "SewoApp is a mobile application designed for rental services, providing users with an easy and efficient platform to rent various items and services through a user-friendly mobile interface.",
    techStack: [
      { name: "Dart", icon: <SiDart className="text-blue-400" /> },
      { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
      { name: "PHP", icon: <FaPhp className="text-purple-600" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    ],
    image: "/sewoapp.png",
    links: [
      { label: "Client Source", url: "https://github.com/lithiaa/sewoapp", icon:<FaGithub className="text-gray-800" /> },
    ],
  },
];

export default function Portfolio() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portfolio" ref={ref} className={`py-20 bg-black text-white transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`container mx-auto px-4 transform transition-transform duration-1000 ${inView ? 'translate-y-0' : 'translate-y-10'}`}>
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900/50 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img
                src={project.image}
                alt={`${project.title} thumbnail`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4 text-sm">{project.description}</p>
                <h4 className="font-semibold mb-2 text-sm">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <div key={idx} className="flex items-center text-xs bg-gray-800 px-2 py-1 rounded-full">
                      <span className="mr-1">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
                <h4 className="font-semibold mb-2 text-sm">Links:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs bg-white/10 border border-white/20 px-3 py-2 rounded-full hover:bg-white/20 transition-colors"
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
