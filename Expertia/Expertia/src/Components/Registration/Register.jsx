import "./register.css"
import { Input } from '@chakra-ui/react'
// import { Heading } from '@chakra-ui/react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerdata } from "../../Redux/Auth/action"
export const Register = () => {
    let myuser = useSelector((store) => store);
    console.log(myuser, "reguster")
    const dispatch = useDispatch();
    const [user, setuser] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        mobile: "",
    })
    return <div className="registerContainer">
        <h1>Registration</h1>
        <form action="" onSubmit={(e) => {
            e.preventDefault();
            dispatch(registerdata(user))
        }}>

            <Input onChange={(e) => {
                setuser({ ...user, firstName: e.target.value })
            }} placeholder='Enter firstName' type="text" color="black" variant='filled' isRequired />
            <Input onChange={(e) => {
                setuser({ ...user, lastName: e.target.value })
            }} placeholder='Enter lastName' type="text" color='black' variant='filled' isRequired />
            <Input onChange={(e) => {
                setuser({ ...user, email: e.target.value })
            }} placeholder='Enter email' type="email" color='black' variant='filled' isRequired />
            <Input onChange={(e) => {
                setuser({ ...user, password: e.target.value })
            }} placeholder='Enter password' type="password" color='black' variant='filled' isRequired />
            <Input onChange={(e) => {
                setuser({ ...user, mobile: e.target.value })
            }} placeholder='Enter mobile' type="text" color='black' variant='filled' isRequired />
            <Input placeholder='submit' type="submit" />

        </form>


    </div>
}