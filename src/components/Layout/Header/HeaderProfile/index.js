import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const HeaderProfile = () => {
  return (
    <div>
      <ProfileIcons icon={faUser} />
    </div>
  );
}

const ProfileIcons = styled(FontAwesomeIcon)`
  color: #bdbdbd;
  cursor: pointer;
`;

export default HeaderProfile;