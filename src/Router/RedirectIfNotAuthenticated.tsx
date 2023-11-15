import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

const RedirectIfNotAuthenticated: FC<PropsWithChildren> = ({ children }) => {
  const redirectTo = '/signup';
  const isLoggedIn = localStorage.getItem('isLoggedIn') || false;

  console.log(isLoggedIn);

  return !isLoggedIn ? <Navigate to={redirectTo} replace /> : children;
};

export default RedirectIfNotAuthenticated;
