import React from 'react';
import Link from 'next/link';
import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative z-50 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-2 font-bold text-xl mb-4">
              <Car className="h-8 w-8 text-indigo-400" />
              <span>ApniCar</span>
            </Link>
            <p className="text-gray-400 mb-4">
              India's most trusted car price prediction platform, powered by AI and market intelligence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link href="/#features" className="block text-gray-400 hover:text-white transition-colors">Features</Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">About Us</Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <div className="space-y-2">
              <span className="block text-gray-400">Car Price Prediction</span>
              <span className="block text-gray-400">Market Analysis</span>
              <span className="block text-gray-400">Vehicle Valuation</span>
              <span className="block text-gray-400">Trend Insights</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-indigo-400" />
                <span className="text-gray-400">info@apnicar.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-indigo-400" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-indigo-400" />
                <span className="text-gray-400">Greater Noida</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 ApniCar. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};
