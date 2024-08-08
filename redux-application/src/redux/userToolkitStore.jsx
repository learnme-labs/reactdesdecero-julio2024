//
import { configureStore, createSlice } from "@reduxjs/toolkit";

// * nombre variable de estado global
// * estado inicial
// * reducers (operaciones sobre el estado)
const userSlice = createSlice(
  {
    name: "userData",
    initialState: {
      name: "Oscar", 
      nickname: null,
      email: null
    },
    reducers: {
      // Funcion pura:
      //    aquella que no modifica 
      //    el valor de sus argumento
      //    por lo que se centra en el valor 
      //    de retorno
      //
      // correcto:
      //  function f (data) { return { ...data } }
      //
      // incorrecto:
      //  function f (data) { data.name = null }
      //
      nameUpdate: (state, action) => {
        console.log(state, action);

        // incorrecto
        //  state.name = action.payload

        // correcto
        return { ...state, ...{ name:action.payload } };
      },
      emailUpdate: (state, action) => {
        return new Promise((resolve, reject) => { resolve(state) });
      },
      nicknameUpdate: (state, action) => {
        return state;
      }
    }
  }
);

// const settingSlice = createSlice(...);

const tiendaUsuario = configureStore({
  reducer: {
    userData: userSlice.reducer
    // userSetting: settingSlice.reducer
  }
});

export const { nameUpdate, emailUpdate } = userSlice.actions;
export default tiendaUsuario;