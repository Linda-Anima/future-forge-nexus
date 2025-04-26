
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesPage = () => {
  const services = [
    {
      title: "Innovation Consulting",
      description: "Expert guidance in identifying and implementing innovative solutions using existing resources."
    },
    {
      title: "Technology Integration",
      description: "Seamless integration of cutting-edge technologies with your current systems."
    },
    {
      title: "Digital Transformation",
      description: "Complete digital overhaul of your business processes and operations."
    },
    {
      title: "Sharkoo Platform",
      description: "Our flagship educational technology platform revolutionizing how students learn and collaborate."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Sharkoo Logo Card */}
          <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow bg-white">
            <CardContent className="space-y-6">
              <img 
                src="/lovable-uploads/37cd9c8e-7a7c-4b5b-97ac-a319c5e362b1.png" 
                alt="Sharkoo Logo" 
                className="w-64 h-64 mx-auto"
              />
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">The Sharkoo Project</h3>
                <p className="text-gray-600">
                  Sharkoo is our innovative educational platform designed to transform how students learn,
                  collaborate, and grow. With its friendly shark mascot and intuitive interface, it makes
                  learning engaging and accessible for everyone.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Services List */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">Our Services</h2>
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
