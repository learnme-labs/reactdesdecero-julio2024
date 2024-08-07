// App.js
import { useState } from 'react';

import ComponenteDeClase from './components/componentClass';
import PageLogin from './components/componentClassLogin';

import './App.css';

function App() {
  let [ contador, setContador ] = useState(0);

  { /* return ( <><PageLogin /> </> ); */ } 

  const componente = ( contador < 4 ) ? <ComponenteDeClase contador={ contador } setContador={ setContador } /> : null; 

  return (
    <> 
      <h1>{ ComponenteDeClase.getName() }</h1> 
      { componente }
    </>
  ) ;
}

export default App;
