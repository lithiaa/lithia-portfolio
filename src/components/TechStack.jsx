import React from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaPhp,
  FaJava,
  FaReact,
  FaPython,
  FaDatabase,
  FaDocker,
} from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";
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
  SiTypescript,
  SiNestjs,
  SiPostman,
  SiCypress,
  SiSelenium,
  SiApachejmeter,
} from "react-icons/si";

const techStack = [
    { name: "PHP", icon: <FaPhp className="text-purple-600" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Python", icon: <FaPython className="text-blue-500" /> },
    { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-800" /> },
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Django", icon: <SiDjango className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    {
      name: "PostgreSQL",
      icon: <BiLogoPostgresql className="text-blue-600" />,
    },
    { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-600" /> },
    { name: "Supabase", icon: <RiSupabaseFill className="text-green-600" /> },
    { name: "Cypress", icon: <SiCypress className="text-green-600" /> },
    { name: "Selenium", icon: <SiSelenium className="text-green-500" /> },
    { name: "JMeter", icon: <SiApachejmeter className="text-red-600" /> },
  ];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl text-center font-bold mb-12">
          Tech Stack
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-800/50 text-white py-4 px-4 rounded-lg text-center shadow-sm flex flex-col items-center justify-center space-y-2 transform transition-transform duration-300 hover:scale-110 hover:bg-gray-700"
            >
              <span className="text-4xl">{tech.icon}</span>
              <span className="font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;