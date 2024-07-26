// src/components/tecgurusBoton.js
// importar module/package
import { useState } from 'react';

// importando recurso...
//  imagenes
//  json
//  css
//  ...
import './css/estilo.css';


// componentes funcionales
export function TecgurusBotonAlt({ labelButton, handler }) {
  return (<div></div>);
}

export default function TecgurusBotonMain({ labelButton, handler }) {
  // Implementacion de hooks
  //  Definicion de estados
  //  siempre en la parte superior
  //  del componente...
  let [ contador, setContador ] = useState(0);
  let [ texto, setTexto ] = useState(labelButton);

  // Logica del componente...
  function onclickHandler (event, label) {
    setContador(contador+1);    
    setTexto(`Este boton exploto ${contador} veces 💥`);
  }

  return (
    <div className="div-box;">
      {
        // La defincion de funciones dentro del lenguaje
        // JSX sugiere que se realice con una funcion flecha
        // invoca una funcion principal...
      }

      <button onClick={ (event) => { onclickHandler(event, labelButton) } }> :: { texto } ::</button>

      {
        // <button onClick={ (event) => { handler('boton') } }> :: { texto } ::</button>
      }
    </div>
  );
}
