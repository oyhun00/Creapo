import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';
import reducers from './reducers';
import Header from './components/Layout/Header';
import ContentMain from './components/Content';
import Login from './components/Content/Login';

const store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
      {/* <Header />
      <ContentMain /> */}
      <Login />
    </Provider>
  );
}

export default App;
