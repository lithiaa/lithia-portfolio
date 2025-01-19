import React from "react";
import { FaPhp, FaJava, FaReact, FaPython, FaDatabase } from "react-icons/fa";
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

const projects = [
  {
    title: "Polinema Esports Website",
    description: "A cool project using React",
    techStack: [
      { name: "PHP", icon: <FaPhp className="text-purple-600" /> },
      { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    ],
    image: "/polinema_esports.png",
    links: [
      { label: "Visit Website", url: "https://www.polinemaesports.id" },
      { label: "GitHub Repo", url: "https://github.com/polinema-esports" },
    ],
  },
  {
    title: "SIRW",
    description: "Portfolio site with Tailwind",
    techStack: [
      { name: "PHP", icon: <FaPhp className="text-purple-600" /> },
      { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    ],
    image: "/SIRW.png",
    links: [
      { label: "Preview", url: "https://sirw-preview.com" },
    ],
  },
  {
    title: "TertibApp",
    description: "Portfolio site with Tailwind",
    techStack: [
      { name: "PHP", icon: <FaPhp className="text-purple-600" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    ],
    image: "/TertibApp.png",
    links: [
      { label: "Preview", url: "https://sirw-preview.com" },
    ],
  },
  {
    title: "Age Play",
    description: "Portfolio site with Tailwind",
    techStack: [
    { name: "Python", icon: <FaPython className="text-blue-500" /> },
    { name: "Dart", icon: <SiDart className="text-blue-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
    { name: "Django", icon: <SiDjango className="text-green-500" /> },
    ],
    image: "/age_play.png",
    links: [
      { label: "Preview", url: "https://sirw-preview.com" },
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
                        className="flex items-center gap-2 bg-gray-200 px-3 py-2 rounded-lg shadow-sm hover:bg-gray-300"
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
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                      {link.label}
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
