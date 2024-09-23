import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppUseContext from './AppUseContext';
import App from './App';
import { LandingPage } from './LandingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/loginUsePropDrilling',
    element: <App />,
  },
  {
    path: '/loginUseContext',
    element: <AppUseContext />,
  },
]);

function Routex() {
  return <RouterProvider router={router} />;
}

export default Routex;
