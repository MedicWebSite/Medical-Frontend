import React from 'react'
import './Doctors.scss'
import { Button, Flex, Input, Table } from 'antd'
import { FaEye } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const Doctors = () => {
    const columns = [
        {
            title: 'Doctor Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Contact No.',
            dataIndex: 'contact',
            key: 'contact',
        },
        {
            title: 'Specialization',
            dataIndex: 'speciality',
            key: 'speciality',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Licence Number',
            dataIndex: 'licence_num',
            key: 'licence_num',
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <Flex justifyContent='center' gap='10px'>
                    <Button className='table-btn-1 table-btn'><FaEye /></Button>
                    <Button className='table-btn-2 table-btn'><MdModeEdit /></Button>
                    <Button className='table-btn-3 table-btn'><RiDeleteBin6Line /></Button>
                </Flex>
            ),
        },
    ];

    const tableData = [
        {
            key: '1',
            name: 'John Brown',
            email: 'dr.sarah.chang@example.com',
            speciality: 'Urologist',
            contact: '+1 (691) 604-6346',
            gender: 'Male',
            licence_num: 'CD345678q',
            time: '10:00 AM',
        },
        {
            key: '2',
            name: 'John Brown',
            email: 'dr.sarah.chang@example.com',
            speciality: 'Urologist',
            contact: '+1 (691) 604-6346',
            gender: 'Male',
            licence_num: 'CD345678q',
            time: '10:00 AM',
        },
        {
            key: '3',
            name: 'John Brown',
            email: 'dr.sarah.chang@example.com',
            speciality: 'Urologist',
            contact: '+1 (691) 604-6346',
            gender: 'Male',
            licence_num: 'CD345678q',
            time: '10:00 AM',
        },
        {
            key: '4',
            name: 'John Brown',
            email: 'dr.sarah.chang@example.com',
            speciality: 'Urologist',
            gender: 'Male',
            contact: '+1 (691) 604-6346',
            licence_num: 'CD345678q',
            time: '10:00 AM',
        },
        {
            key: '5',
            name: 'John Brown',
            email: 'dr.sarah.chang@example.com',
            speciality: 'Urologist',
            contact: '+1 (691) 604-6346',
            gender: 'Male',
            licence_num: 'CD345678q',
            time: '10:00 AM',
        },
        {
            key: '6',
            name: 'John Brown',
            email: 'dr.sarah.chang@example.com',
            speciality: 'Urologist',
            contact: '+1 (691) 604-6346',
            gender: 'Male',
            licence_num: 'CD345678q',
            time: '10:00 AM',
        },
        {
            key: '7',
            name: 'John Brown',
            email: 'dr.sarah.chang@example.com',
            speciality: 'Urologist',
            contact: '+1 (691) 604-6346',
            gender: 'Male',
            licence_num: 'CD345678q',
            time: '10:00 AM',
        },
        {
            key: '8',
            name: 'John Brown',
            email: 'dr.sarah.chang@example.com',
            speciality: 'Urologist',
            contact: '+1 (691) 604-6346',
            gender: 'Male',
            licence_num: 'CD345678q',
            time: '10:00 AM',
        },
        {
            key: '9',
            name: 'John Brown',
            email: 'dr.sarah.chang@example.com',
            speciality: 'Urologist',
            gender: 'Male',
            contact: '+1 (691) 604-6346',
            licence_num: 'CD345678q',
            time: '10:00 AM',
        },
        {
            key: '10',
            name: 'John Brown',
            email: 'dr.sarah.chang@example.com',
            speciality: 'Urologist',
            contact: '+1 (691) 604-6346',
            gender: 'Male',
            licence_num: 'CD345678q',
            time: '10:00 AM',
        },
    ];
    return (
        <div>
            <div className='manage-doctor-header'>
                <h3>Manage Doctor</h3>
                <Flex align='center' gap='10px' >
                    <Input className='search-doctor-input' size='large' placeholder='Search' />
                    <Button type='primary' size='large' className='add-doctor-btn'>+</Button>
                </Flex>
            </div>
            <div>
                <Table columns={columns} dataSource={tableData} pagination={{ defaultPageSize: 10, showSizeChanger: true, position: ['topRight'] }} scroll={{ x: 1200 }} />
            </div>
        </div>
    )
}

export default Doctors