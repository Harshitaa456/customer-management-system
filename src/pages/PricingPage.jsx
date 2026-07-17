import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Check } from 'lucide-react';

const PricingPage = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams',
      features: ['Up to 1,000 customers', 'Basic analytics', 'Email support', '5 team members'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'For growing businesses',
      features: ['Up to 10,000 customers', 'Advanced analytics', 'Priority support', '25 team members', 'API access', 'Custom integrations'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: ['Unlimited customers', 'Full analytics suite', '24/7 phone support', 'Unlimited team members', 'Custom API development', 'Dedicated account manager', 'SLA guarantee'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#0F172A] mb-4">Pricing</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, transparent pricing for teams of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`card p-8 relative ${plan.popular ? 'border-2 border-primary' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-[#0F172A] mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#0F172A]">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${plan.popular ? 'bg-primary text-white hover:bg-indigo-600' : 'bg-gray-100 text-[#0F172A] hover:bg-gray-200'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;
