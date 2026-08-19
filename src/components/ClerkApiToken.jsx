import { useLayoutEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';
import { setAuthTokenGetter } from '../api/customers';

export default function ClerkApiToken() {
  const { getToken } = useAuth();

  useLayoutEffect(() => {
    setAuthTokenGetter(getToken);
    return () => setAuthTokenGetter(undefined);
  }, [getToken]);

  return null;
}