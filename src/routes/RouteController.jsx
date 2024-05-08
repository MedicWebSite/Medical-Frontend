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
import DoctorsMainDashboard from '../pages/doctor-dashboard/DoctorsMainDashboard'
import Doctors from '../pages/doctor-dashboard/doctors/Doctors'
import Patients from '../pages/doctor-dashboard/patients/Patients'
import Appointments from '../pages/doctor-dashboard/appointments/Appointments'
import Users from '../pages/doctor-dashboard/users/Users'


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
      <Route path='doctor' element={<DoctorsMainDashboard />}>
        <Route index path='main' element={<Doctors />} />
        <Route path="patients" element={<Patients />} />
        <Route path='appointments' element={<Appointments />} />
        <Route path='users' element={<Users />} />
      </Route>

    </Routes>
  )
}

export default RouteController
