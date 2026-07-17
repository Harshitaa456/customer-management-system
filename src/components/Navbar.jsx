import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';

const Navbar = ({ isAuthenticated = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  if (isAuthPage) return null;

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/features" className="text-gray-600 hover:text-primary transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
              About
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <Link to="/dashboard">
                <Button variant="primary">Dashboard</Button>
              </Link>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-primary transition-colors">
                  Sign in
                </Link>
                <Link to="/signup">
                  <Button variant="primary">Get Started</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <Link to="/features" className="text-gray-600 hover:text-primary transition-colors">
                Features
              </Link>
              <Link to="/pricing" className="text-gray-600 hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                About
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
                {isAuthenticated ? (
                  <Link to="/dashboard">
                    <Button variant="primary" className="w-full">Dashboard</Button>
                  </Link>
                ) : (
                  <>
                    <Link to="/login" className="text-center text-gray-600 hover:text-primary transition-colors">
                      Sign in
                    </Link>
                    <Link to="/signup">
                      <Button variant="primary" className="w-full">Get Started</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
