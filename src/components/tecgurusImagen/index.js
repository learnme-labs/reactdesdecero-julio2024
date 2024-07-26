// src/components/tecgurusImage/index.js
import { useState, useRef } from "react";

import './estilos.css';

export default function TecgurusImagenMain({ pathImagen }) {
  let [ lista, setLista ]= useState([]);
  // let item = "elemento 1";        // pertenece al bloque "function" pero no al componente
  let item = useRef(0);           // pertenece a la construccion del componente

  function nuevoElemento () {
    item.current = item.current+1;
    
    const TIMESTAMP = Date.now();
    const data = {
      id: TIMESTAMP,
      data: `${item.current} -> key:${TIMESTAMP}`
    }

    // Esto no renderiza por concepto de valor/referencia !!
    // lista.push(data);
    // setLista(lista);

    // Cambio correcto en el estado 
    setLista([...lista, data]);
  }

  // construyendo listas en JSX...
  //  * cada elemento de la lista debe contener un atributo "key"
  //  * "key" solo puede ser numero o cadenas
  //  * "key" debe ser unico a nivel de componente
  //  * no se recomienda usar el indice de un ciclo de iteracion como "key"
  //  * "key" no de ser calculado en tiempo de ejecución (ej: key=random())
  //
  // si no se implementa la clave "key" en la generacion de una lista
  // React por defecto tomara el indice de la lista
  let listaElementos = lista.map((elemento) => {
    return <li key={ elemento.id } id={ elemento.id } >{ elemento.data}</li>
  });

  // *  definicion de valores o calculos jamas deben ser 
  //    realizados en el proceso de renderin
  return (
    <div className="div-main">

      <div className="div-head">
        <img 
          onClick={ () => { nuevoElemento() }}
          className="image-main"
          src={ pathImagen } 
        />
      </div>

      <div className="div-body">
        <ul>
          { 
            listaElementos
          }
        </ul>
      </div>
    </div>
  );
}