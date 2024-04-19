import React, { useEffect, useState } from 'react'
import "./Hero.scss"
import BannerVideo from "../../assets/videos/BannerVideo2.mp4"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Aos from 'aos';
import { Link } from 'react-router-dom';

const Hero = () => {


  const [BannerImages, setBannerImages] = useState([
    {
      banner_img: 'https://images.thequint.com/thequint%2F2018-12%2Ff0a900f4-4bc7-4de0-a47c-7937d9040737%2FiStock_695337976.jpg?rect=0%2C0%2C3129%2C1760',
      main_title: 'We Also Have A Ton Of Fun In The Process',
      subtitle: 'WELCOME TO THE AZHAR INC HOSPITAL',
      aos_style: 'fade-up'
    },
    {
      banner_img: 'https://imageio.forbes.com/specials-images/imageserve/443536636/0x0.jpg?format=jpg&amp;width=1200',
      main_title: 'We Also Have A Ton Of Fun In The Process',
      subtitle: 'WELCOME TO THE AZHAR INC HOSPITAL',
      aos_style: 'fade-up'
    },
    {
      banner_img: 'https://cloudcontact.ru/wp-content/uploads/2018/03/Fotolia_115406199_M.jpg',
      main_title: 'We Also Have A Ton Of Fun In The Process',
      subtitle: 'WELCOME TO THE AZHAR INC HOSPITAL',
      aos_style: 'fade-up'
    },
    {
      banner_img: 'https://backpainsa.com/wp-content/uploads/2015/02/bigstock-Medical-physician-doctor-hands-84721406.jpg',
      main_title: 'We Also Have A Ton Of Fun In The Process',
      subtitle: 'WELCOME TO THE AZHAR INC HOSPITAL',
      aos_style: 'fade-up'
    }

  ])
  // useEffect(() => {
  //   Aos.init()
  // }, [])

  const InitAos = () => {
    Aos.init()
    Aos.refresh()
  }

  return (
    <div className="hero">

      <div class="banner-video">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3800,
            disableOnInteraction: false,
          }}
          speed={1700}
          loop={true}
          pagination={{
            clickable: true,
          }}
          onAfterInit={InitAos}
          navigation={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
        >
          {
            BannerImages.map((image, index) =>
              <>
                <SwiperSlide className='banner-slide' >
                  <img className='banner-image' key={index} src={image.banner_img} />
                  <div className="banner-overlay"></div>
                  <div className="hero-content">
                    <p data-aos={image.aos_style} data-aos-delay="100" data-aos-duration='1000' className="content-subtitle">{image.subtitle}</p>
                    <h2 data-aos={image.aos_style} data-aos-delay="500" data-aos-duration='1000' className='content-title'>{image.main_title}</h2>
                    <div data-aos={image.aos_style} data-aos-delay="1000" data-aos-duration='1000' className="content-links">
                      <Link to={'contact'} className='content-link' >CONTACT US &nbsp; + </Link>
                      <Link className='content-link' >READ MORE &nbsp; +</Link>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            )
          }
        </Swiper>


        {/* <video autoPlay muted loop >
          <source src={BannerVideo} type="video/mp4" />
        </video> */}
      </div>
    </div>
  )
}

export default Hero
