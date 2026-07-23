import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaRegFilePdf } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Feel free to connect with me through social media or download my CV below.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com/lithiaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white text-3xl transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/mbagusi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white text-3xl transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:indraw910@gmail.com"
            className="text-white/80 hover:text-white text-3xl transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Download CV Button */}
        <div>
          <a
            href="/CV_Eng_Muhammad Bagus Indrawan.pdf"
            download
            className="group relative inline-flex items-center bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <FaRegFilePdf className="mr-2" />
              Download CV
            </span>
            <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
