
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      title: "Innovation Consulting",
      description: "We help organizations identify opportunities for innovation within their existing resources and infrastructure.",
      icon: "🔍"
    },
    {
      title: "Technology Transformation",
      description: "We leverage current technologies to create new applications and solutions that meet emerging needs.",
      icon: "🔄"
    },
    {
      title: "Future-Ready Systems",
      description: "We design and implement adaptable systems that evolve with your organization's growing demands.",
      icon: "🚀"
    },
    {
      title: "Community Tech Solutions",
      description: "We develop technologies specifically designed to empower and uplift communities through accessibility.",
      icon: "🌍"
    },
    {
      title: "Resource Optimization",
      description: "We maximize the potential of existing resources through innovative approaches and technologies.",
      icon: "⚙️"
    },
    {
      title: "Smart Integration",
      description: "We seamlessly integrate new innovations with existing systems for smooth transitions and adoption.",
      icon: "🔌"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-elevate-blue">Our Solutions</h2>
          <p className="text-lg text-gray-700">
            We transform today's resources into tomorrow's breakthroughs through innovative technology solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow bg-white overflow-hidden">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-elevate-blue">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-elevate-purple font-medium hover:underline group"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl font-medium text-gray-700 mb-4">
            Ready to transform your ideas into reality?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 rounded-lg bg-elevate-purple text-white hover:bg-elevate-purple/90 transition-colors font-medium"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
