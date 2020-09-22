import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import "./App.css";
import Register from './pages/Employee/Register'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/funcionarios" exact component={Employee} />
        <Route path="/funcionarios/cadastrar" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
