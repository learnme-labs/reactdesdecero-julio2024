// src/contexts/ContextTema/index.jsx
import { createContext, useContext } from "react";

// Creando componente de contexto 
// (espacio de memoria compartida)
//    createContext(default)
const ContextoTema = createContext();

// Manejador del contexto
// Tipo especial de componente para
// definir el alcance que tendra
// el contexto...
const ManejadorContextoTema = function ({ children }) {
  return (
    <ContextoTema.Provider>
      { children }
    </ContextoTema.Provider>
  );
}
