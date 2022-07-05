export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
import axios from "axios";

const loginuser = (token) => {
    return {
        type: LOGIN,
        payload: token
    }
}
const registeruser = (token) => {
    return {
        type: REGISTER,
        payload: token
    }
}
export const registerdata = (userdata) => async (dispatch) => {
    // console.log(userdata)
    userdata = JSON.stringify(userdata)
    // const data = await fetch(`http://github.com/masai-school/api-mocker/auth/register`, {
    //     method : "POST",
    //     body : JSON.stringify(userdata),
    //     headers : {
    //        " Content- Type": "application/ json"
    //     }
    // });
    // 
    let res = await fetch(`http://localhost:3008/register`, {
        method: 'POST',
        body: userdata,
        header: {
            "Content-Type": "application/json",
        }
    });
    // 


    console.log(res, "afterReguster")
    dispatch(registeruser({
        token: res
        // details: userdata
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

// export const getdata = () => async (dispatch) => {
//     const data = await fetch(`http://localhost:8080/todos`).then((res) => res.json())
//     dispatch(addTodo(data))
// }