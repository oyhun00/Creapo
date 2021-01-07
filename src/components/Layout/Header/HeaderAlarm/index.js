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
  user-select: none;
  width: 0.675em !important;

  :hover {
    opacity: 0.7;
  }

  @media (min-width: 992px) {
    width: 0.8em !important;
  }
`;

export default HeaderAlarm;