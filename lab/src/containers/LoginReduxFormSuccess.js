import React from 'react';
import { connect } from 'react-redux';
import SuccessReduxForm from '../views/SuccessReduxForm';


let LoginReduxFormSuccess = (props) => {
    console.log(props);
    
    return (
        <div>
            <SuccessReduxForm props = {props} />
        </div>
    )
 }


const mapStateToProps = state => ({
    emailValue: state.appReducer.email,
    passwordValue: state.appReducer.password
    
})



export default connect(mapStateToProps, null)(LoginReduxFormSuccess);
