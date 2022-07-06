export const COMPANY = "COMPANY";
import axios from "axios";
const companyaction = (data) => {
    return {
        type: COMPANY,
        payload: data
    }
}
export const fetchsinglecompany = async (id) => {
    let res = await fetch(`https://job-interviewapplication.herokuapp.com/company/${id}`);
    let result = await res.json();
    return result
    // console.log(result, "result")
    // setsinglecompany(result)
}
export const companydata = (search) => async (dispatch) => {
    console.log(search, "search")
  
    search = search.toUpperCase()


    // console.log(userdata, "user")
    const data = await axios.get(`https://job-interviewapplication.herokuapp.com/company?role=${search}`);
    dispatch(companyaction({
        data: data.data,
    }))
}