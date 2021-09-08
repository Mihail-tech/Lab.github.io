import SeccessRedux from "../views/SuccessRedux";
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const SuccessReduxContainer = ({ email, password }) => (
  <SeccessRedux email={email} password={password} />
);

const mapStateToProps = (state) => ({
  email: state.appReducer.email,
  password: state.appReducer.password,
});

SuccessReduxContainer.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
};

export default connect(mapStateToProps, null)(SuccessReduxContainer);
