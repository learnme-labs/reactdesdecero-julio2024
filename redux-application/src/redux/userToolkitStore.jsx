//
import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice(
  {
    name: "userObject",
    initialState: {
      user: null, 
      nickname: null,
      mail: null
    },
    reducers: {
      
      mailUpdate: (state, payload) => {
        return { ...state, ...payload };
      },
      nicknameUpdate: (state, payload) => {
        return { ...state, ...payload };
      }
    }
  }
);

const tienda = configureStore({
  reducer: {
    userObject: userSlice.reducer
  }
});

export default tienda;