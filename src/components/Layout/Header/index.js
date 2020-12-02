import React from 'react';
import styled from 'styled-components';
import {
  Container, Navbar, NavbarBrand, NavItem
} from 'reactstrap';
import HeaderRight from './HeaderRight';

const Header = () => {
  return (
    <HeaderWrap fluid={true}>
      <Navbar>
        <NavbarBrand>logo</NavbarBrand>
        <NavItem>
          <HeaderRight />
        </NavItem>
      </Navbar>
    </HeaderWrap>
  );
}

const HeaderWrap = styled(Container)`

`;

export default Header;