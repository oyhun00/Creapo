import { combineReducers } from 'redux';
import HeaderDropDown from './Layout/Header/HeaderDropDown';
import GridLayout from './Layout/GridLayout';

import PostReducer from './Post/PostReducer';

const rootReducer = combineReducers({
  HeaderDropDown,
  GridLayout,

  PostReducer,
});

export default rootReducer;