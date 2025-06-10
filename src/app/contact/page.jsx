"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

export default function ContactPage() {
  const [currentBg, setCurrentBg] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const backgrounds = [
    '/car.jpg',
    '/car1.jpg', 
    '/car2.jpg'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (scrollY < windowHeight * 0.5) {
        setCurrentBg(0);
      } else if (scrollY < windowHeight) {
        setCurrentBg(1);
      } else {
        setCurrentBg(2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form and show success message
      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatus({
        type: 'success',
        message: 'Your message has been sent successfully! We will get back to you soon.'
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send your message. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col">
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
      <div className="fixed inset-0 bg-black/50 z-[5]" />
      
      <div className="relative z-10 py-16 flex-1">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-white">Contact Us</h1>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you. Fill out the form below and our team will get back to you shortly.
            </p>
          </div>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <Card className="bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>We'll respond within 24-48 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  {status.type && (
                    <Alert 
                      variant={status.type === 'error' ? 'destructive' : 'default'} 
                      className="mb-6"
                    >
                      <AlertTitle>{status.type === 'success' ? 'Success' : 'Error'}</AlertTitle>
                      <AlertDescription>{status.message}</AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        value={formData.subject} 
                        onChange={handleChange} 
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={5} 
                        value={formData.message} 
                        onChange={handleChange} 
                        className="w-full min-h-[120px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="w-full lg:w-1/2 px-4">
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-md h-full">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Phone</h3>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <p className="text-gray-600">info@apnicar.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Address</h3>
                      <p className="text-gray-600">123 Tech Park, Sector 15<br />Bangalore, Karnataka 560001</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-lg font-medium mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-indigo-100 hover:bg-indigo-200 p-3 rounded-full transition-colors">
                      <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-indigo-100 hover:bg-indigo-200 p-3 rounded-full transition-colors">
                      <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="bg-indigo-100 hover:bg-indigo-200 p-3 rounded-full transition-colors">
                      <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.98 0a6.9 6.9 0 015.08 1.98A6.94 6.94 0 0124 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0116.94 24H7.06a7.06 7.06 0 01-5.03-1.89A6.96 6.96 0 010 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 00-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 003.53 1.25h9.88a5 5 0 003.53-1.25 4.73 4.73 0 001.4-3.54V7.02a5 5 0 00-1.3-3.49 4.82 4.82 0 00-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 01-12.4 0 6.2 6.2 0 016.2-6.2zm0 2.22a3.99 3.99 0 00-3.97 3.97A3.99 3.99 0 0012 15.92a3.99 3.99 0 003.97-3.97A3.99 3.99 0 0012 7.98zm6.44-3.77a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
