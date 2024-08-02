// src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PageHome from './components/page/home';
import PageLogin from './components/page/auth';
import PageError from './components/page/error';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
