import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import Contents from '../Content';

const SwitchRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Contents.ContentMain}></Route>
      <Route exact path="/hello" component={Contents.Creation}></Route>
    </Switch>
  )
}

export default SwitchRouter;