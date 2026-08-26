import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-gray-600 text-sm">
              Modern customer management system for growing businesses.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[#0F172A] mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm flex items-center gap-2">
                <span className="font-medium">Phone:</span> +91 98765 XXXXX
              </li>
              <li className="text-gray-600 text-sm flex items-center gap-2">
                <span className="font-medium">Email:</span> contact@aventra.com
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100 text-center text-gray-600 text-sm">
          <p>&copy; 2026 Aventra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
