import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, Settings, Search, Smartphone, Wrench, TrendingUp } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: BarChart3,
      title: "Data-Driven Predictions",
      description: "Our AI model uses vast amounts of market data to provide accurate price estimates.",
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: Settings,
      title: "Comprehensive Parameters",
      description: "Consider all important factors like make, model, year, mileage, and condition.",
      color: "text-purple-600 bg-purple-100"
    },
    {
      icon: Search,
      title: "Real-Time Market Analysis",
      description: "Get insights based on current market trends and recent sales data.",
      color: "text-green-600 bg-green-100"
    },
    {
      icon: Smartphone,
      title: "User-Friendly Interface",
      description: "Easy to use platform accessible from any device, anytime, anywhere.",
      color: "text-orange-600 bg-orange-100"
    },
    {
      icon: Wrench,
      title: "Customizable Inputs",
      description: "Add specific details about your vehicle for more accurate predictions.",
      color: "text-red-600 bg-red-100"
    },
    {
      icon: TrendingUp,
      title: "Price Trend Analysis",
      description: "Understand how your car's value changes over time and with different factors.",
      color: "text-indigo-600 bg-indigo-100"
    }
  ];

  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
            Why Choose <span className="text-indigo-400">ApniCar</span>?
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto drop-shadow-md">
            Our advanced AI-powered platform provides the most accurate car price predictions 
            in the Indian market with features designed for both buyers and sellers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/95 backdrop-blur-sm hover:bg-white animate-fadeIn hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600/90 to-purple-600/90 backdrop-blur-sm border-0 text-white">
            <CardContent className="p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to discover your car's true value?
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Join thousands of satisfied users who trust ApniCar for accurate car valuations
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-sm opacity-80">Predictions Made</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-sm opacity-80">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">4.8★</div>
                  <div className="text-sm opacity-80">User Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Add default export
export default FeaturesSection;
