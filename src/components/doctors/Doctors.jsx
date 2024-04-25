import React, { useEffect, useId, useState } from 'react'
import './Doctors.scss'
import Container from '../../utils/Utils'
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import Aos from 'aos';


const Doctors = () => {



    // Aos Init 
    useEffect(() => {   
        Aos.init()
    }, [])

    const data = [
        {
            img: 'https://i.pinimg.com/originals/b1/25/92/b1259284e51650f2fe7c79705a22dbf4.jpg',
            name: 'Alex Jhon Martin',
            job: 'Outpatient Surgery',
        },
        {
            img: 'https://media.baamboozle.com/uploads/images/10544/1569603188_186887',
            name: 'Alex Jhon Martin',
            job: 'Outpatient Surgery',
        },
        {
            img: 'https://img.freepik.com/premium-photo/laptop_1098-10597.jpg?w=1800',
            name: 'Alex Jhon Martin',
            job: 'Outpatient Surgery',
        },
    ]

    return (
        <div className="doctors-wrapper">
        <Container>
            <p className='our-team'>OUR TEAM</p>
            <h2 className='doctors-team'>Meet The Perfect Team</h2>
            <div className='doctors'>
                {data?.map((item, index) => (
                    <div  key={index} data-aos='fade-up'  className='doctor-info'>
                        <img className='doctors-img' src={item.img} />
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
        </div>

    )
}

export default Doctors