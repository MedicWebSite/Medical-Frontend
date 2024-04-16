import React, { useState } from 'react'
import './Doctors.scss'
import Container from '../../utils/Utils'
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillGooglePlusCircle } from "react-icons/ai";


const Doctors = () => {
    const [hover, setHover] = useState(false)
    console.log(hover);
    const data = [
        {
            img: 'https://medicate.peacefulqode.com/wp-content/uploads/2022/02/1-2.jpg',
            name: 'Alex Jhon Martin',
            job: 'Outpatient Surgery'
        },
        {
            img: 'https://medicate.peacefulqode.com/surgery/wp-content/uploads/sites/8/2022/06/2.png',
            name: 'Alex Jhon Martin',
            job: 'Outpatient Surgery'
        },
        {
            img: 'https://medicate.peacefulqode.com/surgery/wp-content/uploads/sites/8/2022/06/4.png',
            name: 'Alex Jhon Martin',
            job: 'Outpatient Surgery'
        },
    ]

    return (
        <Container>
            <p className='our-team'>OUR TEAM</p>
            <h2 className='doctors-team'>Meet The Perfect Team</h2>
            <div className='doctors'>
                {data?.map(item => (
                    <div  className='doctor-info'>
                        <img className='doctors-img' src={item.img} alt="" />
                        <div className='doctor-text'>
                            <p className='doctor-name doc-text-hover'>{item.name}</p>
                            <p className='doctor-job doc-text-hover'>{item.job}</p>
                        </div>
                        <div className='text-hover text-hovered'></div>
                        <div className='doctors-socials doc-soc-hover'>
                            <FaFacebook className='doctors-social' />
                            <FaTwitter className='doctors-social' />
                            <AiFillGooglePlusCircle className='doctors-social' />
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Doctors