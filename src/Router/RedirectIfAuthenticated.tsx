import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

const RedirectIfAuthenticated: FC<PropsWithChildren> = ({ children }) => {
  const redirectTo = '/home';
  const isLoggedIn = localStorage.getItem('isLoggedIn') || false;

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : children;
};

export default RedirectIfAuthenticated;
