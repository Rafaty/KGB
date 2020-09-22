import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Employee from'./pages/Employee';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component = {Home} /> 
      <Route path="/funcionarios" component = {Employee} /> 
    </Switch>
    </BrowserRouter>
   
  );
}

export default App;
