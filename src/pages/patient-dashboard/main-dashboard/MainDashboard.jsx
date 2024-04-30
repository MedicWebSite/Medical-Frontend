import React from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Carousel, Typography } from 'antd';
import { FaUser } from "react-icons/fa";
const { Meta } = Card;

const MainDashboard = () => {
    const data = JSON.parse(localStorage.getItem('user'))
    console.log(data);
    const contentStyle = {
        width: '140px',
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <div>
            <Card
                style={{ width: 300 }}
                actions={[
                    <SettingOutlined key="setting" style={{ fontSize: "18px" }} />,
                    <EditOutlined key="edit" style={{ fontSize: "18px" }} />,
                    <EllipsisOutlined key="ellipsis" style={{ fontSize: "18px" }} />,
                ]}
            >
                <Meta
                    avatar={<FaUser size={80} />}
                    title={<Typography.Title level={3}>{data?.FirstName} {data?.LastName}</Typography.Title>}
                    description={data?.iss}
                />
            </Card>
            <Typography.Title level={3} style={{ margin: "20px 0" }}>What are you sick with?</Typography.Title>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: "20px" }}>
                {
                    illness_data.map((illness) => (
                        <Card
                            hoverable
                            style={{ width: 150 }}
                            cover={<img alt="example" src={illness.image} style={{ height: "100px" }} />}
                        >
                            <Meta title={illness.title} />
                        </Card>
                    ))
                }
            </div>
        </div>
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
        "image": "https://xmed.uz/_next/image/?url=https%3A%2F%2Fprod.xmed.uz%2Fimages%2Fillness%2Fhormonal.png&w=48&q=75"
    },
    {
        "id": 4,
        "title": "Food Poisoning",
        "image": "https://xmed.uz/_next/image/?url=https%3A%2F%2Fprod.xmed.uz%2Fimages%2Fillness%2Fhormonal.png&w=48&q=75"
    },
    {
        "id": 5,
        "title": "Sprain",
        "image": "https://xmed.uz/_next/image/?url=https%3A%2F%2Fprod.xmed.uz%2Fimages%2Fillness%2Fhormonal.png&w=48&q=75"
    },
    {
        "id": 6,
        "title": "Skin Rash",
        "image": "https://xmed.uz/_next/image/?url=https%3A%2F%2Fprod.xmed.uz%2Fimages%2Fillness%2Fhormonal.png&w=48&q=75"
    },
    {
        "id": 7,
        "title": "Allergic Reaction",
        "image": "https://xmed.uz/_next/image/?url=https%3A%2F%2Fprod.xmed.uz%2Fimages%2Fillness%2Fhormonal.png&w=48&q=75"
    },
]