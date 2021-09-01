import React from 'react';
import useStyles from "./style";


const SuccessRedux = (props) => {

    const classes = useStyles();

    const {email, password} = props.props.appReducer
    
    return(
        <div className = {classes.center}>
           <p>Hi {email}, your password: {password} </p>
        </div>
    )
}


export default SuccessRedux;

