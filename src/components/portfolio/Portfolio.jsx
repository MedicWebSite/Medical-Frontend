import React from 'react'
import './Portfolio.scss'
import Slider from 'react-slick';


const SliderData = [
    "https://i.ytimg.com/vi/3DkPN9UDte0/maxresdefault.jpg",
   'https://st2.depositphotos.com/1010613/10979/i/950/depositphotos_109796118-stock-photo-group-of-doctors-looking-at.jpg',
   'hhttps://nasrf.ru/upload/iblock/dab/dabb9b5820a8be616180aecb5f8484e8.jpg',
   "https://i-zdrav.ru/upload/iblock/73d/73d7f27abb8f3b15146d5c241b89560d.jpg",
   "hhttps://rkob.ru/images/After-Hours-Clinics-Wesley-Chapel-FL.webp",
   "https://s0.rbk.ru/v6_top_pics/media/img/4/75/756799902341754.webp",
   "https://gas-kvas.com/grafic/uploads/posts/2023-09/1695968152_gas-kvas-com-p-kartinki-vracha-44.jpg"
   
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