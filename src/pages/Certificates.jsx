import React from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const certificates = [
  {
    title: "Sertikom BNSP - Quality Assurance",
    issuer: "Badan Nasional Sertifikasi Profesi",
  },
  {
    title: "Sertikom BNSP - Web Developer",
    issuer: "Badan Nasional Sertifikasi Profesi",
  },
  {
    title: "Bootcamp Quality Assurance",
    issuer: "Digital Skola",
  },
];

const Certificates = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certificates" ref={ref} className={`py-20 bg-black text-white transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`container mx-auto px-4 transform transition-transform duration-1000 ${inView ? 'translate-y-0' : 'translate-y-10'}`}>
        <h2 className="text-3xl font-bold text-center mb-12">Certificates</h2>
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800 text-white flex flex-col">
              <CardHeader>
                <CardTitle>{cert.title}</CardTitle>
                <CardDescription className="text-white/60">{cert.issuer}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex items-center justify-center">
                {/* Placeholder for certificate image */}
                <div className="w-full h-32 bg-gray-700/50 rounded-md flex items-center justify-center">
                  <span className="text-white/40">Evidence</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;