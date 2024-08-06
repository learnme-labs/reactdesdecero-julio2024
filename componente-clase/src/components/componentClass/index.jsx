// src/components/componentClass/index.js
import { Component } from "react";

class ComponenteDeClase extends Component {
  // metodo constructor():
  //    inicia el ciclo de vida del componente
  //    invocando la instancia superior de la 
  //    clase "React.Component"...
  constructor(props) {
    // invivacion del metodo constructor
    // de la clase superior "React.Component"
    super(props);
    this.state = {
      contador: 0
    };
  }

  // CICLO DE VIDA DEL COMPONENTE

  // invicado cuando el componente se rederiza 
  // por primera vez en la estructura del 
  // documento DOM...
  componentDidMount() {
    console.log("componente montado por primera vez... SUCCESS!!", this.state);
  }

  // invocado posterior a una actualizacion 
  // del componente a causa de cambios en 
  // los estados del componente (this.state)...
  componentDidUpdate(prevProps, prevState) {
    console.log("actualizacion del componente... SUCCESS!!", prevProps, prevState);
  }

  // permite determinar si el componente 
  // entrara a un nuevo proceso de
  // actualizacion. Retorna 'true' si el
  // componente va a ser actualizado, 
  // en caso contrario se retorna 'false'...
  shouldComponentUpdate(nextProp, nextState) {
    console.log(this.state, nextState);

    return true;
  }

  // invocado cuando el componente es
  // desmontado y eliminado de la estructura
  // del documento DOM...
  componentWillUnmount() {
    console.log("componente desmontado... SUCCESS!!");
  }


  // Metodo de instancia
  clickHandler(e) {
    this.setState({ contador: this.state.contador+1 });
  }

  render() {
    return (
      <div>
        <h3>Numero de click's realizados hasta ahora: { this.state.contador }</h3>
        <button onClick={ (e) => { this.clickHandler(e) } }>Clickeame !!</button>
      </div>
    );
  }

  // Metodo estatico
  static getName( ) {
    return "Componente de clase";
  }
}

export default ComponenteDeClase;