import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./Home.css"


export const Home = () => {
    let navigate = useNavigate();
    const [search, setsearch] = useState("")
    const [companies, setcompanies] = useState();
    useEffect(() => {
        getcom();
    }, [search])
    const getcom = async () => {
        let res = await fetch(`http://localhost:3080/Companies/?role_like=${search}`);
        let data = await res.json()
        setcompanies(data)
    }
    const comdetail = (id) => {
        navigate(`/${id}`, { replace: false });
    }

    console.log(companies)
    return <div>

        <div className='searchbox'>
            <input onChange={(e) => setsearch(e.target.value)} type="text" name="" id="" placeholder='Job search' />


        </div>
        <div className='company-div'>
            {
                companies ? companies.map((e) => {
                    return <div onClick={() => {
                        comdetail(e.id)
                    }} className='company-sub_div' key={e.id}>
                        <h1>Role : {e.role}</h1>
                        <p>Company Name :{e.company}</p>
                        <p>Location : {e.location}</p>
                        <p>CTC : {e.CTC}</p>
                    </div>
                }) : ""
            }
        </div>


    </div>
}