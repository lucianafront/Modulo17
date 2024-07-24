import React from 'react';

type BaseExtensao<T> = {
  data: T[];
  title: string;
  description: string;
  valiation: number;
};

type ExtendedProps<T> = {
  base: BaseExtensao<T>;
  additionalInfo: string | number;
  tipo: 'música' | 'filme' | 'livro';
};


const ExtendedComponent = ({base, additionalInfo, tipo }:ExtendedProps<string> ) => {

  const popular = base.valiation > 10;

  return (
    <div>
      <h1>{base.title}</h1>
      <p>{base.description}</p>
      <p>{additionalInfo}</p>
      <p>{tipo}</p>

      <ul>
        {base.data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {popular && <p>Este {tipo} é popular</p>}
    </div>
  );
};

export default ExtendedComponent;
