import { combineReducers } from 'redux';
import headerDropDown from './Layout/Header/HeaderDropDown';
import GridLayout from './Layout/GridLayout';
import RouterReducer from "./Util/RouterReducer";
import PostReducer from './Post/PostReducer';
import PostingReducer from './Content/Post/PostingReducer';

export default combineReducers({
  RouterReducer,
  headerDropDown,
  GridLayout,
  PostReducer,
  PostingReducer,
})