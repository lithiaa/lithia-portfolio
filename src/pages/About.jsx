import React from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.1,    // Trigger when 10% of the element is visible
  });

  return (
    <section id="about" ref={ref} className={`py-20 bg-black text-white transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`container mx-auto px-4 transform transition-transform duration-1000 ${inView ? 'translate-y-0' : 'translate-y-10'}`}>
        <div className="grid md:grid-cols-3 gap-12 items-center max-w-4xl mx-auto">
          <div className="md:col-span-1 flex justify-center">
            {/* Photo Placeholder */}
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 bg-gray-700/50 rounded-full animate-pulse"></div>
              <img
                src="/profile-picture.jpg" // Replace with your actual photo path
                alt="Muhammad Bagus Indrawan"
                className="relative w-full h-full rounded-full object-cover border-4 border-gray-800 shadow-lg"
                onError={(e) => { e.currentTarget.style.display = 'none'; }} // Hide if image not found
              />
            </div>
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg leading-relaxed text-white/80">
              I'm Muhammad Bagus Indrawan, a backend enthusiast with a strong quality assurance mindset. I build efficient, scalable systems and ensure software quality through rigorous testing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;