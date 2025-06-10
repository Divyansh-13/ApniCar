"use client";

import { PredictionForm } from "@/components/predictionform"
import { AboutSection } from "@/components/aboutsection"
import { FeaturesSection } from "@/components/featuressection"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [currentBg, setCurrentBg] = useState(0);
  
  const backgrounds = [
    '/car.jpg',
    '/car1.jpg', 
    '/car2.jpg'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Change background based on scroll position
      if (scrollY < windowHeight) {
        setCurrentBg(0); // car.jpg for top section
      } else if (scrollY < windowHeight * 2) {
        setCurrentBg(1); // car1.jpg for middle section
      } else {
        setCurrentBg(2); // car2.jpg for bottom section
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Background Images with smooth transitions */}
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`fixed inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            currentBg === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${bg}')`,
            backgroundAttachment: 'fixed',
            zIndex: 1
          }}
        />
      ))}
      
      {/* Dark overlay for better readability */}
      <div className="fixed inset-0 bg-black/40 z-[5]" />
      
      {/* Content with transparent backgrounds */}
      <div className="relative z-10 min-h-screen">
        <PredictionForm />
        <FeaturesSection />
        <AboutSection />
      </div>
    </div>
  )
}