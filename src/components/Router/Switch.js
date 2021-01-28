import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import Contents from '../Content';
import SubRouter from '../Router/SubRouter';

const SwitchRouter = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={Contents.ContentMain}></Route>
      <Route exact={true} path="/hello" component={Contents.Creation}></Route>

      <Route exact={false} path="/board/post" component={SubRouter.PostRouter}></Route>
    </Switch>
  )
}

export default SwitchRouter;