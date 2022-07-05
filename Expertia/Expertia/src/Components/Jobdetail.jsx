import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./jobdetail.css"

export const Jobdetail = () => {
    let { id } = useParams();
    const [singlecompany, setsinglecompany] = useState({});
    const jobapply = async () => {
        let getuser = await fetch("http://localhost:3080/users/user1");
        let getuserdata = await getuser.json();
        console.log(getuserdata, "getting data");
        // console.log()

        getuserdata.applyjob.push(singlecompany.id)
        console.log(getuserdata, "adding data")
        let res = await fetch("http://localhost:3080/users/user1", {
            method: "PATCH",


            data: JSON.stringify(getuserdata)
        })
        let finalres = await res.json()
        console.log(finalres, "final")



    }

    useEffect(() => {
        fetchsinglecompany()
    }, [])
    const fetchsinglecompany = async () => {
        let res = await fetch(`http://localhost:3080/Companies/${id}`);
        let result = await res.json();
        console.log(result, "result")
        setsinglecompany(result)
    }
    return <div className="singlecompany-container">

        <div className="singlecompany-main">
            <h1>{singlecompany.role} Developer</h1>
            <p className="companyname">{singlecompany.company}</p>
            <p>{singlecompany.loaction}</p>
            <p>"₹"{singlecompany.CTC} Lpa</p>
            <button className="applybtn" onClick={jobapply}>Apply</button>

        </div>
        <div className="singlecompany-summary">
            <h1>Full Job Description</h1>
            <p>Job Summary</p>
            {
                singlecompany.description ? singlecompany.description.map((e, i) => {
                    return <ul key={i}>
                        <li>{e}</li>
                    </ul>
                }) : ""
            }
        </div>
    </div>
}