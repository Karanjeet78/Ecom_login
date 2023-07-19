import logo from './logo.svg';
import './App.css';
import IncrementDecrement from "./components/IncrementDecrement";
import Todo from './components/Todo';
import React, { useEffect, useState } from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Frontmaster from './components/layout/front/Frontmaster';
import Login from './Pages/Login';
import Registation from './Pages/Registation';

function App() {
  return (
    <div className="App">
      {/*<IncrementDecrement /> */}
      {/* <Todo/> */}
      <BrowserRouter>
      <Routes>
       

        <Route path="/" element={<Frontmaster />}>
        <Route index element={<Login/> } />
        <Route path='/register' element={<Registation/> } />
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
