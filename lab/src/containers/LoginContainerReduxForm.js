import React from "react";
import LoginReduxForm from "../views/LoginReduxForm";
import { formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { changeEmail, changePassword } from "../Redux/Action/index";
import PropTypes from "prop-types";

const LoginContainerReduxForm = (props) => {
  const { changeEmail, changePassword } = props;

  const submit = (formData) => {
    changeEmail(formData.email);
    changePassword(formData.password);
    props.history.replace("/login-redux-form/success");
    return formData;
  };

  return (
    <div>
      <LoginReduxForm
        onSubmit={submit}
        emailValue={props.email}
        passwordValue={props.password}
      />
    </div>
  );
};

const selector = formValueSelector("login");

const mapDispatchToProps = (dispatch) => {
  return {
    changeEmail: (value) => dispatch(changeEmail(value)),
    changePassword: (value) => dispatch(changePassword(value)),
  };
};

LoginReduxForm.propTypes = {
  submit: PropTypes.func,
  emailValue: PropTypes.string,
  passwordValue: PropTypes.string,
};

export default withRouter(
  connect((state) => {
    const email = selector(state, "email");
    const password = selector(state, "password");
    return {
      email,
      password,
    };
  }, mapDispatchToProps)(LoginContainerReduxForm)
);