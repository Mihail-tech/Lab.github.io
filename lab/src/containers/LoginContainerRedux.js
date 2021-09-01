import React from 'react';
import { connect } from 'react-redux';
import LoginRedux from '../views/LoginRedux';
import { withRouter } from "react-router-dom"
import {changeEmail, changePassword} from '../Redux/Action/index'
import PropTypes from "prop-types";









const LoginContainerRedux = (props) => {

  const { changePassword , changeEmail } = props;

  

  const handleEmailChange = (event) => {
    changeEmail(event.target.value);
  }
    
  const handlePasswordChange = (event) => {
    changePassword (event.target.value);
  }
    
  const onHandleSubmit = (event) => {
    event.preventDefault();
    props.history.replace('/login-redux/success');
    
  }
        
        
  return(
    <div>
      <LoginRedux 
        emailInputChange={handleEmailChange}
          passwordInputChange={handlePasswordChange}
          emailOutput={props.appReducer.email}
          passwordOutput={props.appReducer.password}
          onSubmit={onHandleSubmit}
      />
    </div>
  )

}

const mapStateToProps = (state => ({
  appReducer: state.appReducer
}));

const mapDispatchToProps = {
  changeEmail,
  changePassword,
};


LoginContainerRedux.propTypes = {
  changeEmail: PropTypes.func,
  changePassword: PropTypes.func
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainerRedux));

