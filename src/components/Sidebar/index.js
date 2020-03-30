import React from 'react';
import Contact from './Contact'
import Education from './Education'

export default function Sidebar(props) {
  const { contatos, educacao } = props
  return (
    <aside>
      <div className="sidebar">
        <h3>Contatos</h3>

        <div className="lista-de-contatos">
          {contatos.map(item => (
            <Contact conteudo={item} key={item.id} />
          ))}
        </div>
      </div>

      <div className="sidebar">
        <h3>Educação</h3>
        {educacao.map(item => (
          <Education conteudo={item} key={item.id} />
        ))}
      </div>
    </aside>
  );
}
