import React from 'react';
import LoginReduxForm from '../views/LoginReduxForm';
// import PropTypes from "prop-types";
import {  formValueSelector  } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom"

import {changeEmail, changePassword} from '../Redux/Action/index'




const LoginContainerReduxForm = (props) => {

    const {changeEmail, changePassword} = props

console.log(props);
    const submit = (formData) => {
        changeEmail(formData.email)
        changePassword(formData.password)
        props.history.replace('/login-redux-form/success')
        return formData
    }

    return(
        <div>
            <LoginReduxForm 
            onSubmit = {submit}
            emailValue = {props.email}
            passwordValue = {props.password}
            />
        </div>
    )
}



 const selector = formValueSelector('login')

const mapStateToProps = (state) => ({
    email : selector(state, 'email') ,
    password : selector(state, 'password')
})

const mapDispatchToProps = {
    changeEmail,
    changePassword
  };


export default withRouter (connect(mapStateToProps, mapDispatchToProps)(LoginContainerReduxForm))