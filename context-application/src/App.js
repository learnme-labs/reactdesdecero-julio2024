// src/App.js
import { useState, useContext } from 'react';

import CajaContenedora from './components/contextData';

import './App.css';

function App() {
  let [ tema, setTema ] = useState("dark");
  let [ texto, setTexto ] = useState("Este es un texto enviando por props");
  let [ tag, setTag ] = useState("Oscar Marquez");

  return (
    <> 
    {
    /* DOM SI podrá leer el contexto */
    }
      <CajaContenedora tema={ tema } texto={ texto } tag={ tag } />

    {
    /* DOM NO podrá leer el contexto */
    }
      <CajaContenedora tema={ tema } texto={ texto } tag={ tag } />
    </>
  );
}

export default App;
