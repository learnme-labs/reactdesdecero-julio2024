// src/components/reduxData/index.jsx
import { useSelector, useDispatch } from 'react-redux';


const CajaContenedora = function({ tema, texto, tag }) {
  return(
    <div>
      <h1>{ tema }</h1>
      <TextoCompleto texto={ texto } tag={ tag } />
    </div>
  );
}

const TextoCompleto = function({ texto, tag }) {
  let userObject = useSelector(state => state.userObject.value);
  console.log(userObject);

  return(
    <div>
      { userObject.user }
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