import "./navbar.css"
import { Link } from "react-router-dom"
// import { useSelector } from "react-redux"

import { useDispatch, useSelector } from 'react-redux';
import { registeruser } from "../Redux/Auth/action"
export const Navbar = () => {
    let auth = useSelector(store => store)
    let dispatch =  useDispatch()
    console.log(auth.AuthReducer.user, "auth")
    let store = useSelector((store) => store.AuthReducer.user);
    const logout = () => {
        dispatch(registeruser(undefined))
    }
    return <div className='HeroHeading'>

        <Link className="Homebutton" to="/">DashBoard</Link>
        <h1 >JOB SEARCH PORTAL</h1>
        <div className="login-regis">
            {
                !store ? <button><Link to={'/login'}>Login</Link> </button> : <button onClick={logout}>Logout</button>

            }

            {
                !store ? <button><Link to={'/register'}>Registeration</Link></button> : null
            }

        </div>


    </div>
}