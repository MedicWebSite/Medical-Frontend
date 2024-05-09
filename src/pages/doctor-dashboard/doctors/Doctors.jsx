import React, { useEffect, useState } from 'react'
import './Doctors.scss'
import ApiInstance from '../../../api'
import { AddDoctorModal } from '../../../utils/Utils';
import Table from '../../../components/table/Table';
import { Select, Input } from 'antd'
const { Search } = Input;

const columns = [
    { title: 'Firstname', dataIndex: 'firstName', },
    { title: 'Lastname', dataIndex: 'lastName', },
    { title: 'Number', dataIndex: 'contactNumber' },
    { title: 'Birthday', dataIndex: 'dateOfBirth' },
    { title: 'Address', dataIndex: 'address', },
    { title: 'Action', dataIndex: 'action' },
];

const specializationData = [
    { "value": "Anesthesiology", "label": "Anesthesiology" },
    { "value": "Cardiology", "label": "Cardiology" },
    { "value": "Dermatology", "label": "Dermatology" },
    { "value": "EmergencyMedicine", "label": "Emergency Medicine" },
    { "value": "Endocrinology", "label": "Endocrinology" },
    { "value": "FamilyMedicine", "label": "Family Medicine" },
    { "value": "Gastroenterology", "label": "Gastroenterology" },
    { "value": "Geriatrics", "label": "Geriatrics" },
    { "value": "Hematology", "label": "Hematology" },
    { "value": "InfectiousDisease", "label": "Infectious Disease" },
    { "value": "InternalMedicine", "label": "Internal Medicine" },
    { "value": "Nephrology", "label": "Nephrology" },
    { "value": "Neurology", "label": "Neurology" },
    { "value": "ObstetricsGynecology", "label": "Obstetrics and Gynecology" },
    { "value": "Oncology", "label": "Oncology" },
    { "value": "Ophthalmology", "label": "Ophthalmology" },
    { "value": "Orthopedics", "label": "Orthopedics" },
    { "value": "Otolaryngology", "label": "Otolaryngology (ENT)" },
    { "value": "Pediatrics", "label": "Pediatrics" },
    { "value": "PhysicalMedicineRehabilitation", "label": "Physical Medicine and Rehabilitation" },
    { "value": "Psychiatry", "label": "Psychiatry" },
    { "value": "Pulmonology", "label": "Pulmonology" },
    { "value": "Radiology", "label": "Radiology" },
    { "value": "Rheumatology", "label": "Rheumatology" },
    { "value": "Surgery", "label": "Surgery" },
    { "value": "Urology", "label": "Urology" }
]


const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: Math.floor(Math.random() * 30),
        address: `London, Park Lane no. ${i}`,
        action:
            <>
                <button>Delete</button>
                <button >Edit</button>
            </>
    });
}


const Doctors = () => {
    const token = localStorage.getItem('token') && localStorage.getItem('token')
    // HOOKS
    const [doctorsList, setDoctorsList] = useState([])
    const [objectKey, setObjectKey] = useState(null)
    const [inputValue, setInputValue] = useState('')
    const [orderedValue, setOrderedValue] = useState('')
    const [openDoctorModal, setOpenDoctorModal] = useState(false)


    // Get Object Keys
    useEffect(() => {
        const allKeys = doctorsList.reduce((keys, doctor) => {
            return keys.concat(Object.keys(doctor))
        }, [])
        const uniqueKeys = [...new Set(allKeys)]
        setObjectKey(uniqueKeys)
    }, [doctorsList])

    //  Render Doctors List from Array
    useEffect(() => {
        async function GetDoctors() {
            try {

                const response = await ApiInstance('/doctors/get-all', {
                    headers: {
                        'Authorization': token && `Bearer ${token}`
                    }
                })

                setDoctorsList(response?.data?.data)
            }
            catch (error) {
                console.log(error);
            }
        }
        GetDoctors()
    }, [])

    const handleOrder = (value) => {
        setOrderedValue(value)
    };

    const searchedData = doctorsList.filter(doctor => doctor?.firstName?.toLowerCase().includes(inputValue.toLowerCase()))
    const orderedData = doctorsList.filter(doctor => doctor?.specialization.toLowerCase() === orderedValue.toLowerCase())
    console.log(orderedData);

    return (
        <div className='doctors-content'>
            <div className="doctors__content-navigation">
                <h3 className='doctors-subtitle'>Manage Doctors</h3>
                <div className='add__doctor-action'>
                    <span onClick={() => setOpenDoctorModal(true)} className='material-symbols-outlined'>add</span>
                    <button onClick={() => setOpenDoctorModal(true)} className='add__doctor-btn'>Add Doctor</button>
                </div>
            </div>
            <div className="doctor__content-actions">

                <form className='search__form-wrapper'>
                    <Search
                        placeholder="Search Doctor..."
                        allowClear
                        className='search-form'
                        enterButton="Search"
                        size="middle"

                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </form>
                <Select
                    defaultValue="Select Specialization"
                    className='select-specialization'
                    onChange={handleOrder}
                    options={specializationData}
                    size='middle'
                />
                
            </div>
            <Table objectKeys={objectKey} columnsData={columns} AllDoctorsList={searchedData || orderedData} />
            <AddDoctorModal openDoctorModal={openDoctorModal} setOpenDoctorModal={setOpenDoctorModal} />
        </div>
    )
}

export default Doctors