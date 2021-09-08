import React from "react";
import Login from "../views/Login";
import PropTypes from "prop-types";
import { useState } from "react";

const LoginContainer = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(`email: ${state.email} password: ${state.password}`);
    setState({ email: "", password: "" });
    alert(JSON.stringify(state));
  };

  const onEmailChange = (event) => {
    setState({ email: event.target.value });
  };

  const onPasswordChange = (event) => {
    setState({ password: event.target.value });
  };

  return (
    <Login
      email={onEmailChange}
      password={onPasswordChange}
      emailOutput={state.email}
      passwordOutput={state.password}
      submit={onHandleSubmit}
    />
  );
};

LoginContainer.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  emailOutput: PropTypes.string,
  passwordOutput: PropTypes.string,
  submit: PropTypes.func,
};

export default LoginContainer;
