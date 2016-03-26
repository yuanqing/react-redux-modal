import React from 'react';

export default ({title, description}) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{description}</div>
    </div>
  );
};
