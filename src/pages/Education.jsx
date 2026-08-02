import React from "react";
import { useInView } from "react-intersection-observer";

const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" ref={ref} className={`py-20 bg-black text-white transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`container mx-auto px-4 transform transition-transform duration-1000 ${inView ? 'translate-y-0' : 'translate-y-10'}`}>
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-center bg-gray-900/50 rounded-lg p-8">
          <div className="md:col-span-1 flex justify-center">
            <img
              src="/polinema-logo.png"
              alt="Politeknik Negeri Malang Logo"
              className="w-32 h-32 object-contain"
            />
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Politeknik Negeri Malang</h3>
            <p className="text-white/80">Bachelor of Applied Science in Informatics Engineering</p>
            <p className="text-white/60">August 2022 - July 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
