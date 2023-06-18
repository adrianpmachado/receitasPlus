import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './global.css'
import Home from './pages/home'
import Receitas from './pages/receitas';
import Ingredientes from './pages/ingredientes';
import Configuracoes from './pages/configuracoes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/receitas",
    element: <Receitas />
  },
  {
    path: "/ingredientes",
    element: <Ingredientes />
  },
  {
    path: "/configuracoes",
    element: <Configuracoes />
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <RouterProvider router={router}/>
  </React.StrictMode>
);