import React from 'react'
import './Portfolio.scss'
import Slider from 'react-slick';


const SliderData = [
   'https://medicate.peacefulqode.com/surgery/wp-content/uploads/sites/8/2021/12/1-1-600x700.jpg',
   'https://medicate.peacefulqode.com/surgery/wp-content/uploads/sites/8/2021/12/2-2-600x700.jpg',
   "https://medicate.peacefulqode.com/surgery/wp-content/uploads/sites/8/2021/12/3-1-600x700.jpg",
   "https://medicate.peacefulqode.com/surgery/wp-content/uploads/sites/8/2021/12/4-2-600x700.jpg",
   "https://medicate.peacefulqode.com/surgery/wp-content/uploads/sites/8/2021/12/5-2-600x700.jpg",
   "https://medicate.peacefulqode.com/surgery/wp-content/uploads/sites/8/2021/12/7-2-600x700.jpg",
   "https://medicate.peacefulqode.com/surgery/wp-content/uploads/sites/8/2021/12/8-2-600x700.jpg"
   
]


const Portfolio = () => {


 
    return (
        <div className="portfolio">
            <div className="portfolio__header-title">
                <strong className='portfolio-subtitle'>Our Portfolio</strong>
                <h2 className='portfolio-title'>All The Gret Work That We Done</h2>
            </div>
            <div className="slider-portfolio">
                <marquee scrolldelay="70" direction='left' behavior='alternate' >
                <div className="slider-container">
                {
                    SliderData.map((slide, index) => 
                    <img src={slide} key={index} />
                )
                   }
                </div>
                </marquee>
            </div>
        </div>
    )
}

export default Portfolio