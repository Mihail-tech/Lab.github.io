import React from 'react';
import Navbar from '../Navbar';
import { Formik, Form, Field } from 'formik';
import Button from '@material-ui/core/Button';
import useStyles from "./style";






const Login = ({submit, email, emailOutput, password, passwordOutput}) => {

  const classes = useStyles();

  return (
    <div>
    <Navbar />
     <Formik >
         <Form className = {classes.position} onSubmit={submit} >
           <Field fullwidth='true' 
             
              
            placeholder="Email"
            type="email" 
            onChange={email}
            value={emailOutput}
            required
            />
           
           <Field fullwidth='true'  
             
            minLength="6"
            placeholder="Password"
             
            type="password"  
            onChange={password}
            value={passwordOutput} 
            required 
            />
          
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

export default Login;
