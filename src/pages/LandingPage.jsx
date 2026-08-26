import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Shield, BarChart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Logo from '../components/Logo';

const reviews = [
  {
    name: 'Sarah Johnson',
    company: 'TechCorp',
    role: 'CEO',
    rating: 5,
    text: 'Aventra has transformed how we manage our customer relationships. The intuitive interface and powerful features have helped us increase customer satisfaction by 40%.',
    avatar: 'SJ'
  },
  {
    name: 'Michael Chen',
    company: 'Innovate.io',
    role: 'Product Manager',
    rating: 5,
    text: 'The best CRM we have ever used. The customer health analytics alone have saved us countless hours and helped us retain more customers.',
    avatar: 'MC'
  },
  {
    name: 'Emily Davis',
    company: 'Startup Co',
    role: 'Founder',
    rating: 5,
    text: 'Simple, powerful, and affordable. Aventra helped us scale from 100 to 10,000 customers without any growing pains. Highly recommended!',
    avatar: 'ED'
  },
  {
    name: 'James Wilson',
    company: 'Enterprise',
    role: 'Sales Director',
    rating: 5,
    text: 'The team collaboration features are fantastic. Our sales team can now work together seamlessly and close deals faster than ever.',
    avatar: 'JW'
  }
];

const LandingPage = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#reviews') {
      const element = document.getElementById('reviews');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section
  className="flex-1"
  style={{
    backgroundImage: "url('/aventra-bg.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#0F172A] mb-6">
              Manage Your Customers
              <span className="text-primary"> Effortlessly</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              A modern Customer management platform that helps you track, engage, and grow your customer relationships with powerful analytics and intuitive design.
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Management?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of businesses already using Aventra to grow their customer relationships.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-white mb-2">10K+</p>
              <p className="text-white/80">Active Users</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-white mb-2">99.9%</p>
              <p className="text-white/80">Uptime</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-white mb-2">24/7</p>
              <p className="text-white/80">Support</p>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-center gap-3 text-white">
              <CheckCircle className="w-6 h-6" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <CheckCircle className="w-6 h-6" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <CheckCircle className="w-6 h-6" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <CheckCircle className="w-6 h-6" />
              <span>24/7 customer support</span>
            </div>
          </div>

          <div className="text-center">
            <Link to="/signup">
              <Button variant="secondary" className="text-lg px-8 py-3">
                Start Your Free Trial <ArrowRight className="inline ml-2 w-5 h-5" />
              </Button>
            </Link>
            <p className="text-white/70 text-sm mt-4">
              No setup fees • No hidden charges • Start in minutes
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of businesses worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A]">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.role}, {review.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
