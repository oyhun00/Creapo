import React from 'react';

const Creation = ({ data }) => {
  const { text } = data; 
  return (
    <div className="grid-item">{text}</div>
  );
}

export default Creation;