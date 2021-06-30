import React from 'react';
import { MainNav } from './MainNav/MainNav';


export const Layout: React.FC = (props) => {
  return (
    <>
      <MainNav />
      <main className="main">
        {props.children}
      </main>
    </>
  );
};