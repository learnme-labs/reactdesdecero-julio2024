// src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route, NavLink  } from 'react-router-dom';

import PageLogin from './components/page/auth';
import ErrorLogin from './components/page/error';

import './App.css';

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <PageLogin /> }></Route>
        <Route path="*" element={ <ErrorLogin /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
