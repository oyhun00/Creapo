import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { headerDropDown } from '../../../../modules/Layout/Header/HeaderDropDown';
import HeaderProfile from './HeaderProfile';

const HeaderProfileContainer = () => {
  const isOpen = useSelector(({headerDropDown}) => headerDropDown.isOpen, []);

  const dispatch = useDispatch();
  const onToggle = () => dispatch(headerDropDown());

  return (
    <HeaderProfile isOpen={isOpen} onToggle={onToggle} />
  );
}

export default HeaderProfileContainer;