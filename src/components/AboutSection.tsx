
import React from 'react';
import { Card, CardContent } from './ui/card';

const AboutSection: React.FC = () => {
  const coreValues = [
    {
      title: "Innovation",
      description: "We continuously seek new ways to transform existing resources into groundbreaking solutions."
    },
    {
      title: "Integrity",
      description: "We build trust through transparent relationships and ethical business practices."
    },
    {
      title: "Community",
      description: "We believe in creating technology that empowers and uplifts the communities we serve."
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in every solution we develop and implement."
    },
    {
      title: "Curiosity",
      description: "We foster a culture of exploration and continuous learning that fuels our innovation."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-elevate-blue">About Elevate IO</h2>
          
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-3">Vision</h3>
            <p className="text-gray-700 text-lg">
              To drive innovation by harnessing what we have today to create what the world has yet to see.
            </p>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-3">Mission</h3>
            <p className="text-gray-700 text-lg">
              At Elevate IO, we empower communities and industries through innovative technology solutions, 
              transforming present resources into groundbreaking advancements that shape a better, smarter future.
            </p>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-3">Our Story</h3>
            <p className="text-gray-700">
              Elevate IO was founded to bridge today's potential with tomorrow's possibilities. 
              We exist to turn available resources into groundbreaking innovations that redefine the future.
            </p>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-center mb-10 text-elevate-blue">Our Core Values</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              <CardContent className="p-6">
                <div className="h-2 bg-gradient-to-r from-elevate-blue to-elevate-purple mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
