//  import React from 'react';
// import LoginReduxForm from '../views/LoginReduxForm';
// // import PropTypes from "prop-types";
// // import {  formValueSelector  } from 'redux-form';
// // import { connect } from 'react-redux';
// // import { withRouter } from "react-router-dom"








// const LoginContainerReduxForm = (props) => {
//     console.log(props);

//     // const submit = (values) => {
//     //     props.history.replace('/login-redux-form/success')
//     //     return values
//     // }

//     const { changePassword , changeEmail } = props;

  

//     const handleEmailChange = (event) => {
//       changeEmail(event.target.value);
//     }
      
//     const handlePasswordChange = (event) => {
//       changePassword (event.target.value);
//     }
      
//     const onHandleSubmit = (event) => {
//       event.preventDefault();
//       props.history.replace('/login-redux/success');
      
//     }

//     return(
//         <div>
//             <LoginReduxForm 
//             // onSubmit={submit}
//             emailInputChange={handleEmailChange}
//           passwordInputChange={handlePasswordChange}
//         //   emailOutput={props.appReducer.email}
//         //   passwordOutput={props.appReducer.password}
//           onSubmit={onHandleSubmit}
//            />
//         </div>
//     )
// }



// export default LoginContainerReduxForm;