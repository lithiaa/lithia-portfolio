import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-center bg-gray-900/50 rounded-lg p-8">
          <div className="md:col-span-1 flex justify-center">
            {/* Placeholder for logo */}
            <div className="w-32 h-32 bg-gray-700/50 rounded-full flex items-center justify-center">
              <span className="text-white/40">Logo</span>
            </div>
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
