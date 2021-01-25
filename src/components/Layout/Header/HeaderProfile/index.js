import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { headerDropDown } from '../../../../modules/Layout/Header/HeaderDropDown';

import HeaderProfile from './HeaderProfile';


const HeaderProfileContainer = () => {
  const isOpen = useSelector(state => state.isOpen);

  const dispatch = useDispatch();
  const onToggle = () => dispatch(headerDropDown());

  // const mapStateToProps = (state) => ({
  //   isOpen: state.isOpen,
  // })
  //
  // const mapDispatchToProps = (dispatch) => {
  //   return bindActionCreators(HeaderActions, dispatch);
  // }
  //
  //
  return (
    <HeaderProfile isOpen={isOpen} onToggle={onToggle} />
  );
}


export default HeaderProfileContainer;