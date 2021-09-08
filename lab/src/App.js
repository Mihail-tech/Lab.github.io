import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./views/Navbar";
import About from "./views/About";
import MistakeOnClient from "./views/MistakeOnClient";
import LoginContainer from "./containers/LoginContainer";
import LoginContainerRedux from "./containers/LoginContainerRedux";
import SuccessReduxContainer from "./containers/SuccessReduxContainer";
import LoginContainerReduxForm from "./containers/LoginContainerReduxForm";
import LoginReduxFormSuccess from "./containers/LoginReduxFormSuccess";
import CounterContainerParent from "./containers/CounterContainerParent";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/counter">
          <CounterContainerParent />
        </Route>
        <Route path="/404">
          <MistakeOnClient />
        </Route>
        <Route path="/login">
          <LoginContainer />
        </Route>
        <Route exact path="/login-redux">
          <LoginContainerRedux />
        </Route>
        <Route path="/login-redux/success">
          <SuccessReduxContainer />
        </Route>
        <Route exact path="/login-redux-form">
          <LoginContainerReduxForm />
        </Route>
        <Route path="/login-redux-form/success">
          <LoginReduxFormSuccess />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
