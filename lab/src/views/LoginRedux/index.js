import React from 'react';
import Navbar from '../Navbar';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import useStyles from "../Login/style";







const LoginRedux = ({onSubmit, emailInputChange, passwordInputChange, emailOutput, passwordOutput}) => {

    const classes = useStyles();
  
  return (
    <div>
    <Navbar />
     <Formik>
         <Form 
         className = {classes.position}
         onSubmit={onSubmit}
        >
           <Field fullwidth='true' 
            name="email" 
            label="Email"  
            type="email"  
            placeholder="Email"
            onChange={emailInputChange} 
            required/>
           <Field fullwidth='true' 
            color="secondary"
            minLength="6" 
            name="password" 
            label="Password" 
            type="password"  
            placeholder="Password"
            onChange={passwordInputChange} 
            required/>
                <Button fullWidth 
                  variant="contained" 
                  color="primary" 
                  type="submit">
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

export default LoginRedux;