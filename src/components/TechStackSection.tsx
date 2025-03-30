
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const hardwareComponents = [
  { 
    name: "ESP32", 
    description: "Main microcontroller for processing and connectivity"
  },
  { 
    name: "Servo Motor", 
    description: "For precise pill dispensing mechanism"
  },
  { 
    name: "LED Indicators", 
    description: "Multi-color LEDs for visual alerts"
  },
  { 
    name: "Speaker", 
    description: "For audible reminders and alerts"
  },
  { 
    name: "LCD Display", 
    description: "Shows current status and medication info"
  }
];

const softwareComponents = [
  { 
    name: "React.js", 
    description: "Frontend web application development"
  },
  { 
    name: "Python", 
    description: "Backend logic and data processing"
  },
  { 
    name: "Firebase", 
    description: "Real-time database and authentication"
  },
  { 
    name: "Twilio API", 
    description: "SMS alert notifications"
  },
  { 
    name: "AWS IoT", 
    description: "Cloud connectivity for IoT devices"
  }
];

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Hardware Engineer",
    contribution: "ESP32 programming and servo motor integration"
  },
  {
    name: "Sarah Johnson",
    role: "Frontend Developer",
    contribution: "React.js application and mobile responsiveness"
  },
  {
    name: "Miguel Rodriguez",
    role: "Backend Developer",
    contribution: "Python backend and Firebase integration"
  },
  {
    name: "Priya Patel",
    role: "UX Designer",
    contribution: "UI/UX design and user research"
  }
];

const TechStackSection = () => {
  return (
    <section id="tech" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="h2 mb-4 text-gray-900">Tech Stack & Open Source</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our smart pill dispenser combines cutting-edge hardware and software
            technologies to create a reliable, intelligent medication management system.
          </p>
        </div>
        
        <Tabs defaultValue="hardware" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="hardware" className="px-8">Hardware</TabsTrigger>
              <TabsTrigger value="software" className="px-8">Software</TabsTrigger>
              <TabsTrigger value="team" className="px-8">Team</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="hardware">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hardwareComponents.map((component, index) => (
                <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-medical-700">{component.name}</h3>
                    <p className="text-gray-600">{component.description}</p>
                  </CardContent>
                </Card>
              ))}
              
              <div className="lg:col-span-3">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Hardware Schematic</h3>
                  <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center">
                    <p className="text-gray-500">[Hardware Circuit Diagram Placeholder]</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="software">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softwareComponents.map((component, index) => (
                <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-medical-700">{component.name}</h3>
                    <p className="text-gray-600">{component.description}</p>
                  </CardContent>
                </Card>
              ))}
              
              <div className="lg:col-span-3">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">GitHub Repository</h3>
                  <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">SmartPillPal</h4>
                        <p className="text-sm text-gray-500">Open source medication dispenser project</p>
                      </div>
                      <button className="pill-button px-4 py-2">View on GitHub</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="team">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-medical-700">{member.name}</h3>
                    <p className="text-medical-500 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.contribution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TechStackSection;
