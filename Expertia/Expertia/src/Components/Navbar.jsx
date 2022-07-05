import "./navbar.css"
import { Link } from "react-router-dom"
export const Navbar = ()=>{
    return <div>
        <h1 className='HeroHeading'>JOB SEARCH PORTAL</h1>
        <Link  className = "Homebutton" to = "/">HOME</Link>
    </div>
}