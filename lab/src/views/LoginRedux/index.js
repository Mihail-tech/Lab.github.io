import React from 'react';
import Navbar from '../Navbar';
import {
    Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import FormikTextField from '../../helpers/TextField';
import FormikPasswordField from '../../helpers/PasswordField';
import useStyles from "./style";







const LoginRedux = ({onSubmit}) => {

    const classes = useStyles();

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(6, 'Password should be of minimum 6 characters length')
      .max(13, 'Password should be of maximum 13 characters length')
      .required('Password is required'),
  });
  return (
    <div>
    <Navbar />
     <Formik
       initialValues={{
        email: "",
        password: "",
       }}
       validationSchema={validationSchema}
       onSubmit = {onSubmit}
     >
       {({ values }) => (
         <Form >
           <Field fullWidth name="email" label="Email" component={FormikTextField} />
           <Field fullWidth color="secondary" name="password" label="Password" type="password" component={FormikPasswordField}  />
            <Link to = "/login-redux/success" className = {classes.link}>
                <Button fullWidth variant="contained" color="primary" type="submit">
                    Sign In
                </Button>
            </Link>
           <div>
              <p>email: {JSON.stringify(values.email)}</p>
              <p>pwd: {JSON.stringify(values.password)}</p>
           </div>
         </Form>
       )}
     </Formik>
    </div>
  );

};

export default LoginRedux;