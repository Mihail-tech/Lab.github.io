import React from 'react';
import useStyles from "./style";


const SuccessRedux = (props) => {

    const {email, password} = props

    const classes = useStyles();

    return(
        <div className = {classes.center}>
            hi, {email}, your password: {password}
        </div>
    )
}


export default SuccessRedux;