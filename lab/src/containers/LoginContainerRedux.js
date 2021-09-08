import React from "react";
import { connect } from "react-redux";
import LoginRedux from "../views/LoginRedux";
import { withRouter } from "react-router-dom";
import { changeEmail, changePassword } from "../Redux/Action";

const LoginContainerRedux = (props) => {
  const { changePassword, changeEmail } = props;
  
  const handleEmailChange = (event) => {
    changeEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    changePassword(event.target.value);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    props.history.replace("/login-redux/success");
  };

  return (
    <LoginRedux
      emailInputChange={handleEmailChange}
      passwordInputChange={handlePasswordChange}
      emailOutput={props.email}
      passwordOutput={props.password}
      onSubmit={onHandleSubmit}
    />
  );
};

const mapStateToProps = (state) => ({
  email: state.appReducer.email,
  password: state.appReducer.password,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeEmail: (value) => dispatch(changeEmail(value)),
    changePassword: (value) => dispatch(changePassword(value)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginContainerRedux)
);
