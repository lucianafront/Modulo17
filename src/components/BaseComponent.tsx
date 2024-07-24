import React from 'react';


type Base = {
  title: string;
  description: string;
};

const BaseComponent = ({ title, description }: Base) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default BaseComponent;
