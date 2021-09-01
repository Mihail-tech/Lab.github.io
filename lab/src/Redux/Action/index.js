import { CHANGE_EMAIL, CHANGE_PASSWORD } from "./index2";



export const changeEmail = (email) => ({
    type: CHANGE_EMAIL ,
    payload: email
    
});

export const changePassword = (password) => ({
    type: CHANGE_PASSWORD,
    payload: password
    
});