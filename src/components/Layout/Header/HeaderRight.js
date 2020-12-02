import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell } from '@fortawesome/free-solid-svg-icons';

const HeaderRight = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faBell} />
      <FontAwesomeIcon icon={faUser} />
    </div>
  );
}

export default HeaderRight;