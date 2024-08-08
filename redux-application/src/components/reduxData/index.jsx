// src/components/reduxData/index.jsx
import { useSelector, useDispatch } from 'react-redux';
import { nameUpdate  } from '../../redux/userToolkitStore';

const CajaContenedora = function({ tema, texto, tag }) {
  let user = useSelector(state => state.userData);
  let disparador = useDispatch(); 

  return(
    <div>
      <h1>{ tema }</h1>
      <TextoCompleto texto={ texto } tag={ tag } />
      <button onClick={ (e) => { disparador(nameUpdate("Tecguru")) } }> actualizar nombre</button>
    </div>
  );
}

const TextoCompleto = function({ texto, tag }) {
  let user = useSelector(state => state.userData);

  console.log("REDUX state.userData", user);

  return(
    <div>
      { user.name } <br></br>
      { texto }
      <TagPersonal tag={ tag } />
    </div>
  );
}

const TagPersonal = function({ tag }) {
  return(
    <div>
      <span>{ tag }</span> <br></br>
    </div>
  );
}

export default CajaContenedora;