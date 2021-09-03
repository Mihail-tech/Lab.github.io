import React from 'react';
import useStyles from '../SuccessRedux/style'


const SuccessReduxForm = (props) => {

    console.log(props);
    const classes = useStyles();

    const {emailValue, passwordValue} = props.props
    
    return(
        <div className = {classes.center} >
           <p>Hi, your email: {emailValue}, your password: {passwordValue} </p>
        </div>
    )
}


export default SuccessReduxForm;