import React from 'react';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Navbar from '../Navbar';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import FormikTextField from '../../helpers/TextField';
import FormikPasswordField from '../../helpers/PasswordField';
import Button from '@material-ui/core/Button';
import useStyles from "./style";






const Login = ({onSubmit}) => {

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
         <Form className = {classes.position} >
           <Field fullWidth name="email" label="Email" component={FormikTextField} />
           
           <Field fullWidth color="secondary" name="password" label="Password" type="password" component={FormikPasswordField}  />
          
           <Button fullWidth variant="contained" color="primary" type="submit">
            Sign In
          </Button>
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

export default Login;