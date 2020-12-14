import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const HeaderAlarm = () => {
  return (
    <div>
      <BellIcons icon={faBell} />
    </div>
  );
}

const BellIcons = styled(FontAwesomeIcon)`
  color: #bdbdbd;
  cursor: pointer;
`;

export default HeaderAlarm;