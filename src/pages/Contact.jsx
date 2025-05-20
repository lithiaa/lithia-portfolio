import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6 space-y-6">
      <h2 className="text-3xl font-bold">Get in Touch</h2>
      <p className="text-lg text-gray-700 text-center max-w-2xl">
        Feel free to connect with me through social media or download my CV below.
      </p>

      {/* Social Media Links */}
      <div className="flex space-x-6">
        <a
          href="https://github.com/lithiaa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600 text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/mbagusi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600 text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:indraw910@gmail.com"
          className="text-gray-800 hover:text-gray-600 text-2xl"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Download CV Button */}
      <div>
        <a
          href="/CV_Eng_Muhammad Bagus Indrawan.pdf"
          download
          className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-700 transition duration-300"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Contact;
