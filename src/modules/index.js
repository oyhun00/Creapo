import { combineReducers } from 'redux';
import headerDropDown from './Layout/Header/HeaderDropDown';
import GridLayout from './Layout/GridLayout';

import PostReducer from './Post/PostReducer';

export default combineReducers({
  headerDropDown,
  GridLayout,
  PostReducer,
})