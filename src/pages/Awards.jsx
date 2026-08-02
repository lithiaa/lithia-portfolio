import React from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const awards = [
  {
    title: "Best Pitching",
    event: "Business Plan Competition",
    organizer: "Pateron Indonesia & Pemkab Blitar",
  },
];

const Awards = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="awards" ref={ref} className={`py-20 bg-black text-white transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`container mx-auto px-4 transform transition-transform duration-1000 ${inView ? 'translate-y-0' : 'translate-y-10'}`}>
        <h2 className="text-3xl font-bold text-center mb-12">Awards</h2>
        <div className="max-w-xl mx-auto">
          {awards.map((award, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800 text-white">
              <CardHeader className="text-center">
                <CardTitle>{award.title}</CardTitle>
                <CardDescription className="text-white/60">
                  {award.event} by {award.organizer}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
