import { Header } from './components/common/header/Header.tsx';
import { Outlet } from 'react-router-dom';
import { FC } from 'react';

export const App: FC = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  );
};
