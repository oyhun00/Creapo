import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';
import reducers from './reducers';
import Header from './components/Layout/Header';
import ContentMain from './components/Content';

const store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <ContentMain />
    </Provider>
  );
}

export default App;
