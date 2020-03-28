import React from "react";
import "./style.css"

// COLOQUE ESSE CÓDIGO NO SEU COMPONENTE DE CLASSE
// state = {
//   [
//     {
//       nome: 'Seu nome',
//       ocupacao: 'Developer',
//       resumo: '20 anos, solteira e vida loca.',
//       perfilProfissional: 'Faço miojo bom',
//       contatos: [
//         {
//           id: 1,
//           tipo: 'telefone',
//           contato: '19 0000-0000'
//         },
//         {
//           id: 2,
//           tipo: 'email',
//           contato: 'nome@dev.com'
//         }
//       ],
//       educacao: [
//         {
//           id: 1,
//           instituicao: 'EMEF',
//           curso: 'Ensino basico'
//         },
//         {
//           id: 2,
//           instituicao: 'ETEC',
//           curso: 'Como ser dev'
//         }
//       ],
//       experiencia: [
//         {
//           id: 1,
//           cargo: 'Front',
//           periodo: 'Agosto 2019',
//           empresa: 'NASA',
//           local: 'Nova York',
//           conteudo: 'Fazia nada e ganhava bem',
//           atual: true
//         },
//         {
//           id: 2,
//           cargo: 'Back',
//           periodo: 'Agosto 2018 - Agosto 2019',
//           empresa: 'CIA',
//           local: 'Boston',
//           conteudo: 'Fazia nada e ganhava mal',
//           atual: false
//         }
//       ]
//     }
//   ]
// }

// quebre esse código em outros componentes e importe os componentes aqui
function App() {
  return (
    <main>
      <div className="perfil">
        <img src="https://www.w3schools.com/w3images/avatar6.png" alt="Perfil" />
      </div>
      <div className="biografia">
        <h1>
          Seu <br /> Nome
        </h1>
        <div className="ocupacao">Developer</div>
        <p>18 anos, solteira e vida loca.</p>
      </div>

      <div className="titulo">
        Perfil <br /> Profissional
      </div>

      <div className="perfil-profissional">
        <p>
          Faço nada da vida
        </p>
      </div>
      <aside>
        <div className="sidebar">
          <h3>Contatos</h3>

          <div className="lista-de-contatos">
            <li>
              <div className="item-contato">
                <h4>TELEFONE</h4>
                <p>(19) 0000-0000</p>
              </div>
            </li>
          </div>
        </div>

        <div className="sidebar">
          <h3>Educação</h3>
          <div className="lista-de-formacao">
            <li>
              <h4>Faculdade da vida</h4>
              <p>Uniesquina 2014 - 2018</p>
            </li>
            <li>
              <h4>EMEF</h4>
              <p>Qualquer lugar 2012 - 2013</p>
            </li>
          </div>
        </div>
      </aside>
      <div className="experience">
        <h2>Experiência Profissional</h2>

        <div className="experience-item">
          <div>
            <h4>Developer</h4>
            <date>Novembro 2019 - Atualmente</date>

            <strong>Empresa da hora</strong>
            <span>Valinhos - São Paulo</span>
          </div>
          <p>
            Fazia nada
        </p>
        </div>
        <div className="experience-item">

          <div>
            <h4>Developer</h4>
            <date>Agosto 2019 - Novembro 2019</date>

            <strong>Empresa estranha</strong>
            <span>Vinhedo - São Paulo</span>
          </div>
          <p>
            Fazia menos
        </p>
        </div>

        <button>Mostrar atual</button>
      </div>
    </main>
  );
}

export default App;
