import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Pages from './Pages/pages';

function App() {
  return(
    <BrowserRouter>
        <div className= "App">
          <Header/>
          <Pages/>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
