import React from 'react';
import Home from "./Home/Home";
import {Route, Router} from "react-router-dom";
import { Routes } from "react-router-dom";
import Investment from './Investment/Investment';
import Advice from './Advice/Advice';
import Team from './Team/Team';
import Login from './Login_register/Login';
import Register from './Login_register/Register';
import Equity from './Equity/Equity';
import Gold from './Gold/Gold';

const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/investment' Component={Investment} />
        <Route path='/advice' Component={Advice} />
        <Route path='/team' Component={Team} />
        <Route path='/equity' Component={Equity}/>
        <Route path='/gold' Component={Gold}/>
        <Route path="/login" Component={Login}/>
        <Route path='/register' Component={Register}/>
      </Routes>
{/*     
    <div><Home/></div>
    <div><Investment/></div>
    <div><Advice/></div>
    <div><Team/></div>
    <div><Login/></div>
    <div><Register/></div>

     */}
     </>
    
  );
}

export default App;
