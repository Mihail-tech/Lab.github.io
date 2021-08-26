import { handleActions } from "redux-actions";
import * as action from "../Action/index";
// import { newEmail, newPassword } from "../Action";

const initialState = {
    email: "",
    password: ""
};

const SignInReducer = handleActions(
  {
    [action.newEmail]: (state, action) => ({
        
        email: action.payload
    })
  },
  {
    [action.newPassword]: (state, action) => ({
        
        password: action.payload
    })
  },{ initialState } 
);

export default SignInReducer;