import { combineReducers } from 'redux';
import HeaderDropDown from './Layout/Header/HeaderDropDown';
import GridLayout from './Layout/GridLayout';

import PostReducer from './Post/PostReducer';

export default combineReducers({
  HeaderDropDown,
  GridLayout,
  PostReducer,
})
