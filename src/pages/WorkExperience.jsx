import React from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const experiences = [
  {
    role: "Quality Assurance Intern",
    company: "PT. CMLABS Indonesia",
    duration: "July 2025 - December 2025",
    description: "Responsible for testing and ensuring the quality of web applications. I work with the development team to identify and resolve bugs.",
    logo: "/cmlabs-logo.jpg"
  },
];

const WorkExperience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="work-experience" ref={ref} className={`py-20 bg-black text-white transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`container mx-auto px-4 transform transition-transform duration-1000 ${inView ? 'translate-y-0' : 'translate-y-10'}`}>
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="mb-8 bg-gray-900/50 border-gray-800 text-white">
              <div className="flex items-start p-6 space-x-6">
                <div className="flex-shrink-0">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} Logo`}
                    className="w-16 h-16 object-contain rounded-lg bg-white p-1"
                  />
                </div>
                <div>
                  <CardHeader className="p-0 mb-2">
                    <CardTitle>{exp.role}</CardTitle>
                    <CardDescription className="text-white/60">
                      {exp.company} | {exp.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-white/80">{exp.description}</p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;