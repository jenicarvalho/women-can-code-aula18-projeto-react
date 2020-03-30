import React, { Component } from 'react';

export default class Experience extends Component {

  state = {
    // coloco no meu state o que eu recebi VIA PROPS
    arrayDeExperiencias: this.props.experiencia
  }

  showCurrentJob = () => {
    this.setState({
      // atualizo o meu state com os dados filtrados
      arrayDeExperiencias: this.state.arrayDeExperiencias.filter(item => item.atual)
    })
  }

  render() {

    return (
      <div className="experience">
        <h2>Experiência Profissional</h2>

        {this.state.arrayDeExperiencias.map(item => (
          <div className="experience-item" key={item.id}>
            <div>
              <h4>{item.cargo}</h4>
              <date>{item.periodo}</date>

              <strong>{item.empresa}</strong>
              <span>{item.local}</span>
            </div>
            <p>
              {item.conteudo}
            </p>
          </div>
        ))}

        <button onClick={this.showCurrentJob}>Mostrar atual</button>
      </div >
    );
  }
}
