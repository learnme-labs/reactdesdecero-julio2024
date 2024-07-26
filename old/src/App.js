import logo from './logo.svg';
import './App.css';

const CURSO = "React desde cero";
// Componente ...
//  elemento DOM con un estado propio
//  defincion de una funcion...
function App() {
  // solo deben retornar un elemento del DOM
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            { CURSO }
          </a>
        </header>
      </div>
    </>    
  );
}

export default App;
