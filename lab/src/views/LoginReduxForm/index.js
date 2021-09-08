import React from 'react'
import Navbar from '../Navbar';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';
import useStyles from "../Login/style";
import { Field, Form } from 'redux-form';
import {  reduxForm  } from 'redux-form';


let LoginReduxForm = ({handleSubmit, emailValue, passwordValue}) => {

  const classes = useStyles();

  return (
    <div>
    <Navbar />
     <Formik>
         <Form 
         className = {classes.position}
         onSubmit = {handleSubmit}
        >
           <Field fullwidth = 'true' 
            name = "email" 
             component = 'input' 
            type = "email"  
            placeholder = "Email"
            required/>
           <Field fullwidth = 'true' 
            color = "secondary"
            minLength = "6" 
            name = "password" 
            component = 'input'
            type = "password"  
            placeholder = "Password"
            required/>
                <Button fullWidth 
                  variant = "contained" 
                  color = "primary" 
                  type = "submit">
                    Sign In
                </Button>
           <div>
              <p>email: {JSON.stringify(emailValue)}</p>
              <p>pwd: {JSON.stringify(passwordValue)}</p>
           </div>
         </Form>
     </Formik>
    </div>
  );
};

LoginReduxForm = reduxForm({
    form: 'login',
})(LoginReduxForm)

export default LoginReduxForm;