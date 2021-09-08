import React from "react";
import useStyles from "../SuccessRedux/style";
import PropTypes from "prop-types";

const SuccessReduxForm = ({ emailValue, passwordValue }) => {
  const classes = useStyles();
  return (
    <div className={classes.center}>
      <p>
        Hi, your email: {emailValue}, your password: {passwordValue}
      </p>
    </div>
  );
};

SuccessReduxForm.propTypes = {
  emailValue: PropTypes.string,
  passwordValue: PropTypes.string,
};

export default SuccessReduxForm;
