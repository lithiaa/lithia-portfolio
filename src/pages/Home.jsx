import React from "react";

import { FaRegFilePdf } from "react-icons/fa";

const Home = () => {
  return (
    <section className="bg-gray-100 min-h-screen flex flex-col md:flex-row items-center justify-center p-6">
      <div className="order-2 md:order-1 max-w-4xl text-center md:text-left py-6 md:py-0">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Hi, I’m Muhammad Bagus <span className="text-gray-800 underline">Indra</span>wan
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A <span className="text-gray-600 font-bold">Backend</span> lover with a <span className="text-gray-600 font-bold">Quality Assurance</span> mindset.
        </p>
        <div className="mt-6">
          <a
            href="/CV_Eng_Muhammad Bagus Indrawan.pdf"
            download
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-700 transition duration-300"
          >
            <FaRegFilePdf className="inline-block mr-2 mb-1" />
            Download CV
          </a>
        </div>
      </div>
      <div className="order-1 md:order-2 ring-offset-2 ring-2 ring-gray-800 mt-6 md:mt-0">
        <img
          src="/tenor.gif"
          alt="Lithia Project"
          className="w-full max-w-xs h-auto"
        />
      </div>
    </section>
  );
};

export default Home;
