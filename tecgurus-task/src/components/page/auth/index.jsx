// 
import { useState } from 'react';

import CentralViewTemplate from '../../template/central-view';

import './main.css';


// == Formularios React ==
const PageLogin = function() {
  let [ username, setUsername] = useState("");
  let [ password, setPassword ] = useState("");

  // handler para evento 'submit' 
  // de un formulario
  async function submitHandler(event) {
    console.log(event);

    // event.preventDefault()
    //    metodo especial de la clase Event que permite interrumpir el action
    //    clasico del evento sediendo el  control al mensajor de eventos (handler)...
    event.preventDefault();

    let options = {
      method: 'POST',         // all method-HTTP (GET*, POST, PUT, DELETE, etc...)
      headers: { 
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(
        {
          "username": username,
          "password": password
        }
      )
    };
    try {
      let response = await fetch(""/* URL */, options);

      // if ( response.status===200 ) {        // validacion clasica: validando el codigo HTTP devuelto por el servicio
      if ( response.ok ) {                     // validacion con response-object: proporcionan elementos clasicos para trabajar con protocolo HTTP
        let data = response.json();

        console.log("data-response:", data);

        //
        // PENDIENTE POR COMPLETAR
        //
        
      }
    } catch (err) {
      console.error(err);
    }
  }

  // Componentes controlados...
  //    Es un tipo especial de componente que autogestiona sus cambios de
  //    estado.
  //    En contraparte "Componentes no controlados" seran aquellos que no 
  //    gestion su estado y obtiene las definiciones a partir de los 
  //    elementos del DOM.
  //      <img src="" width="500">
  function usernameChangeHanlder(event) {
    // console.log(event);
    setUsername(event.target.value);
  }

  let formLogin = (
    <div>
      <form onSubmit={ (e) => { submitHandler(e) } }>
        <input 
          type="email" 
          name="username"
          onChange={ (e) => { usernameChangeHanlder(e) } }
          required
        />
        <input 
          type="password"
          name="password"
          onChange={ (e) => { setPassword(e.target.value) } }
          required
        />
        <button type="submit">Iniciar sesion</button>
      </form>
    </div>
  );

  return (
    <CentralViewTemplate>
      { formLogin }
    </CentralViewTemplate>
  );
}

export default PageLogin;