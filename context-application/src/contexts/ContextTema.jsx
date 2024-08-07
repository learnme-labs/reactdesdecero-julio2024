// src/contexts/ContextTema/index.jsx
import { useState } from "react";
import { createContext } from "react";


// Creando componente de contexto 
// (espacio de memoria compartida)
//    createContext(default)
const ContextoTema = createContext();

// Manejador del contexto
// Tipo especial de componente para
// definir el alcance que tendra
// el contexto...
const ManejadorContextoTema = function ({ children }) {
  let [ tema, setTema ] = useState("dark");

  return (
    <ContextoTema.Provider value={ { tema, setTema } }>
      { children }
    </ContextoTema.Provider >
  );
}




const TokenSesion = createContext();

const ManejadorTokenSesion = function({ children }){ }


export { 
  ContextoTema, ManejadorContextoTema, 
  TokenSesion, ManejadorTokenSesion
};
