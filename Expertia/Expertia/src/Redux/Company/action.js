export const COMPANY =  "COMPANY";
import axios from "axios";
const companyaction = (data)=>{
    return {
        type : COMPANY,
        payload : data
    }
}

export const companydata = () => async (dispatch) => {

    // console.log(userdata, "user")
    const data = await axios.get(`http://localhost:3008/company`);
    dispatch(companyaction({
        token: data.data,
    }))
}