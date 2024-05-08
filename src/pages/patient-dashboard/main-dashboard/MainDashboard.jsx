"use client"
import React from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, Typography, Table, Flex, } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './MainDashboard.scss';
import { FaPhoneAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
import { Navigation } from 'swiper/modules';
import dateFormat from "dateformat";
import { useGetDoctors } from '../../../service/query/useGetDoctors';
import { Carousel } from 'antd';


const { Meta } = Card;
const MainDashboard = () => {
    const { data } = useGetDoctors()
    console.log(data);
    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()
    if (!user) return navigate('/auth/login')
    const columns = [
        {
            title: 'Doctor Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Experience',
            dataIndex: 'experience',
            key: 'experience',
        },
        {
            title: 'Rate',
            dataIndex: 'rate',
            key: 'rate',
        },
        {
            title: 'Speciality',
            dataIndex: 'speciality',
            key: 'speciality',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <a>Delete</a>
            ),
        },
    ];

    const tableData = [
        {
            key: '1',
            name: 'John Brown',
            experience: 32,
            speciality: 'Urologist',
            rate: 5,
            date: '2024-01-01',
            time: '10:00 AM',
        },
        {
            key: '2',
            name: 'John Brown',
            experience: 32,
            speciality: 'Urologist',
            rate: 5,
            date: '2024-01-01',
            time: '10:00 AM',
        },
        {
            key: '3',
            name: 'John Brown',
            experience: 32,
            speciality: 'Urologist',
            rate: 5,
            date: '2024-01-01',
            time: '10:00 AM',
        },
        {
            key: '4',
            name: 'John Brown',
            experience: 32,
            speciality: 'Urologist',
            rate: 5,
            date: '2024-01-01',
            time: '10:00 AM',
        },
        {
            key: '5',
            name: 'John Brown',
            experience: 32,
            speciality: 'Urologist',
            rate: 5,
            date: '2024-01-01',
            time: '10:00 AM',
        },
    ];

    return (
        <div>
            <Card
                style={{ minWidth: 300, maxWidth: 400 }}
                actions={[
                    <SettingOutlined key="setting" style={{ fontSize: "18px" }} />,
                    <EditOutlined key="edit" style={{ fontSize: "18px" }} />,
                    <EllipsisOutlined key="ellipsis" style={{ fontSize: "18px" }} />,
                ]}
            >
                <Meta
                    avatar={<FaUser size={80} />}
                    title={<Typography.Title level={3}>{user?.FirstName} {user?.LastName}</Typography.Title>}
                    description={<div>
                        <h4>Id: {user?.Id}</h4>
                        <h4>Email: {user?.Email}</h4>
                        <h4>Role: {user?.Role}</h4>
                    </div>}
                />
            </Card>
            <Typography.Title level={3} style={{ margin: "30px 0 20px 0" }}>What are you sick with?</Typography.Title>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: "20px" }}>
                {
                    illness_data.map((illness) => (
                        <Card
                            hoverable
                            style={{ width: 120 }}
                            cover={<img alt="example" src={illness.image} style={{ height: "80px", width: "100%", }} />}
                        >
                            <h4>{illness.title}</h4>
                        </Card>
                    ))
                }
            </div>
            <div>
                <Typography.Title level={3} style={{ margin: "40px 0 20px 0" }}>My appointments</Typography.Title>
                <div>
                    <Table columns={columns} dataSource={tableData} pagination={false} scroll={{ x: 1200 }} />
                </div>
            </div>
            <div className='patient-dashboard-carousel'>
                <Typography.Title level={3} style={{ margin: "40px 0 20px 0" }}>Doctors</Typography.Title>
                <Carousel className='' dots={true} slidesToShow={4}>
                    {data?.data.map(doctor => (
                        <Card
                            hoverable
                            cover={<img alt="example" src={'https://xmed.uz/_next/image/?url=https%3A%2F%2Fprod.xmed.uz%2Fimages%2Fdoctor_images%2F56464171.png&w=256&q=100'} style={{ height: "180px", width: "100%", }} />}
                        >
                            <Flex align='center' justify='space-between' style={{ marginBottom: "5px" }}>
                                <h3>{doctor?.firstName} {doctor.lastName}</h3>
                            </Flex>
                            <p className='doctor-in'>Speciality: {doctor?.specialization}</p>
                            <p className='doctor-in'>Birth Date: {dateFormat(doctor?.dateOfBirth).slice(4, 15)}</p>
                            <p className='doctor-in'>Location: {doctor?.address}</p>
                            <Flex align='center' justify='end' style={{ marginTop: "5px" }}>
                                <Flex align='center' gap='5px'>
                                    <div className='doctor-phone-icon'>
                                        <FaPhoneAlt />
                                    </div>
                                    <div className="doctor-phone-icon">
                                        <FaCalendarAlt />
                                    </div>
                                </Flex>
                            </Flex>
                        </Card>
                    ))}
                </Carousel>
            </div>
        </div >
    )
}

export default MainDashboard

const illness_data = [
    {
        "id": 1,
        "title": "Common Cold",
        "image": "https://cdn-icons-png.flaticon.com/512/6604/6604338.png"
    },
    {
        "id": 2,
        "title": "Flu",
        "image": "https://cdn-icons-png.flaticon.com/512/6604/6604338.png"
    },
    {
        "id": 3,
        "title": "Headache",
        "image": "https://cdn-icons-png.flaticon.com/512/6604/6604338.png"
    },
    {
        "id": 4,
        "title": "Food Poisoning",
        "image": "https://cdn-icons-png.flaticon.com/512/6604/6604338.png"
    },
    {
        "id": 5,
        "title": "Sprain",
        "image": "https://cdn-icons-png.flaticon.com/512/6604/6604338.png"
    },
    {
        "id": 6,
        "title": "Skin Rash",
        "image": "https://cdn-icons-png.flaticon.com/512/6604/6604338.png"
    },
    {
        "id": 7,
        "title": "Allergic Reaction",
        "image": "https://cdn-icons-png.flaticon.com/512/6604/6604338.png"
    },
    {
        "id": 8,
        "title": "Sprain",
        "image": "https://cdn-icons-png.flaticon.com/512/6604/6604338.png"
    },
]
