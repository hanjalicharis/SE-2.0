import * as api from '../api'
import { AUTH } from '../constants/actions';

export const signin = (formData, history) => async (dispatch) => {
    try {
        //login user
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}


export const signup = (formData, history) => async (dispatch) => {
    try {
        //register user
        //login it automatically

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}