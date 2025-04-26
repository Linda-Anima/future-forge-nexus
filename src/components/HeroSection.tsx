
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse-light"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-elevate-cyan/5 rounded-full filter blur-3xl animate-pulse-light" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-elevate-blue/5 rounded-full filter blur-3xl animate-pulse-light" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="opacity-0 animate-fade-in text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 max-w-4xl">
            Building the <span className="bg-gradient-to-r from-elevate-blue via-elevate-purple to-elevate-cyan bg-clip-text text-transparent">Unseen Future</span>
          </h1>
          
          <p className="opacity-0 animate-fade-in-delay-1 text-lg md:text-xl text-gray-700 max-w-2xl mb-10">
            At Elevate IO, we empower communities and industries through innovative technology solutions, 
            transforming present resources into groundbreaking advancements.
          </p>
          
          <div className="opacity-0 animate-fade-in-delay-2 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-elevate-blue hover:bg-elevate-blue/90 text-white px-6 py-6 text-lg rounded-lg">
              Learn More
            </Button>
            <Button variant="outline" className="border-elevate-purple text-elevate-purple hover:bg-elevate-purple/10 px-6 py-6 text-lg rounded-lg group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="opacity-0 animate-fade-in-delay-3 absolute bottom-10 left-1/2 -translate-x-1/2">
            <a href="#about" className="flex flex-col items-center text-sm text-gray-500 hover:text-gray-700 transition-colors">
              <span>Scroll to explore</span>
              <svg className="w-5 h-5 mt-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
