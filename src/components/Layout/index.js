import React from 'react';
import Header from './Header';
import SwitchRouter from '../Router/Switch';

const Main = () => {
  return (
    <>
      <Header />
      <div>
        <SwitchRouter />
      </div>
    </>
  );
}

export default Main;
