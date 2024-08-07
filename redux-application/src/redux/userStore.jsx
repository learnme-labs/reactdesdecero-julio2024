//

// R E D U X
//
// Store      espacio en memoria para 
//            la definicion de variables
// Actions    defincion de funciones que 
//            modifican el valor de los
//            elementos de la tienda
import { createStore } from 'redux';

// template de los datos en la tienda
const userdata = {
  user: null,
  nickname: null,
  mail: null
};

// Funcion manejadora de la tienda
//    action              lista de funciones que modifican 
//                        los valores de la tienda (store)...
//        action.type           nombre del "action"
//        action.payload        datos necesarios
function userActions(state = userdata, action) {
  switch (action.type) {
    case "mailUpdate":
      return { ...state, ...action.payload };
      break;

    case "nicknameUpdate":
      return { ...state, ...action.payload };
      break;

    default:
        return state;
      break;
  }
}

// creando "store"
const tienda = createStore(userActions);

export default tienda;