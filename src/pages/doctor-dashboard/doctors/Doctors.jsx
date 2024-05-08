
import React, { useEffect, useState } from 'react'
import './Doctors.scss'
import ApiInstance from '../../../api'
import { Button, Table } from 'antd'
import { AddDoctorModal } from '../../../utils/Utils';

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
    {
        title: 'Action',
        dataIndex: <>
            <button>Edit</button>
        </>
    }

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
                <Button>Delete</Button>
                <Button >Edit</Button>
            </>
    });
}


const Doctors = () => {
    const token = localStorage.getItem('token') && localStorage.getItem('token')
    // HOOKS
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [doctorsList, setDoctorsList] = useState([])
    const [openDoctorModal, setOpenDoctorModal] = useState(false)
    console.log(doctorsList);


    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

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
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    };

    return (
        <div className='doctors-content'>
            <div className="doctors__content-navigation">
                <h3 className='doctors-subtitle'>Manage Doctors</h3>
                <button onClick={() => setOpenDoctorModal(true)} className='add__doctor-btn'>+</button>
            </div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={doctorsList} />
            <AddDoctorModal openDoctorModal={openDoctorModal} setOpenDoctorModal={setOpenDoctorModal} />
        </div>
    )
}

export default Doctors