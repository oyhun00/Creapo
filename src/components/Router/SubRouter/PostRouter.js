import React from 'react';
import Contents from '../../Content';
import { Route } from 'react-router-dom';

const PostRouter = () => (
  <>
    <Route exact path="/board/post" component={Contents.Posting}></Route>
  </>
);

export default PostRouter;
