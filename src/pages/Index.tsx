
import React from 'react';
import HeroSection from '@/components/HeroSection';
import SolutionsSection from '@/components/SolutionsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <SolutionsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
