import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './styles/index.css';
import { router } from './router.tsx';

createRoot( document.getElementById( 'root' )! ).render(
  <StrictMode>
      <RouterProvider router={ router }/>
  </StrictMode>,
);
