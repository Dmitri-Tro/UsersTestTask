import { createBrowserRouter, Navigate } from 'react-router-dom';
import { App } from './App.tsx';

export const router = createBrowserRouter( [
  {
    path: '/',
    element: <App/>,
    errorElement: <div>Error page</div>,
    children: [
      {
        index: true,
        element: <Navigate to="/users" replace/>,
      },
      {
        path: '/users',
        element: <div>Users page</div>,
      },
    ],
  },
] );
