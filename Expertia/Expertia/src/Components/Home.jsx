import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

import "./Home.css";
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { companydata } from "../Redux/Company/action"
import { Empty } from './Empty';
// import {}


export const Home = () => {
    let dispatch = useDispatch()
    let navigate = useNavigate();
    const [search, setsearch] = useState("")

    const debounce = (func, delay) => {
        let debounceTimer;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
    };

    const update = debounce(function (e) {
        setsearch(e.target.value)
    }, 1000);

    useEffect(() => {

        dispatch(companydata(search))
    }, [search])
    let companies = useSelector((store) => store.CompanyReducer.company)
    const comdetail = (id) => {
        console.log(id, "id")
        navigate(`/${id}`, { replace: false });
    }

    console.log(companies)
    return <div>

        <div className='searchbox'>
            <input onChange={(e) => { update(e) }} type="text" name="" id="" placeholder='Job search' />


        </div>

        {
            <div className='company-div'>
                {
                    companies ? companies.data.companies.map((e) => {
                        return <div onClick={() => {
                            comdetail(e._id)
                        }} className='company-sub_div' key={e._id}>
                            <div className='companydetails'>
                                <h1>Role : {e.role}</h1>
                                <p>Company Name :{e.companyName}</p>
                                <p>Location : {e.location}</p>
                                <p>CTC : {e.CTC}</p>
                            </div>
                            <div className='logo'>
                                <img src={e.logo} alt="" />
                            </div>

                        </div>
                    }) : null
                }
            </div>
        }


    </div>
}