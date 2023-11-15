import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RedirectIfNotAuthenticated from './RedirectIfNotAuthenticated';
import DashboardPage from '../pages/DashboardPage';
import RedirectIfAuthenticated from './RedirectIfAuthenticated';
import SignUpPage from '../pages/SignUpPage';
import HomePage from '../pages/HomePage';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <RedirectIfNotAuthenticated>
          <DashboardPage />
        </RedirectIfNotAuthenticated>
      ),
      children: [{ index: true, element: <HomePage /> }],
    },
    {
      path: '/signup',
      element: (
        <RedirectIfAuthenticated>
          <SignUpPage />
        </RedirectIfAuthenticated>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
