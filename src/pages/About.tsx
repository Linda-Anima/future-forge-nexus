
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
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
    <div className="min-h-screen pt-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-700">About Elevate IO</h2>
          
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-3">Our Story</h3>
            <p className="text-gray-700 text-lg">
              "Elevate IO began with a shared frustration: seeing so much potential around us, yet so many missed opportunities to create real change. We asked ourselves — what if innovation didn't have to wait for perfect conditions? What if we could use what we already have to build what the world has never seen? From that belief, Elevate IO was born — a movement to empower industries, uplift communities, and unlock the unseen future through technology and vision."
            </p>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-center mb-10 text-blue-700">Our Core Values</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              <CardContent className="p-6">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-700 mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
