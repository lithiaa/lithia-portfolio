import { Separator } from "@/components/ui/separator";
import React from "react";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <Separator />
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Lithia Project. All Rights Reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/radeonaru"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-gray-400 transition-colors duration-200"
          >
            <FaGithub className="h-6 w-6" aria-label="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/radeonaru/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-gray-400 transition-colors duration-200"
          >
            <FaLinkedin className="h-6 w-6" aria-label="LinkedIn" />
          </a>
          <a
            href="mailto:indraw910@gmail.com?subject=Hello%20Indra!"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-gray-400 transition-colors duration-200"
          >
            <CgMail className="h-6 w-6" aria-label="Email" />
          </a>
        </div>
      </div>
    </footer>
  );
}
