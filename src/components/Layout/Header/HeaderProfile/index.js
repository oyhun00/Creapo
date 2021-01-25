import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as HeaderActions from '../../../../reducers/Layout/Header/HeaderDropDown';
import HeaderProfile from './HeaderProfile';


const HeaderProfileContainer = () => {
  const mapStateToProps = (state) => ({
    isOpen: state.isOpen,
  })
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(HeaderActions, dispatch);
  }
  
  
  return (
    <HeaderProfile props={mapStateToProps, mapDispatchToProps} />
  );
}


export default HeaderProfileContainer;