import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Star } from 'lucide-react';

const ReviewsPage = () => {
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
            <h1 className="text-4xl font-bold text-[#0F172A] mb-4">What Our Customers Say</h1>
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
      </main>

      <Footer />
    </div>
  );
};

export default ReviewsPage;
