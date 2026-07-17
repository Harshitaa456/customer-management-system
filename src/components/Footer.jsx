import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-gray-600 text-sm">
              Modern customer management system for growing businesses.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[#0F172A] mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-600 hover:text-primary text-sm">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-primary text-sm">Pricing</Link></li>
              <li><Link to="/integrations" className="text-gray-600 hover:text-primary text-sm">Integrations</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#0F172A] mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-primary text-sm">About</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-primary text-sm">Blog</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-primary text-sm">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#0F172A] mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-600 hover:text-primary text-sm">Privacy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-primary text-sm">Terms</Link></li>
              <li><Link to="/security" className="text-gray-600 hover:text-primary text-sm">Security</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100 text-center text-gray-600 text-sm">
          <p>&copy; 2024 Aventra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
