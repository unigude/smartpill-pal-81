
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Bell, Clock, UserCheck } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-20 section-padding bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <h1 className="h1 text-gray-900">
              Never Miss a Dose
            </h1>
            <h2 className="text-2xl font-medium text-gray-600">
              Smart, Secure, Automated.
            </h2>
            <p className="text-gray-600 text-lg max-w-md">
              The DoseBuddy revolutionizes medication management with intelligent dispensing, 
              real-time notifications, and caregiver monitoring to ensure perfect medication adherence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button className="pill-button">
                Get Started
              </Button>
              <Button variant="outline" className="rounded-full border-medical-300 text-medical-600">
                See How It Works
              </Button>
            </div>
            
            {/* Quick Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-2">
                <div className="bg-medical-100 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-medical-500" />
                </div>
                <span className="text-gray-700">Automated Dispensing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-medical-100 p-2 rounded-full">
                  <Bell className="h-5 w-5 text-medical-500" />
                </div>
                <span className="text-gray-700">Real-Time Alerts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-medical-100 p-2 rounded-full">
                  <UserCheck className="h-5 w-5 text-medical-500" />
                </div>
                <span className="text-gray-700">Remote Monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-medical-100 p-2 rounded-full">
                  <Bell className="h-5 w-5 text-medical-500" />
                </div>
                <span className="text-gray-700">AI-Based Smart Alerts</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center justify-end">
            <div className="w-full max-w-md">
              <AspectRatio ratio={1/1} className="rounded-2xl bg-gradient-to-br from-medical-100 to-blue-50 shadow-lg">
                <div className="w-full h-full relative p-8">
                  <img 
                    src="/lovable-uploads/7e7d3121-4f3e-409b-8740-45150304d046.png"
                    alt="DoseBuddy App Interface"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-4 right-4 bg-white rounded-full shadow-lg h-16 w-16 flex items-center justify-center animate-pulse-light">
                    <Bell className="h-8 w-8 text-medical-500" />
                  </div>
                </div>
              </AspectRatio>
            </div>
          </div>
          
          {/* Mobile-only image - displayed below benefits on small screens */}
          <div className="lg:hidden w-full max-w-xs mx-auto mt-8">
            <AspectRatio ratio={1/1} className="rounded-2xl bg-gradient-to-br from-medical-100 to-blue-50 shadow-lg">
              <div className="w-full h-full relative p-6">
                <img 
                  src="/lovable-uploads/7e7d3121-4f3e-409b-8740-45150304d046.png"
                  alt="DoseBuddy App Interface"
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-2 right-2 bg-white rounded-full shadow-lg h-12 w-12 flex items-center justify-center animate-pulse-light">
                  <Bell className="h-6 w-6 text-medical-500" />
                </div>
              </div>
            </AspectRatio>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <a href="#how-it-works" className="flex flex-col items-center text-gray-500 hover:text-medical-500 transition-colors">
            <span className="text-sm mb-1">Discover More</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
