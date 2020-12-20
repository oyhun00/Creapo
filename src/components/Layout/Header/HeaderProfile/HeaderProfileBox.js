import React from 'react';
import styled from 'styled-components';

const HeaderProfileBox = () => {
  return (
    <>
      <ProfileBoxHeader>
        <h2>어서오세요!</h2>
      </ProfileBoxHeader>
      <ProfileBoxBody>
        Creapo에 회원 가입하시면 더 많은 혜택과 아마 로또가 당첨될걸요?
        <LinkCustom>로그인</LinkCustom>
        <LinkCustom>회원가입</LinkCustom>
      </ProfileBoxBody>
    </>
  );
}

const ProfileBoxHeader = styled.div`
  padding: 1rem 0.5625rem;
  color: #474747;
  background: #fcd661;

  h2 {
    font-size: 1.4rem;
    font-weight: 800;
    margin-bottom: 0;
  }
`;

const ProfileBoxBody = styled.div`
  padding: 0.5625rem;
  color: #474747;
`;

const LinkCustom = styled.a`
  color: #f1bd1f;
  cursor: pointer;
  text-decoration: none !important;

  :hover {
    color: #f1bd1f;
    opacity: 0.7;
  }

  :not(:last-child) {
    margin: 0 0.2rem;
  }
`;

export default HeaderProfileBox;