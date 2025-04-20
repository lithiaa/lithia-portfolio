import React from "react";

const Home = () => {
  return (
    <section className="bg-gray-100 min-h-screen flex flex-col md:flex-row items-center justify-center p-6">
      <div className="order-2 md:order-1 max-w-4xl text-center md:text-left py-6 md:py-0">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Hi, I’m Muhammad Bagus <span className="text-gray-800 underline">Indra</span>wan
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A passionate <span className="text-gray-600 font-bold">Web Developer</span> who
          loves creating modern and responsive websites.
        </p>
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
