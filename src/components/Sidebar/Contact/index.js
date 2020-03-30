import React from 'react';

export default function Contact(props) {
  const { conteudo } = props
  return (
    <li>
      <div className="item-contato">
        <h4>{conteudo.tipo}</h4>
        <p>{conteudo.contato}</p>
      </div>
    </li>
  );
}
