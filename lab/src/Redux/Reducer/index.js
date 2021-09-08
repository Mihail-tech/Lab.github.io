import { handleActions } from "redux-actions";
import { changeEmail, changePassword } from "../Action";

const initialState = {
  email: "",
  password: "",
};

const appReducer = handleActions(
  {
    [changeEmail]: (state, action) => ({
      ...state,
      email: action.payload,
    }),
    [changePassword]: (state, action) => ({
      ...state,
      password: action.payload,
    }),
  },
  initialState
);

export default appReducer;
