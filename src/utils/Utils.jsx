import { useEffect, useState } from "react"
import "./Utils.scss"
import { DatePicker, Form, Radio, Select } from 'antd';
import { useCreateDoctor } from "../service/mutation/useCreateDoctor";
import { client } from "../service/QueryClient";

const Container = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  )
}

export const AddDoctorModal = ({ openDoctorModal, setOpenDoctorModal }) => {

  const specializationData = [
    { "value": "cardiologist", "label": "Cardiologist" },
    { "value": "dermatologist", "label": "Dermatologist" },
    { "value": "endocrinologist", "label": "Endocrinologist" },
    { "value": "gastroenterologist", "label": "Gastroenterologist" },
    { "value": "neurologist", "label": "Neurologist" },
    { "value": "oncologist", "label": "Oncologist" },
    { "value": "ophthalmologist", "label": "Ophthalmologist" },
    { "value": "orthopedic_surgeon", "label": "Orthopedic Surgeon" },
    { "value": "pediatrician", "label": "Pediatrician" },
    { "value": "psychiatrist", "label": "Psychiatrist" },
    { "value": "urologist", "label": "Urologist" }
  ]

  // HOOKS
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState()
  const [contactNumber, setContactNumber] = useState()
  const [gender, setGender] = useState('')
  const [specialization, setSpecialization] = useState("")


  const { mutate } = useCreateDoctor()

  useEffect(() => {
    if (openDoctorModal) {
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = 'auto'
    }
  }, [openDoctorModal])


  const handleCreateDoctor = (e) => {
    e.preventDefault()
    const DoctorData = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: new Date(dateOfBirth).toISOString(),
      gender: Number(gender),
      specialization: specialization,
      address: address,
      hospitalId: 2,
      contactNumber: contactNumber,
      email: email
    }
    console.log(DoctorData);

    mutate(DoctorData, {
      onSuccess: (res) => {
        console.log(res);
        client.invalidateQueries('doctors')
      }
    })


  }


  return (
    <div style={openDoctorModal ? { display: 'flex' } : { display: 'none' }} className="modal-overlay">

      <div className="add__doctor-modal">
        <h3 className="modal-title">Create New doctor</h3>
        <form onSubmit={handleCreateDoctor} className="modal-form">
          <div className="form-item">
            <label htmlFor="doctor-name">Firstname
              <input onChange={(e) => setFirstName(e.target.value)} type="text" id="doctor-name" placeholder="Enter Doctor Name" />
            </label>
            <label htmlFor="lastname">Lastname
              <input onChange={(e) => setLastName(e.target.value)} type="text" id="lastname" placeholder="Enter Doctor Lastname" />
            </label>

          </div>
          <div className="form-item">
            <label htmlFor="doctor-phone">Phone
              <input onChange={(e) => setContactNumber(e.target.value)} type="number" id="doctor-phone" placeholder="Enter Doctor phone" />
            </label>
            <label htmlFor="doctor-email">Email
              <input onChange={(e) => setEmail(e.target.value)} type="email" id="doctor-email" placeholder="Enter Doctor Email" />
            </label>
          </div>
          <div className="form-item">

            <label htmlFor="address">Address
              <input onChange={(e) => setAddress(e.target.value)} type="text" id="address" placeholder="Enter Doctor Address" />
            </label>
            <label htmlFor="doctor-specialization">Specialization
              <Select
                className="specialization-select"
                id="doctor-specialization"
                defaultValue="Select Specialization"
                style={{ width: '100%' }}
                onChange={(selectedOption) => setSpecialization(selectedOption)}
                options={specializationData}
              />
            </label>
          </div>
          <div className="form-item">
            <label htmlFor="license-number">Birthday
              <input type="date" onChange={(e) => setDateOfBirth(e.target.value)} />
              {/* <DatePicker  onChange={handleDateChange}/> */}
            </label>
            <div className="select-gender">
              <h5 className="gender-title">Gender</h5>
              <div className="gender-item">
                <label htmlFor="male">Male
                  <input onChange={(e) => setGender(e.target.value)} name="gender" type="radio" value={0} />
                </label>
                <label htmlFor="female" >Female
                  <input onChange={(e) => setGender(e.target.value)} name="gender" type="radio" value={1} />
                </label>
              </div>
            </div>
          </div>
          <div className="form__action-btns">
            <button type="button" onClick={() => setOpenDoctorModal(!openDoctorModal)} className="cancel-btn">Cancel</button>
            <button type="submit" className="create-btn">Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Container
