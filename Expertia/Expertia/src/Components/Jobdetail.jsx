import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./jobdetail.css";
import { fetchsinglecompany } from "../Redux/Company/action";

import { useDispatch } from "react-redux";


export const Jobdetail = () => {


    let dispatch = useDispatch()

    let { id } = useParams();
    // console.log("id",id)
    const [apply, setapply] = useState(false)
    const [singlecompany, setsinglecompany] = useState({});


    useEffect(() => {
        fetchsinglecompany(id).then(e => setsinglecompany(e))
    }, [])

    return <div className="singlecompany-container">

        <div className="singlecompany-main">
            <div className="companydetails">
                <h1>{singlecompany.role} Developer</h1>
                <p className="companyname">{singlecompany.companyName}</p>
                <p>{singlecompany.location}</p>
                <p>"₹"{singlecompany.CTC} Lpa</p>
                <button className="applybtn" onClick={() => setapply(!apply)} >{apply ? "Applied" : "Apply"}</button>
            </div>
            <div className="logo">
                <img src={singlecompany.logo} alt="" />
            </div>


        </div>
        <div className="singlecompany-summary">
            <h1>Full Job Description</h1>
            <p>Job Summary</p>
            {
                singlecompany.jobSummary ? singlecompany.jobSummary.map((e, i) => {
                    return <ul key={i}>
                        <li>{e}</li>
                    </ul>
                }) : ""
            }
        </div>
    </div>
}