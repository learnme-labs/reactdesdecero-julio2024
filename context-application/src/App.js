// src/App.js
import { useState, useContext } from 'react';

import { ManejadorContextoTema } from './contexts/ContextTema';
import { ManejadorTokenSesion } from './contexts/ContextTema';

import CajaContenedora from './components/contextData';

import './App.css';

function App() {
  let [ tema, setTema ] = useState("dark");
  let [ texto, setTexto ] = useState("Este es un texto enviando por props");
  let [ tag, setTag ] = useState("Oscar Marquez");

  return (
    <> 
      { /* DOM SI podrá leer el contexto */ }
      <ManejadorContextoTema>
        <CajaContenedora texto={ texto } tag={ tag } />

    
        <ManejadorTokenSesion>
          <div name="setting">
          </div>
        </ManejadorTokenSesion>

      </ManejadorContextoTema>

      { /* DOM NO podrá leer el contexto */ }
      { /*<CajaContenedora tema={ tema } texto={ texto } tag={ tag } />*/ }
    </>
  );
}

export default App;
