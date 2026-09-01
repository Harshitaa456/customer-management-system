import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Zap, Shield, BarChart, Users, Clock, Globe } from 'lucide-react';

const FeaturesPage = () => {
  const features = [
    { icon: Zap, title: 'Lightning Fast', description: 'Built for speed with instant search and real-time updates' },
    { icon: Shield, title: 'Secure & Reliable', description: 'Enterprise-grade security with encrypted data storage' },
    { icon: BarChart, title: 'Powerful Analytics', description: 'Get insights into customer behavior with detailed analytics' },
    { icon: Users, title: 'Team Collaboration', description: 'Work together seamlessly with your team' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock support for all your needs' },
    { icon: Globe, title: 'Global Reach', description: 'Manage customers from anywhere in the world' },
  ];

  return (
    <div
    className="min-h-screen flex flex-col"
    style={{
      backgroundImage: "url('/aventra-bg.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
      <Navbar />
      
      <main className="flex-1 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">Features</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your customers effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FeaturesPage;
