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
} from "react-icons/si";

const About = () => {
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
  ];

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Hi! I'm Muhammad Bagus Indrawan, you can call me Indra, and I'm also
          known as Lithia. I'm an informatics engineering student focusing on
          backend development and quality assurance. In backend development, I
          work with several tech stacks such as Django, Next.js, and Laravel to
          build efficient, well-structured, and scalable systems. I also pay
          close attention to software testing and quality by using Cypress as my
          main tool in Quality Assurance (QA) practices. Additionally, I
          actively create test scenarios and test cases to ensure that each
          feature functions as expected and to minimize potential bugs from the
          early stages of development.
        </p>
        <div className="py-20"></div>
        <div>
          <h3 className="text-3xl text-center font-bold text-gray-800 mb-4 pb-5">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg text-center shadow-sm flex items-center justify-center space-x-2 transform transition-transform duration-500 hover:scale-105 hover:bg-gray-800 hover:text-white"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
