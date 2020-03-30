import React from 'react';

export default function Education(props) {

  const { conteudo } = props

  return (
    <div className="lista-de-formacao">
      <li>
        <h4>{conteudo.instituicao}</h4>
        <p>{conteudo.curso}</p>
      </li>
    </div>
  );
}
