import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthEntryLink from '../components/AuthEntryLink';
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
            <h1 className="text-4xl font-bold text-foreground mb-4">Pricing</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent pricing for teams of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`card-interactive p-8 relative group ${plan.popular ? 'border-2 border-primary shadow-elevated scale-[1.02]' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium shadow-button">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-success" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <AuthEntryLink mode="signup" className="block w-full">
                  <button type="button" className={`w-full py-3 rounded-lg font-medium transition-all duration-200 ease-smooth hover:-translate-y-0.5 active:translate-y-0 ${plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary-hover shadow-button hover:shadow-button-hover' : 'bg-accent text-accent-foreground hover:bg-accent/80 shadow-soft hover:shadow-card'}`}>
                    Get Started
                  </button>
                </AuthEntryLink>
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
