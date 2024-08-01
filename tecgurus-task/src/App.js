// src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import PageHome from './components/page/home';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={ <PageHome /> }></Route>
          {
          // <Route path="/setting" element ></Route>
          // <Route path="/login" element ></Route>
          // <Route path="*" element={ } ></Route>
          }
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
