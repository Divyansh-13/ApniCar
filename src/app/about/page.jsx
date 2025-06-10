"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | ApniCar</title>
        <meta name="description" content="Learn about ApniCar - the leading car price prediction platform in India" />
      </Head>
      
      <div className="min-h-screen car-background relative">
        {/* Dark overlay for better readability */}
        <div className="fixed inset-0 bg-black/60 z-0" />
        
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-6 text-white">About ApniCar</h1>
            <p className="text-gray-200 max-w-3xl mx-auto">
              Your trusted companion for car price predictions and automotive insights in India
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-md p-8 mb-16">
            <div className="flex flex-col md:flex-row gap-12 mb-16">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="mb-4 text-gray-700">
                  ApniCar was founded in 2023 with a mission to eliminate the uncertainty and guesswork in 
                  car pricing across India. We noticed that many people struggle to determine fair prices 
                  when buying or selling vehicles, often leading to financial losses or missed opportunities.
                </p>
                <p className="mb-4 text-gray-700">
                  Our team of automotive enthusiasts, data scientists, and software engineers came together 
                  to solve this problem by developing an advanced AI-based price prediction model that takes 
                  into account numerous factors affecting car values in the Indian market.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img 
                  src="/about-story.jpg" 
                  alt="ApniCar story" 
                  className="rounded-lg shadow-md w-full h-auto"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/600x400?text=Our+Story";
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-12 mb-16">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="mb-4 text-gray-700">
                  At ApniCar, we believe in empowering car buyers and sellers with accurate, data-driven insights. 
                  Our mission is to bring transparency to the automotive market and help consumers make informed 
                  decisions through technology.
                </p>
                <p className="mb-4 text-gray-700">
                  We continuously refine our prediction models by analyzing thousands of transactions across 
                  India, accounting for regional variations, seasonal trends, and other market factors that 
                  influence car prices.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img 
                  src="/about-mission.jpg" 
                  alt="ApniCar mission" 
                  className="rounded-lg shadow-md w-full h-auto"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/600x400?text=Our+Mission";
                  }}
                />
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">Ready to discover your car's value?</h2>
              <Button asChild size="lg">
                <Link href="/#prediction-form">Try Our Price Predictor</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
