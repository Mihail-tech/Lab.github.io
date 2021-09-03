import { CHANGE_EMAIL, CHANGE_PASSWORD } from '../Action/index2';



const initialState = {
    email: '',
    password: ''
}
const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_EMAIL: {
            return  {
              ...state, 
                email: action.payload,
              }
            }
        case CHANGE_PASSWORD: {
            return  {
              ...state, 
                password: action.payload
              }}
            
        default:
            return state;
    } 
}

export default appReducer;