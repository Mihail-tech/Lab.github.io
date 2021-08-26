import React from 'react';
import LoginRedux from '../views/LoginRedux';
import { connect } from 'react-redux';
import { newEmail, newPassword } from '../Redux/Action/index';




const LoginContainerRedux = (props) => {


  const onSubmit = (values, reset) => {
    console.log(JSON.stringify(values, null, 2));
    reset.resetForm ({
    });
  };
return(
    <div>
        <LoginRedux onSubmit = {onSubmit}
        />
    </div>
)

}

const mapStateToProps = (state) => ({
  email: state.signIn.email,
  password: state.signIn.password
})

const mapDispatchToProps = (dispatch) => {
  return {
    newEmail: (value) => dispatch(newEmail(value)),
    newPassword: (value) => dispatch(newPassword(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (LoginContainerRedux);