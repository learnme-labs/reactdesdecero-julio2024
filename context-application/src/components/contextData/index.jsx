// src/components/contextData/index.jsx

import { useContext } from "react";
import { ContextoTema } from "../../contexts/ContextTema";


const CajaContenedora = function({ texto, tag }) {
  const contextoTema = useContext(ContextoTema);
  console.log(contextoTema);

  return(
    <div>
      <h1>{ contextoTema.tema }</h1>
      <TextoCompleto texto={ texto } tag={ tag } />
    </div>
  );
}

const TextoCompleto = function({ texto, tag }) {
  return(
    <div>
      { texto }
      <TagPersonal tag={ tag } />
    </div>
  );
}

const TagPersonal = function({ tag }) {
  const { tema, setTema } = useContext(ContextoTema);

  if ( tema==="dark" ) {
   setTema("light");
  }

  return(
    <div>
      <span>{ tag }</span> <br></br>
      <span>{ tema }</span>
    </div>
  );
}

export default CajaContenedora;