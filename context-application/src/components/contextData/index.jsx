// src/components/contextData/index.jsx

const CajaContenedora = function({ tema, texto, tag }) {
  return(
    <div>
      <h1>{ tema }</h1>
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
  return(
    <div>
      <span>{ tag }</span>
    </div>
  );
}

export default CajaContenedora;