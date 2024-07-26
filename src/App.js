// src/App.js

// imports...
import TecgurusBoton from './components/tecgurusBoton/index';
import imageLogoReact from './assets/logo512.png';

// constantes
// <empty>

function App ( ) {
  // estados...
  return (
    <>
      <div> <h1>Definiendo  primer componente en REACT</h1></div>
    {
      // PROPS
      // Variables que se envian al componente al momento 
      // del proceso de instanciado en memoria mediante 
      // los atributos clasico de las etiquetas HTML...
      // Definen valores iniciales del componente
    }
    <TecgurusBoton labelButton="Este es un boton💥" />

    <div><img src={ imageLogoReact } /></div>

    </>
  );
}

export default App;
