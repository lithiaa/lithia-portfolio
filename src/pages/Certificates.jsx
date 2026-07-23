import React from "react";
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
  return (
    <section id="certificates" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
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