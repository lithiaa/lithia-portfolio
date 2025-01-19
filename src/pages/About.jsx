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

const About = () => {
  const techStack = [
    { name: "PHP", icon: <FaPhp className="text-purple-600" /> },
    { name: "Java", icon: <FaJava className="text-red-600" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "Python", icon: <FaPython className="text-blue-500" /> },
    { name: "Dart", icon: <SiDart className="text-blue-400" /> },
    { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
    { name: "Django", icon: <SiDjango className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-blue-400" /> },
  ];

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Hi! I'm Muhammad Bagus Indrawan, you can call me Indra and I also
            know as Lithia, a passionate full-stack developer dedicated to
            creating dynamic and user-friendly web applications. I specialize in
            building solutions that not only meet business needs but also
            enhance user experiences. My journey in tech has been fueled by
            curiosity and a love for problem-solving, and I am constantly
            learning to stay updated with the latest trends.
          </p>
        <div className="py-20"></div>
        <div>
          <h3 className="text-3xl text-center font-bold text-gray-800 mb-4 pb-5">Tech Stack</h3>
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
