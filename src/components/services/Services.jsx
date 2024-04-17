import React, { useEffect } from 'react'
import './Services.scss'
import Aos from 'aos'
const Services = () => {

    useEffect(() => {
        Aos.init()
        
    }, [])
    return (
        <div  className="services">
            <div className="container">
                <div className='services-sub'>
                    <p className='services-sub-title'>WHAT ABOUT US</p>
                    <h2 className='services-title'>The Skin And Science Of Test</h2>
                </div>
                <div data-aos='fade-up' className="service-cards">
                    <div className="service-card">
                        <div className="service-card-top">
                            <div className="service-img"><i class="fa-solid fa-heart-pulse"></i></div>
                            <h3>Anti Skin Care</h3>
                        </div>
                        <p>There are many variations of pas of Lorem Ipsum availab.There are many variations of pas of Lorem Ipsum availab.</p>
                        <div className="service-box-list">
                            <ul>
                                <li><i class="fa-solid fa-check"></i> Endocrinology Services</li>
                                <li><i class="fa-solid fa-check"></i> Endocrinology Services</li>
                                <li><i class="fa-solid fa-check"></i> Endocrinology Services</li>
                                <li><i class="fa-solid fa-check"></i> Endocrinology Services</li>
                            </ul>
                        </div>
                    </div>
                    <div  className="service-card">
                        <div className="service-card-top">
                            <div className="service-img"><i class="fa-solid fa-x-ray"></i></div>
                            <h3>Anti Skin Care</h3>
                        </div>
                        <p>There are many variations of pas of Lorem Ipsum availab.There are many variations of pas of Lorem Ipsum availab.</p>
                        <div className="service-box-list">
                            <ul>
                                <li><i class="fa-solid fa-check"></i> Endocrinology Services</li>
                                <li><i class="fa-solid fa-check"></i> Endocrinology Services</li>
                                <li><i class="fa-solid fa-check"></i> Endocrinology Services</li>
                                <li><i class="fa-solid fa-check"></i> Endocrinology Services</li>
                            </ul>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="service-card-top">
                            <div className="service-img"><i class="fa-solid fa-capsules"></i></div>
                            <h3>Anti Skin Care</h3>
                        </div>
                        <p>There are many variations of pas of Lorem Ipsum availab.There are many variations of pas of Lorem Ipsum availab.</p>
                        <div className="service-box-list">
                            <ul>
                                <li><i class="fa-solid fa-check"></i> Endocrinology Services</li>
                                <li><i class="fa-solid fa-check"></i> Endocrinology Services</li>
                                <li><i class="fa-solid fa-check"></i> Endocrinology Services</li>
                                <li><i class="fa-solid fa-check"></i> Endocrinology Services</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div data-aos='fade-up' className="service-brands">
                    <img src="https://medicate.peacefulqode.com/surgery/wp-content/uploads/sites/8/2022/06/5-2.png" alt="" />
                    <img src="https://medicate.peacefulqode.com/surgery/wp-content/uploads/sites/8/2022/06/3-4.png" alt="" />
                    <img src="https://medicate.peacefulqode.com/surgery/wp-content/uploads/sites/8/2022/06/2-4.png" alt="" />
                    <img src="https://medicate.peacefulqode.com/surgery/wp-content/uploads/sites/8/2022/06/1-2.png" alt="" />
                    <img src="https://medicate.peacefulqode.com/surgery/wp-content/uploads/sites/8/2022/06/2-3.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Services