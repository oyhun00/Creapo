import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createStore from './store';
import reducers from './reducers';
import MainRouter from './components/Router';

const store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
