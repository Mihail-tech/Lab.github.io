import React from 'react';
import { connect } from 'react-redux';
import SeccessRedux from '../views/SuccessRedux';



const SuccessReduxContainer = (props) => {

    const {email, password} = props

    return(
        <div>
            <SeccessRedux email = {email}
                password = {password}
            />
        </div>
    )
}


const mapStateToProps = (state) => ({
    email: state.signIn.email,
    password: state.signIn.password
})



export default connect(mapStateToProps) (SuccessReduxContainer);