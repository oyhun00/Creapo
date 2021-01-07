import { combineReducers } from 'redux';
import HeaderDropDown from './Layout/Header/HeaderDropDown';
import GridLayout from './Layout/GridLayout';

const rootReducer = combineReducers({
  HeaderDropDown,
  GridLayout,
});

export default rootReducer;