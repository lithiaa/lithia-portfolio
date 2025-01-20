import { Button } from "@/components/ui/button";
import React from "react";


const Header = () => {
  return (
    <header className="bg-white shadow fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/lithiaproject.png" alt="Lithia Project" width="60" height="60" />
            <h1 className="text-l font-bold">Lithia Project</h1>
          </div>
          <nav className="hidden lg:flex justify-end space-x-3">
            <a href="#home">
              <Button className="rounded-lg hover:bg-gray-700 hover:text-white" as="a">Home</Button>
            </a>
            <a href="#about">
              <Button className="rounded-lg hover:bg-gray-700 hover:text-white" as="a">About</Button>
            </a>
            <a href="#portfolio">
              <Button className="rounded-lg hover:bg-gray-700 hover:text-white" as="a">Projects</Button>
            </a>
            <a href="#contact">
              <Button className="rounded-lg hover:bg-gray-700 hover:text-white" as="a">Contact</Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
