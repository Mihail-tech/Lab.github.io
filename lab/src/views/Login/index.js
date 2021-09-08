import React from "react";
import Navbar from "../Navbar";
import { Formik, Form, Field } from "formik";
import Button from "@material-ui/core/Button";
import useStyles from "./style";
import PropTypes from "prop-types";

const Login = ({ submit, email, emailOutput, password, passwordOutput }) => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Formik>
        <Form className={classes.position} onSubmit={submit}>
          <Field
            fullwidth="true"
            name="email"
            placeholder="Email"
            type="email"
            onChange={email}
            value={emailOutput}
            required
          />
          <Field
            fullwidth="true"
            name="password"
            minLength="6"
            placeholder="Password"
            type="password"
            onChange={password}
            value={passwordOutput}
            required
          />
          <Button fullWidth variant="contained" color="primary" type="submit">
            Sign In
          </Button>
          <div>
            <p>email: {JSON.stringify(emailOutput)}</p>
            <p>pwd: {JSON.stringify(passwordOutput)}</p>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

Login.propTypes = {
  emailOutput: PropTypes.string,
  passwordOutput: PropTypes.string,
  submit: PropTypes.func,
  email: PropTypes.func,
  password: PropTypes.func
};

export default Login;
