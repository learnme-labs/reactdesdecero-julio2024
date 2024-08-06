// src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route, NavLink  } from 'react-router-dom';

import PageHome from './components/page/home';
import PageLogin from './components/page/auth';
import PageError from './components/page/error';

import logo from './logo.svg';
import './App.css';

function App() {
  // sistema de rutas básico
  /*return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={ <PageHome /> }></Route>
          <Route path="/login" element={ <PageLogin /> } ></Route>
          <Route path="/setting" element={ <></> } ></Route>
          <Route path="*" element={ <PageError /> } ></Route>
          
          {
          // <Route path="/*" element={ <PageLogin /> } ></Route>          /login  /signup  /home /new /setting
          }
        </Routes>
      </BrowserRouter>
    </>
  );*/

  // sistema de rutas con navegacion
  return (
    <>
      <BrowserRouter>
        <div>
          <nav className='menu'>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink></NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={ <PageHome />}></Route>
            <Route path="/login" element={ <PageLogin />}></Route>
              {
                // <Route path="/dashboard/*" element={ <PageDash />}></Route>
              }
            <Route path="*" element={ <PageError />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
