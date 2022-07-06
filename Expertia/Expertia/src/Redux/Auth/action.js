export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
import axios from "axios";

const loginuser = (token) => {
    return {
        type: LOGIN,
        payload: token
    }
}
export const registeruser = (token) => {
    return {
        type: REGISTER,
        payload: token
    }
}
export const registerdata = (userdata) => async (dispatch) => {
    console.log(userdata, "user")
    const data = await axios.post(`http://localhost:3008/register`, userdata);
    console.log(data.data, "afterlogin")
    dispatch(registeruser({
        token: data.data,
    }))
}

export const logindata = (userdata) => async (dispatch) => {

    console.log(userdata, "user")
    const data = await axios.post(`http://localhost:3008/login`, userdata);
    console.log(data.data, "afterlogin")
    dispatch(loginuser({
        token: data.data,
    }))
}
