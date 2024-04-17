import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../pages/home/Home'
import Register from '../pages/auth/register/Register'
import Login from '../pages/auth/login/Login'
import Auth from '../pages/auth/Auth'

const RouteController = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='auth' element={<Auth/>} >
        <Route index path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Route>
    </Routes>
  )
}

export default RouteController
