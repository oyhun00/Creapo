import React from 'react';
import { Route } from 'react-router-dom';

import Main from '../Layout';
import Login from '../Content/Login/';

const MainRouter = () => {
  return (
    <>
      <Route exact path="/" component={Main}></Route>
      <Route exact path="/login" component={Login}></Route>
    </>
  )
}

export default MainRouter;