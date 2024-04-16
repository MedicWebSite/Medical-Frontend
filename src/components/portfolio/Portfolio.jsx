import React from 'react'
import './Portfolio.scss'
import Slider from 'react-slick';


const Portfolio = () => {
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
    };
    return (
        <div className="portfolio">
            <div className="portfolio-title">
                <h3>Our Portfolio</h3>
                <h1>All The Gret Work That We Done</h1>
            </div>
            <div className="slider-portfolio">
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className='slider-div'>
                            <img className='slider-img' src="https://medicate.peacefulqode.com/surgery/wp-content/uploads/sites/8/2021/12/1-1-600x700.jpg" alt="" />
                        </div>
                        <div className='slider-div'>
                            <img className='slider-img' src="https://medicate.peacefulqode.com/surgery/wp-content/uploads/sites/8/2021/12/2-2-600x700.jpg" alt="" />
                        </div>
                        <div className='slider-div'>
                            <img className='slider-img' src="https://medicate.peacefulqode.com/surgery/wp-content/uploads/sites/8/2021/12/3-1-600x700.jpg" alt="" />
                        </div>
                        <div className='slider-div'>
                            <img className='slider-img' src="https://medicate.peacefulqode.com/surgery/wp-content/uploads/sites/8/2021/12/4-2-600x700.jpg" alt="" />
                        </div>
                        <div className='slider-div'>
                            <img className='slider-img' src="https://medicate.peacefulqode.com/surgery/wp-content/uploads/sites/8/2021/12/5-2-600x700.jpg" alt="" />
                        </div>
                        <div className='slider-div'>
                            <img className='slider-img' src="https://medicate.peacefulqode.com/surgery/wp-content/uploads/sites/8/2021/12/6-2-600x700.jpg" alt="" />
                        </div>
                        <div className='slider-div'>
                            <img className='slider-img' src="https://medicate.peacefulqode.com/surgery/wp-content/uploads/sites/8/2021/12/7-2-600x700.jpg" alt="" />
                        </div>
                        <div className='slider-div'>
                            <img className='slider-img' src="https://medicate.peacefulqode.com/surgery/wp-content/uploads/sites/8/2021/12/8-2-600x700.jpg" alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Portfolio