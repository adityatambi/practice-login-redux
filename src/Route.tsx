import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppUseContext from './AppUseContext';
import App from './App';
import { LandingPage } from './LandingPage';
import AppUseRedux from './AppRedux';

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
  {
    path: '/loginUseRedux',
    element: <AppUseRedux />,
  },
]);

function Routex() {
  return <RouterProvider router={router} />;
}

export default Routex;
