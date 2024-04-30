import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/home/Home'
import Register from '../pages/auth/register/Register'
import Login from '../pages/auth/login/Login'
import Auth from '../pages/auth/Auth'
import EmailValidate from '../pages/auth/email-validate/EmailValidate'
import ContactUs from '../pages/contact-us/ContactUs'
import Appointment from '../pages/appointment/Appointment'

const RouteController = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='contact-us' element={<ContactUs/>}/>
      <Route path='auth' element={<Auth />} >
        <Route index path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='email-validate' element={<EmailValidate />} />
      </Route>
      <Route path='appointment' element={<Appointment/>}/>
    </Routes>
  )
}

export default RouteController
