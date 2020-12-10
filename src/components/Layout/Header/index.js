import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {
  Container, Navbar, NavbarBrand, NavItem
} from 'reactstrap';
import HeaderRight from './HeaderRight';

const Header = () => {
  const loadData_Promise = async () => {
    try {
      await axios.get('http://localhost:3002/api');
    } catch(err) {
      console.log(err);
    }
  }


  useEffect(() => {
    loadData_Promise();
  }, []);

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