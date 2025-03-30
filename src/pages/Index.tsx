
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TechStackSection from '@/components/TechStackSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

// Redux could be integrated here if we were building the full application
// For now, we're just showcasing it in the tech stack section

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialsSection />
      <TechStackSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
