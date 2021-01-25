import { createStore } from 'redux';
import reducers from '../reducers';

const configure = () => {
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  const store = createStore(reducers, devTools);

  return store;
}

export default configure;