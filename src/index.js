// src/index.js

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

// INSTANCIANDO APLICACION...
//  Crear punto de partida "root" 
//  para la carga/renderizado de 
//  la aplicacion...
const root = createRoot(document.getElementById('init'));

root.render(
  // Bloque solo activo cuando
  //    NODE_ENV != 'production'
  <StrictMode>
    <div>
      Primer proceso de rendering con REACT... 😊
    </div>
    <App />
  </StrictMode>
);