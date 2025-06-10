import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Users, Zap, Star } from 'lucide-react';

export function AboutSection() {
  const stats = [
    {
      icon: Users,
      number: "50,000+",
      label: "Happy Customers",
      color: "text-blue-600"
    },
    {
      icon: Award,
      number: "95%",
      label: "Accuracy Rate",
      color: "text-green-600"
    },
    {
      icon: Zap,
      number: "< 30sec",
      label: "Prediction Time",
      color: "text-yellow-600"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Data Security",
      color: "text-purple-600"
    }
  ];

  const teamMembers = [
    {
      name: "Priya Sharma",
      role: "Data Scientist",
      image: "https://images.unsplash.com/photo-1653379671970-4cf352264daf?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      testimonial: "Leading our AI development with 8+ years in automotive analytics"
    },
    {
      name: "Arjun Patel",
      role: "Product Manager",
      image: "https://plus.unsplash.com/premium_photo-1722889134304-544e46f55deb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGluZGlhbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
      rating: 5,
      testimonial: "Driving product innovation and user experience excellence"
    },
    {
      name: "Sneha Kumar",
      role: "ML Engineer",
      image: "https://plus.unsplash.com/premium_photo-1682096111256-e020381ec730?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGluZGlhbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
      rating: 5,
      testimonial: "Optimizing prediction algorithms for maximum accuracy"
    }
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-200 bg-indigo-600/20 backdrop-blur-sm rounded-full">
                About ApniCar
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              India's Most Trusted
              <span className="text-indigo-400"> Car Price</span> Prediction Platform
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Powered by advanced machine learning algorithms and comprehensive market data, 
              we help car buyers and sellers make informed decisions with accurate, real-time valuations.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20">
                    <Icon className={`h-8 w-8 mb-3 ${stat.color}`} />
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-200">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                <Link href="/about">Learn More About Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>

          {/* Team Cards */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-100 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-100 rounded-full opacity-60"></div>
              
              <div className="relative space-y-6">
                {teamMembers.map((member, index) => (
                  <Card key={index} className={`overflow-hidden shadow-xl border-0 bg-white/10 backdrop-blur-md border border-white/20 transform transition-all duration-300 hover:scale-105 ${
                    index === 1 ? 'ml-8' : index === 2 ? 'ml-4' : ''
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-white">{member.name}</h3>
                            <div className="flex">
                              {[...Array(member.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-indigo-400 font-medium mb-2">{member.role}</p>
                          <p className="text-sm text-gray-200 leading-relaxed">{member.testimonial}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-2 right-8 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                ⭐ 4.9/5 Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
