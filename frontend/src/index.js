import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './global.css'

import Home from './pages/home'
import Receitas from './pages/receitas';
import Ingredientes from './pages/ingredientes';
import Configuracoes from './pages/configuracoes';
import IngredienteAdd from './pages/ingredientes/ingredienteAdd';
import IngredienteEdit from './pages/ingredientes/ingredienteEdit';
import ReceitaAdd from './pages/receitas/receitaAdd';
import ReceitaShow from './pages/receitas/receitaShow';

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
    path: "/receitas/receitaAdd",
    element: <ReceitaAdd />
  },
  {
    path: "/receitas/receitaShow/:id",
    element: <ReceitaShow />
  },
  {
    path: "/configuracoes",
    element: <Configuracoes />
  },
  {
    path: "/ingredientes",
    element: <Ingredientes />
  },
  {
    path: "/ingredientes/ingredienteAdd",
    element: <IngredienteAdd />
  },
  {
    path: "/ingredientes/ingredienteEdit/:id",
    element: <IngredienteEdit />
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <RouterProvider router={router}/>
  </React.StrictMode>
);