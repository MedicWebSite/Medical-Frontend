import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/home/Home'
import Register from '../pages/auth/register/Register'
import Login from '../pages/auth/login/Login'
import Auth from '../pages/auth/Auth'
import EmailValidate from '../pages/auth/email-validate/EmailValidate'
import ContactUs from '../pages/contact-us/ContactUs'

import Appointment from '../pages/appointment/Appointment'

import PatientDashboard from '../pages/patient-dashboard/PatientDashboard'
import MainDashboard from '../pages/patient-dashboard/main-dashboard/MainDashboard'
import BookAppoinment from '../pages/patient-dashboard/book-appointment/BookAppoinment'
import PatientAppointments from '../pages/patient-dashboard/patient-appointments/PatientAppointments'
import PatientDocuments from '../pages/patient-dashboard/patient-documents/PatientDocuments'
import PatientSettings from '../pages/patient-dashboard/settings/PatientSettings'


const RouteController = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='contact-us' element={<ContactUs />} />
      <Route path='auth' element={<Auth />} >
        <Route index path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='email-validate' element={<EmailValidate />} />
      </Route>

      <Route path='appointment' element={<Appointment />} />

      <Route path='patient' element={<PatientDashboard />}>
        <Route index path='main' element={<MainDashboard />} />
        <Route path="book-appointment" element={<BookAppoinment />} />
        <Route path='my-appointment' element={<PatientAppointments />} />
        <Route path='my-documents' element={<PatientDocuments />} />
        <Route path='my-settings' element={<PatientSettings />} />
      </Route>

    </Routes>
  )
}

export default RouteController
