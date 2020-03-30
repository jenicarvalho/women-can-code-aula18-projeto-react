import React, { Component } from 'react';
import Header from '../Header'
import Sidebar from '../Sidebar'
import Experience from '../Experience'

export default class Resume extends Component {

  state = {
    infos: [
      {
        nome: 'Jeniffer Prof',
        ocupacao: 'Dev e Teacher',
        resumo: '20 e tantos, casada e com 2 gatos (Neo e Farofa)',
        perfilProfissional: 'Desenvolvo até altas horas, toco violão meia boca e nunca pude ter uma guitarra. Também gosto de ensinar tudo que sei.',
        contatos: [
          {
            id: 1,
            tipo: 'telefone',
            contato: '19 0000-0000'
          },
          {
            id: 2,
            tipo: 'email',
            contato: 'nome@dev.com'
          }
        ],
        educacao: [
          {
            id: 1,
            instituicao: 'EMEF',
            curso: 'Ensino basico'
          },
          {
            id: 2,
            instituicao: 'ETEC',
            curso: 'Como ser dev'
          }
        ],
        experiencia: [
          {
            id: 1,
            cargo: 'Front end',
            periodo: 'Agosto 2019',
            empresa: 'NASA',
            local: 'Nova York',
            conteudo: 'Fazia nada e ganhava bem',
            atual: true
          },
          {
            id: 2,
            cargo: 'Full stack',
            periodo: 'Agosto 2018 - Agosto 2019',
            empresa: 'CIA',
            local: 'Boston',
            conteudo: 'Fazia nada e ganhava mal',
            atual: false
          }
        ]
      }
    ]
  }

  render() {
    const infos = this.state.infos[0]

    return (
      <main>
        <Header conteudo={infos} />
        <Sidebar contatos={infos.contatos} educacao={infos.educacao} />
        <Experience experiencia={infos.experiencia} />
      </main>
    );
  }
}
