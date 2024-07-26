// src/App.js

// imports...
import TecgurusBotonMain from './components/tecgurusBoton/index';
import TecgurusImagenMain from './components/tecgurusImagen/index';
import imageLogoReact from './assets/logo512.png';

function alerta (name ) {
  alert('Invocado desde: ' + name);
}

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
    {
      // <TecgurusBotonMain labelButton="Este es un boton💥" handler={ alerta }/>
    }

    <TecgurusImagenMain pathImagen={ imageLogoReact }/>

    </>
  );
}

export default App;
