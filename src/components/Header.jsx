import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";


const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'} hidden lg:block`}>
      <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/lithiaproject.png" alt="Lithia Project" width="60" height="60" />
            <h1 className="text-l font-bold text-white">Lithia Project</h1>
          </div>
          <nav className={`flex items-center space-x-1 rounded-full p-1 transition-all duration-300 ${scrolled ? 'bg-white/10 border border-white/20' : ''}`}>
            <a
              href="#home"
              className="rounded-full px-4 py-2 text-sm font-medium text-white/90 transition-all hover:bg-white/10 hover:text-white"
            >
              Home
            </a>
            <a
              href="#about"
              className="rounded-full px-4 py-2 text-sm font-medium text-white/90 transition-all hover:bg-white/10 hover:text-white"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="rounded-full px-4 py-2 text-sm font-medium text-white/90 transition-all hover:bg-white/10 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="rounded-full px-4 py-2 text-sm font-medium text-white/90 transition-all hover:bg-white/10 hover:text-white"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
