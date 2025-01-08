import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Cart from './view/Cart.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // { index: true, element: <DefaultProfile /> },
      // { path: "product/:id", element: <Spinach /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
    ,
  </StrictMode>
);
