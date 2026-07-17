import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Shield, BarChart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Logo from '../components/Logo';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#0F172A] mb-6">
              Manage Your Customers
              <span className="text-primary"> Effortlessly</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              A modern CRM platform that helps you track, engage, and grow your customer relationships with powerful analytics and intuitive design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="primary" className="text-lg px-8 py-3">
                  Get Started Free <ArrowRight className="inline ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="secondary" className="text-lg px-8 py-3">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-16 relative">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 h-32"></div>
                <div className="bg-gray-50 rounded-lg p-4 h-32"></div>
                <div className="bg-gray-50 rounded-lg p-4 h-32"></div>
              </div>
              <div className="mt-4 bg-gray-50 rounded-lg p-4 h-48"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to help you manage customers efficiently
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Zap}
              title="Lightning Fast"
              description="Built for speed with instant search and real-time updates across all your customer data."
            />
            <FeatureCard 
              icon={Shield}
              title="Secure & Reliable"
              description="Enterprise-grade security with encrypted data storage and reliable backups."
            />
            <FeatureCard 
              icon={BarChart}
              title="Powerful Analytics"
              description="Get insights into customer behavior with detailed analytics and reporting tools."
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">
              Trusted by innovative companies
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="text-2xl font-bold text-gray-400">
                Company {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Customer Management?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of businesses already using Aventra to grow their customer relationships.
          </p>
          <Link to="/signup">
            <Button variant="secondary" className="text-lg px-8 py-3">
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="card p-6 hover:shadow-lg transition-shadow">
    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-xl font-semibold text-[#0F172A] mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default LandingPage;
