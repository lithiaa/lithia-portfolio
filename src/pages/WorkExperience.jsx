import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const experiences = [
  {
    role: "Quality Assurance Intern",
    company: "PT. CMLABS Indonesia",
    duration: "Feb 2024 - Present",
    description: "Responsible for testing and ensuring the quality of web applications. I work with the development team to identify and resolve bugs.",
    logo: "/cmlabs-logo-placeholder.png" // Example path, replace with actual logo if available
  },
];

const WorkExperience = () => {
  return (
    <section id="work-experience" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="mb-8 bg-gray-900/50 border-gray-800 text-white">
              <div className="flex items-start p-6 space-x-6">
                <div className="flex-shrink-0">
                  {/* Placeholder for logo */}
                  <div className="w-16 h-16 bg-gray-700/50 rounded-lg flex items-center justify-center">
                    <span className="text-white/40 text-xs">Logo</span>
                  </div>
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