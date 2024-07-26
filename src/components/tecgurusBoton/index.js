// src/components/tecgurusBoton.js
import { useState } from 'react';

// importando recurso...
//  imagenes
//  json
//  css
//  ...
import './css/estilo.css';


export default ({ labelButton }) => {
  // Definicion de estados
  // siempre en la parte superior
  // del componente...
  let [ contador, setContador ] = useState(0);
  let [ texto, setTexto ] = useState(labelButton);


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
    </div>
  );
}
