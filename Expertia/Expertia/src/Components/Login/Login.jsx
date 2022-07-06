import { Input } from '@chakra-ui/react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import "./login.css";
import { logindata } from '../../Redux/Auth/action';

export const Login = () => {
    let myuser = useSelector((store) => store);
    console.log(myuser, "login")
    const dispatch = useDispatch();
    const [user, setuser] = useState({
        email: "",
        password: ""
    })
    console.log(user)
    return <div className='loginContainer'>
        <h1 >Login</h1>
        <form action="" onSubmit={(e) => {
            e.preventDefault();
            dispatch(logindata(user))
            setuser({ email: "", password: "" })
        }}>


            <Input onChange={(e) => {
                setuser({ ...user, email: e.target.value })
            }} placeholder='Enter Email' variant='filled' value={setuser.email} type="text" isRequired color='black' errorBorderColor='red.300' />
            <Input onChange={(e) => {
                setuser({ ...user, password: e.target.value })
            }} placeholder='Enter password' type="password" value={setuser.password} color='black' variant='filled' isRequired />
            <Input placeholder='Basic usage' type="submit" />

        </form>
    </div>
}