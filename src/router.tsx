import { createBrowserRouter, Navigate } from 'react-router-dom';
import { App } from './App.tsx';
import { Users } from './pages/users/Users.tsx';
import { Error } from './pages/error/Error.tsx';

export const router = createBrowserRouter( [
  {
    path: '/',
    element: <App/>,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Navigate to="/users" replace/>,
      },
      {
        path: '/users',
        element: <Users />,
      },
    ],
  },
] );
