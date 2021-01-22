import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { bindActionsCreators } from 'redux';
import * as HeaderActions from '../../../../reducers/Layout/Header/HeaderDropDown'

import * as actions from '../../../../actions/HeaderDropDown';

import styled from 'styled-components';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import HeaderProfileBox from './HeaderProfileBox';

const HeaderProfile = (a,b) => {
  console.log(a,b)
  const { isOpen } = useSelector((state) => state.HeaderDropDown);

  const dispatch = useDispatch();
  const dropDown = useCallback(() => {
    dispatch(actions.HeaderDropDown());
  }, [dispatch]);

  useEffect(() => {
  }, []);

  return (
    <Dropdown isOpen={isOpen} toggle={dropDown}>
      <DropdownToggle tag="div" data-toggle="dropdown" aria-expanded={isOpen}>
        <ProfileIcons icon={faUser} />
      </DropdownToggle>
      <DropdownMenuCustom right>
        <HeaderProfileBox />
      </DropdownMenuCustom>
    </Dropdown>
  );
}

const ProfileIcons = styled(FontAwesomeIcon)`
  color: #bdbdbd;
  cursor: pointer;
  user-select: none;
  width: 0.675em !important;

  :hover {
    opacity: 0.7;
  }

  @media (min-width: 992px) {
    width: 0.8em !important;
  }
`;

const DropdownMenuCustom = styled(DropdownMenu)`
  padding: 0;
  font-size: 0.4rem;
  width: 14rem;
  border: 0;
  box-shadow: 0 5px 13px 0px rgba(252, 214, 97, 0.54);

  @media (min-width: 768px) {
    font-size: 0.8rem;
    width: 20rem;
  }

  @media (min-width: 992px) {
    width: 24rem;
  }

  @media (min-width: 1200px) {
  }
`;

export default HeaderProfile;