import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

/**
 * Routes signed-in users to the dashboard; otherwise to login or signup.
 */
const AuthEntryLink = ({ mode = 'signup', className = '', children, ...props }) => {
  const { isLoaded, isSignedIn } = useAuth();
  const authPath = mode === 'signup' ? '/signup' : '/login';
  const to = isLoaded && isSignedIn ? '/dashboard' : authPath;

  return (
    <Link to={to} className={className} {...props}>
      {children}
    </Link>
  );
};

export default AuthEntryLink;
