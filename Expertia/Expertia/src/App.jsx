import { useState } from 'react'
import logo from './logo.svg'
import './App.css';
import { Route, Routes } from "react-router-dom"
import { Home } from './Components/Home';
import { Jobdetail } from './Components/Jobdetail';
import { Navbar } from './Components/Navbar';
import { Login } from './Components/Login/Login';
import { Register } from './Components/Registration/Register';


function App() {


  return (
    <div className="App">
      <Navbar className="navbar" />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:id' element={<Jobdetail />}></Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

      </Routes>


    </div>
  )
}

export default App
