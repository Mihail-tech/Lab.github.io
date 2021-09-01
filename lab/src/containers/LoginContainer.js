import React from 'react';
import Login from '../views/Login';
import PropTypes from "prop-types";
import { useState } from 'react';





const LoginContainer = (props) => {
  
const [state, setState] = useState({
  email: "",
  password: ""
})


const onHandleSubmit = (event) => {
  
  console.log(`email: ${state.email} password: ${state.password}`)  
  setState({email: '', password: ''});
  alert(JSON.stringify(state))
  
}

const onEmailChange = (event) => {
  setState({email: event.target.value});
}

const onPasswordChange = (event) => {
  setState({password: event.target.value});
}

return (
  <div>
    <Login 
    email={onEmailChange}
    password={onPasswordChange} 
    emailOutput={state.email} 
    passwordOutput={state.password}
    submit={onHandleSubmit} />
  </div>
)
}

LoginContainer.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
}

export default LoginContainer