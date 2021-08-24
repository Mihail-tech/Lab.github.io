import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Navbar from '../Navbar';




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


const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, reset) => {
      console.log(JSON.stringify(values, null, 2));
      reset.resetForm({
        values: {
          email: "",
          password: "",
        },
      });
    },
  });

  return (
    <div>
    <Navbar />
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email || ""}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Sign in
        </Button>
        <div>
            <p>email: {JSON.stringify(formik.values.email)}</p>
            <p>pwd: {JSON.stringify(formik.values.password)}</p>
        </div>
      </form>
    </div>
  );
};

export default Login;