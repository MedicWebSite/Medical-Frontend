"use client"
import React from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, Typography, Table, Flex, } from 'antd';
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGetDoctors } from '../../../service/query/useGetDoctors';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './MainDashboard.scss';
import { FaStar, FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";
import { Navigation } from 'swiper/modules';


const { Meta } = Card;
const MainDashboard = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()
    const { data } = useGetDoctors()
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
                            style={{ width: 100 }}
                            cover={<img alt="example" src={illness.image} style={{ height: "40px", width: "100%", }} />}
                        >
                            <h4>{illness.title.slice(0, 5) + "..."}</h4>
                        </Card>
                    ))
                }
            </div>
            <div>
                <Typography.Title level={3} style={{ margin: "40px 0 20px 0" }}>My appointments</Typography.Title>
                <div>
                    <Table columns={columns} dataSource={tableData} pagination={false} />
                </div>
            </div>
            <div style={{ position: "relative" }}>
                <Typography.Title level={3} style={{ margin: "40px 0 20px 0" }}>Doctors</Typography.Title>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    className="mySwiper"
                    style={{ padding: "50px 0" }}
                    navigation={true}
                    modules={[Navigation]}
                >
                    {
                        doctors.map((doctor) => (
                            <SwiperSlide>
                                <Card
                                    hoverable
                                    style={{ width: 250 }}
                                    cover={<img alt="example" src={doctor.img} style={{ height: "180px", width: "100%", }} />}
                                >
                                    <Flex align='center' justify='space-between' style={{ marginBottom: "5px" }}>
                                        <h3>{doctor?.name}</h3>
                                        <Flex align='center' gap='5px'><FaStar color='orange' size={18} /><h3>{doctor?.rate}</h3> </Flex>
                                    </Flex>
                                    <p className='doctor-in'>Speciality: {doctor?.specialization}</p>
                                    <p className='doctor-in'>Experience: {doctor?.experience} years</p>
                                    <p className='doctor-in'>Location: {doctor?.location}</p>
                                    <Flex align='center' justify='space-between'>
                                        <p className='doctor-in'>1 min: {doctor?.price}</p>
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
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div >
    )
}

export default MainDashboard

const illness_data = [
    {
        "id": 1,
        "title": "Common Cold",
        "image": "https://xmed.uz/_next/image/?url=https%3A%2F%2Fprod.xmed.uz%2Fimages%2Fillness%2Fchildhood_diseases.png&w=48&q=100"
    },
    {
        "id": 2,
        "title": "Flu",
        "image": "https://xmed.uz/_next/image/?url=https%3A%2F%2Fprod.xmed.uz%2Fimages%2Fillness%2Fimpotence.png&w=48&q=100"
    },
    {
        "id": 3,
        "title": "Headache",
        "image": "https://xmed.uz/_next/image/?url=https%3A%2F%2Fprod.xmed.uz%2Fimages%2Fillness%2Fimpotence.png&w=48&q=100"
    },
    {
        "id": 4,
        "title": "Food Poisoning",
        "image": "https://xmed.uz/_next/image/?url=https%3A%2F%2Fprod.xmed.uz%2Fimages%2Fillness%2Fimpotence.png&w=48&q=100"
    },
    {
        "id": 5,
        "title": "Sprain",
        "image": "https://xmed.uz/_next/image/?url=https%3A%2F%2Fprod.xmed.uz%2Fimages%2Fillness%2Fimpotence.png&w=48&q=100"
    },
    {
        "id": 6,
        "title": "Skin Rash",
        "image": "https://xmed.uz/_next/image/?url=https%3A%2F%2Fprod.xmed.uz%2Fimages%2Fillness%2Fimpotence.png&w=48&q=100"
    },
    {
        "id": 7,
        "title": "Allergic Reaction",
        "image": "https://xmed.uz/_next/image/?url=https%3A%2F%2Fprod.xmed.uz%2Fimages%2Fillness%2Fimpotence.png&w=48&q=100"
    },
    {
        "id": 8,
        "title": "Sprain",
        "image": "https://xmed.uz/_next/image/?url=https%3A%2F%2Fprod.xmed.uz%2Fimages%2Fillness%2Fimpotence.png&w=48&q=100"
    },
    {
        "id": 9,
        "title": "Skin Rash",
        "image": "https://xmed.uz/_next/image/?url=https%3A%2F%2Fprod.xmed.uz%2Fimages%2Fillness%2Fimpotence.png&w=48&q=100"
    },
    {
        "id": 10,
        "title": "Allergic Reaction",
        "image": "https://xmed.uz/_next/image/?url=https%3A%2F%2Fprod.xmed.uz%2Fimages%2Fillness%2Fimpotence.png&w=48&q=100"
    },
]
const doctors = [
    {
        name: `John Morgan`,
        img: `https://xmed.uz/_next/image/?url=https%3A%2F%2Fprod.xmed.uz%2Fimages%2Fdoctor_images%2F56464171.png&w=256&q=75`,
        rate: `4.8`,
        specialization: `Dermatologist`,
        experience: `10 years`,
        location: `Tashkent, Uzbekistan`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
        language: `uz | ru`,
        price: `10 000 so'm`,
    },
    {
        name: `John Morgan`,
        img: `https://xmed.uz/_next/image/?url=https%3A%2F%2Fprod.xmed.uz%2Fimages%2Fdoctor_images%2F56464171.png&w=256&q=75`,
        rate: `4.8`,
        specialization: `Dermatologist`,
        experience: `10 years`,
        location: `Tashkent, Uzbekistan`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
        language: `uz | ru`,
        price: `10 000 so'm`,
    },
    {
        name: `John Morgan`,
        img: `https://xmed.uz/_next/image/?url=https%3A%2F%2Fprod.xmed.uz%2Fimages%2Fdoctor_images%2F56464171.png&w=256&q=75`,
        rate: `4.8`,
        specialization: `Dermatologist`,
        experience: `10 years`,
        location: `Tashkent, Uzbekistan`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
        language: `uz | ru`,
        price: `10 000 so'm`,
    },
    {
        name: `John Morgan`,
        img: `https://xmed.uz/_next/image/?url=https%3A%2F%2Fprod.xmed.uz%2Fimages%2Fdoctor_images%2F56464171.png&w=256&q=75`,
        rate: `4.8`,
        specialization: `Dermatologist`,
        experience: `10 years`,
        location: `Tashkent, Uzbekistan`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
        language: `uz | ru`,
        price: `10 000 so'm`,
    },
    {
        name: `John Morgan`,
        img: `https://xmed.uz/_next/image/?url=https%3A%2F%2Fprod.xmed.uz%2Fimages%2Fdoctor_images%2F56464171.png&w=256&q=75`,
        rate: `4.8`,
        specialization: `Dermatologist`,
        experience: `10 years`,
        location: `Tashkent, Uzbekistan`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
        language: `uz | ru`,
        price: `10 000 so'm`,
    },
    {
        name: `John Morgan`,
        img: `https://xmed.uz/_next/image/?url=https%3A%2F%2Fprod.xmed.uz%2Fimages%2Fdoctor_images%2F56464171.png&w=256&q=75`,
        rate: `4.8`,
        specialization: `Dermatologist`,
        experience: `10 years`,
        location: `Tashkent, Uzbekistan`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
        language: `uz | ru`,
        price: `10 000 so'm`,
    },
    {
        name: `John Morgan`,
        img: `https://xmed.uz/_next/image/?url=https%3A%2F%2Fprod.xmed.uz%2Fimages%2Fdoctor_images%2F56464171.png&w=256&q=75`,
        rate: `4.8`,
        specialization: `Dermatologist`,
        experience: `10 years`,
        location: `Tashkent, Uzbekistan`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
        language: `uz | ru`,
        price: `10 000 so'm`,
    },
    {
        name: `John Morgan`,
        img: `https://xmed.uz/_next/image/?url=https%3A%2F%2Fprod.xmed.uz%2Fimages%2Fdoctor_images%2F56464171.png&w=256&q=75`,
        rate: `4.8`,
        specialization: `Dermatologist`,
        experience: `10 years`,
        location: `Tashkent, Uzbekistan`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
        language: `uz | ru`,
        price: `10 000 so'm`,
    },
];
