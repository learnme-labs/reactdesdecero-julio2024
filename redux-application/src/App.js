//
import { useState } from 'react';
import { Provider } from 'react-redux';
import tiendaUsuario from './redux/userToolkitStore';

import CajaContenedora from './components/reduxData';

import './App.css';


function App() {
  return (
    <>
      <Provider store={ tiendaUsuario }>
        <CajaContenedora tema="dark" texto="texto enviado por PROPS" tag="oskrmarolv" />
      </Provider>
    </>
  );
}

export default App;
