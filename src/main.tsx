import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './styles/index.css';
import { router } from './router.tsx';
import { store } from './store/store.ts';

createRoot( document.getElementById( 'root' )! ).render(
  <StrictMode>
      <Provider store={store}>
        <RouterProvider router={ router }/>
      </Provider>
  </StrictMode>,
);
