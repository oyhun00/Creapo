import React from 'react';
import styled from 'styled-components';
import {
  Navbar, Nav, NavbarBrand, NavItem
} from 'reactstrap';
import HeaderProfile from './HeaderProfile';
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
            <HeaderProfile />
          </NavItems>
        </Nav>
      </HeaderWrap>
    </div>
  );
}

const HeaderWrap = styled(Navbar)`

`;

const NavItems = styled(NavItem)`
  :not(:last-child) {
    margin-right: 12px;
  }

  :hover {
    opacity: 0.7;
  }

`;

export default Header;