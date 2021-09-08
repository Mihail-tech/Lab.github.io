import React from "react";
import useStyles from "./style";
import PropTypes from "prop-types";

const SuccessRedux = ({ email, password }) => {
  const classes = useStyles();
  return (
    <div className={classes.center}>
      <p>
        Hi, your email: {email}, your password: {password}
      </p>
    </div>
  );
};

SuccessRedux.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
};

export default SuccessRedux;
