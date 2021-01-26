import React from 'react';
import styled from 'styled-components';
import {
  Container, Row, Col
} from 'reactstrap';
import HeaderProfileContainer from './HeaderProfile';

const Header = () => {
  return (
    <CustomContainer fluid={true}>
      <Row>
        <HeaderLeft xs="4">
        </HeaderLeft>
        <HeaderCenter xs="4">
          <TitleLogo>CREAPO</TitleLogo>
        </HeaderCenter>
        <HeaderRight xs="4">
          <HeaderProfileContainer />
        </HeaderRight>
      </Row>
    </CustomContainer>
  );
}

const CustomContainer = styled(Container)`

  @media (min-width: 768px) {
    width: 95%;
  }

  @media (min-width: 992px) {
    width: 90%;
  }

  @media (min-width: 1200px) {
    width: 90%;
    padding: 2rem 0;
  }
`;

const HeaderLeft = styled(Col)`
  text-align: left;
`;

const HeaderCenter = styled(Col)`
  text-align: center;
`;

const HeaderRight = styled(Col)`
  text-align: right;
`;

const TitleLogo = styled.h2`
  color: #fff;
`;

export default Header;