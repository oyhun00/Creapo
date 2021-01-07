import React from 'react';
import Header from './Header';
import SwitchRouter from '../Router/Switch';
import { BrowserRouter } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <SwitchRouter />
      </BrowserRouter>
    </>
  );
}

export default Main;
