import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import AuthEntryLink from './AuthEntryLink';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isLoaded, isSignedIn } = useAuth();
  const isAuthenticated = isLoaded && isSignedIn;
  const isAuthPage =
    location.pathname === '/login' || location.pathname === '/signup';

  if (isAuthPage) return null;

  return (
    <nav className="bg-sidebar border-b border-border sticky top-0 z-50 shadow-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-sidebar-foreground transition-opacity duration-200 hover:opacity-90">
            <Logo />
          </Link>

          {/* Desktop + Tablet Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              to="/features"
              className="text-sidebar-foreground hover:text-accent transition-all duration-200 hover:scale-105"
            >
              Features
            </Link>

            <Link
              to="/reviews"
              className="text-sidebar-foreground hover:text-accent transition-all duration-200 hover:scale-105"
            >
              Reviews
            </Link>

            <Link
              to="/about"
              className="text-sidebar-foreground hover:text-accent transition-all duration-200 hover:scale-105"
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
                <AuthEntryLink
                  mode="login"
                  className="text-sidebar-foreground hover:text-accent transition-all duration-200 hover:scale-105"
                >
                  Sign in
                </AuthEntryLink>

                <AuthEntryLink mode="signup">
                  <Button variant="primary">Get Started</Button>
                </AuthEntryLink>
              </>
            )}
          </div>

          {/* Mobile + Tablet Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-sidebar-foreground hover:bg-sidebar-hover transition-all duration-200 ease-smooth hover:shadow-soft"
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
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              <Link
                to="/features"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-sidebar-foreground hover:text-accent-foreground hover:bg-sidebar-hover rounded-lg transition-colors"
              >
                Features
              </Link>

              <Link
                to="/reviews"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-sidebar-foreground hover:text-accent-foreground hover:bg-sidebar-hover rounded-lg transition-colors"
              >
                Reviews
              </Link>

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-sidebar-foreground hover:text-accent-foreground hover:bg-sidebar-hover rounded-lg transition-colors"
              >
                About
              </Link>

              <div className="flex flex-col gap-3 pt-4 mt-1 border-t border-border">
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
                    <AuthEntryLink
                      mode="login"
                      onClick={() => setIsOpen(false)}
                      className="w-full text-center px-3 py-2 text-sidebar-foreground hover:text-accent hover:bg-sidebar-hover rounded-lg transition-colors"
                    >
                      Sign in
                    </AuthEntryLink>

                    <AuthEntryLink
                      mode="signup"
                      onClick={() => setIsOpen(false)}
                      className="w-full"
                    >
                      <Button
                        variant="primary"
                        className="w-full"
                      >
                        Get Started
                      </Button>
                    </AuthEntryLink>
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