import React from 'react';
// import Login from "../views/Login";
// import * as yup from 'yup';
// import { useFormik } from 'formik';
import Login from '../views/Login';





const LoginContainer = () => {

const onSubmit = (values, reset) => {
  console.log(JSON.stringify(values, null, 2));
  reset.resetForm ({
    values: {
      email: "",
      password: "",
    },
  });
};

return (
  <div>
    <Login onSubmit = {onSubmit} />
  </div>
)

 }


export default LoginContainer