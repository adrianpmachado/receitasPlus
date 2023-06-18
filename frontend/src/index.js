import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './global.css'
import Home from './pages/home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <RouterProvider router={router}/>
  </React.StrictMode>
);