import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SharkooPage = () => {
  const services = [
    {
      title: "Innovation Consulting",
      description: "Expert guidance in identifying and implementing innovative solutions using existing resources.",
      icon: "💡"
    },
    {
      title: "Technology Integration",
      description: "Seamless integration of cutting-edge technologies with your current systems.",
      icon: "🔄"
    },
    {
      title: "Digital Transformation",
      description: "Complete digital overhaul of your business processes and operations.",
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20 bg-gradient-to-br from-blue-100 via-cyan-50 to-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Page Title - Visible on mobile only */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent lg:hidden">
          The Sharkoo Project
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Sharkoo Logo Card */}
          <Card className="p-5 md:p-8 shadow-xl rounded-xl border-0 overflow-hidden bg-gradient-to-br from-white to-blue-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="space-y-4 md:space-y-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/10 rounded-lg opacity-50"></div>
              <div className="relative z-10">
                <img 
                  src="/lovable-uploads/37cd9c8e-7a7c-4b5b-97ac-a319c5e362b1.png" 
                  alt="Sharkoo Logo" 
                  className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 mx-auto drop-shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent hidden lg:block">The Sharkoo Project</h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Sharkoo represents our commitment to revolutionizing educational technology. 
                    It's a platform designed to make learning more engaging, interactive, and accessible 
                    for students worldwide. With its friendly shark mascot and intuitive interface, 
                    Sharkoo transforms how students learn and collaborate.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Services List */}
          <div className="space-y-4 md:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-8 bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">Our Services</h2>
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl border-0 overflow-hidden bg-gradient-to-r from-white to-blue-50"
                >
                  <CardContent className="p-4 md:p-6 relative">
                    <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-blue-400 to-cyan-500 rounded-r-lg"></div>
                    <div className="flex items-start gap-3 md:gap-4">
                      <span className="text-2xl md:text-3xl flex-shrink-0">{service.icon}</span>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{service.title}</h3>
                        <p className="text-sm md:text-base text-gray-700">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="mt-6 md:mt-10 p-3 md:p-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl shadow-lg">
              <CardContent className="text-center py-2 md:py-3">
                <p className="text-sm md:text-base font-semibold">Ready to transform your business? Contact us today!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Mobile-friendly bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden py-3 px-4 z-50">
        <div className="flex justify-around items-center">
          <button className="flex flex-col items-center text-blue-600">
            <span className="text-lg">🏠</span>
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center text-blue-600">
            <span className="text-lg">💬</span>
            <span className="text-xs">Contact</span>
          </button>
          <button className="flex flex-col items-center text-blue-600">
            <span className="text-lg">ℹ️</span>
            <span className="text-xs">About</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SharkooPage;