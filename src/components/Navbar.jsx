import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';

const Navbar = ({ isAuthenticated = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isAuthPage =
    location.pathname === '/login' || location.pathname === '/signup';

  if (isAuthPage) return null;

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <Logo />
          </Link>

          {/* Desktop + Tablet Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              to="/features"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Features
            </Link>

            <Link
              to="/reviews"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Reviews
            </Link>

            <Link
              to="/about"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              About
            </Link>
          </div>

          {/* Desktop + Tablet Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            {isAuthenticated ? (
              <Link to="/dashboard">
                <Button variant="primary">Dashboard</Button>
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Sign in
                </Link>

                <Link to="/signup">
                  <Button variant="primary">Get Started</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile + Tablet Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile + Tablet Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-3">
              <Link
                to="/features"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
              >
                Features
              </Link>

              <Link
                to="/reviews"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
              >
                Reviews
              </Link>

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
              >
                About
              </Link>

              <div className="flex flex-col gap-3 pt-4 mt-1 border-t border-gray-100">
                {isAuthenticated ? (
                  <Link
                    to="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="w-full"
                  >
                    <Button
                      variant="primary"
                      className="w-full"
                    >
                      Dashboard
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="w-full text-center px-3 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Sign in
                    </Link>

                    <Link
                      to="/signup"
                      onClick={() => setIsOpen(false)}
                      className="w-full"
                    >
                      <Button
                        variant="primary"
                        className="w-full"
                      >
                        Get Started
                      </Button>
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