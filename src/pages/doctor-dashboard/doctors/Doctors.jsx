import React, { useEffect, useState } from 'react'
import './Doctors.scss'
import ApiInstance from '../../../api'
import { AddDoctorModal } from '../../../utils/Utils';
import Table from '../../../components/table/Table';
import { Input, Space } from 'antd';
const { Search } = Input;

const columns = [
    {
        title: 'Firstname',
        dataIndex: 'firstName',
    },
    {
        title: 'Lastname',
        dataIndex: 'lastName',
    },
    {
        title: 'Number',
        dataIndex: 'contactNumber'
    },
    {
        title: 'Birthday',
        dataIndex: 'dateOfBirth'
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
    {
        title: 'Action',
        dataIndex: 'action'
    },


];
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


    const onSearch = (value, _e, info) => console.log(info?.source, value);

    return (
        <div className='doctors-content'>
            <div className="doctors__content-navigation">
                <h3 className='doctors-subtitle'>Manage Doctors</h3>
            </div>
            <div className="content-actions">
                <form>
                    <Search
                        placeholder="Search Doctor..."
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                    />
                </form>
                <div className='add__doctor-action'>
                    <span onClick={() => setOpenDoctorModal(true)} className='material-symbols-outlined'>add</span>
                    <button onClick={() => setOpenDoctorModal(true)} className='add__doctor-btn'>Add Doctor</button>
                </div>
            </div>
            <Table objectKeys={objectKey} columnsData={columns} AllDoctorsList={doctorsList} />
            <AddDoctorModal openDoctorModal={openDoctorModal} setOpenDoctorModal={setOpenDoctorModal} />
        </div>
    )
}

export default Doctors