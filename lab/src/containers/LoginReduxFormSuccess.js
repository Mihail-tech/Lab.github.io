import React from "react";
import { connect } from "react-redux";
import SuccessReduxForm from "../views/SuccessReduxForm";
import PropTypes from "prop-types";

let LoginReduxFormSuccess = ({ emailValue, passwordValue }) => (
  <SuccessReduxForm emailValue={emailValue} passwordValue={passwordValue} />
);

const mapStateToProps = (state) => ({
  emailValue: state.appReducer.email,
  passwordValue: state.appReducer.password,
});

LoginReduxFormSuccess.propTypes = {
  emailValue: PropTypes.string,
  passwordValue: PropTypes.string,
};

export default connect(mapStateToProps, null)(LoginReduxFormSuccess);
