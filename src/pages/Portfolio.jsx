import React from "react";
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
];

export default function Portfolio() {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Projects</h2>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            } items-center gap-4 bg-white shadow-md rounded-lg overflow-hidden p-6`}
          >
            <div className="w-full sm:w-1/2">
              <img
                src={project.image}
                alt={`${project.title} thumbnail`}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-between flex-1 p-4">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              </div>
              <div className="mb-4">
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <button
                        key={idx}
                        className="flex items-center gap-2 bg-gray-200 px-3 py-2 rounded-lg shadow-sm hover:bg-gray-800 hover:text-white hover:scale-105 transform transition-transform duration-500"
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Links:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-200 px-3 py-2 rounded-lg shadow-sm hover:bg-gray-800 hover:text-white hover:scale-105 transform transition-transform duration-500"
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
