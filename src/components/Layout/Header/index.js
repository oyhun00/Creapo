import React from 'react';
import styled from 'styled-components';
import {
  Navbar, Nav, NavbarBrand, NavItem
} from 'reactstrap';
import HeaderProfileContainer from './HeaderProfile';
import HeaderAlarm from './HeaderAlarm';

const Header = () => {
  return (
    <div>
      <HeaderWrap>
        <NavbarBrand>logo</NavbarBrand>
        <Nav className="ml-auto">
          <NavItems>
            <HeaderAlarm />
          </NavItems>
          <NavItems>
            <HeaderProfileContainer />
          </NavItems>
        </Nav>
      </HeaderWrap>
    </div>
  );
}

const HeaderWrap = styled(Navbar)`
  padding: 1.5rem 2.5rem;
`;

const NavItems = styled(NavItem)`
  :not(:last-child) {
    margin-right: 1rem;
  }
`;

export default Header;