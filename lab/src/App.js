import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect 
} from "react-router-dom";
import Navbar from "./views/Navbar";
import About from "./views/About";
import MistakeOnClient from "./views/MistakeOnClient";
import CounterContainerParent from "./containers/CounterContainerParent";
import Login from "./views/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Navbar />
        </Route>
        <Route path = "/about">
          <About />
        </Route>
        <Route path = "/counter">
          <CounterContainerParent />
        </Route>
        <Route path = "/404">
          <MistakeOnClient />
        </Route>
        <Route path = "/login">
          <Login />
        </Route>
        <Redirect to = "/404" />

      </Switch>
    </Router>
  );
}

export default App;
