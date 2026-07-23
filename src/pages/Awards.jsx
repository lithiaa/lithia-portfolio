import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const awards = [
  {
    title: "Best Pitching",
    event: "Business Plan Competition",
    organizer: "Pateron Indonesia & Pemkab Blitar",
  },
];

const Awards = () => {
  return (
    <section id="awards" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Awards</h2>
        <div className="max-w-xl mx-auto">
          {awards.map((award, index) => (
            <Card key={index}>
              <CardHeader className="text-center">
                <CardTitle>{award.title}</CardTitle>
                <CardDescription>
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