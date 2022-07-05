export const USER = "USER";
import axios from "axios";
const useraction = (data) => {
    return {
        type: USER,
        payload: data
    }
}
export const applyforcompany = (data) =>async(dispatch)=>{
    const response = await fetch(`http://localhost:3008/user/${id}`,{
        method : "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        data : JSON.stringify(data)
    })
    const result =  await response.json()
    dispatch(useraction({
        token: result.user,
    }))
}
export const userdata = (id) => async (dispatch) => {

    // console.log(userdata, "user")
    const data = await axios.get(`http://localhost:3008/user/${id}`);
    dispatch(useraction({
        token: data.data,
    }))
}