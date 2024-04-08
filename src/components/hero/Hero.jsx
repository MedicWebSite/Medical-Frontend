import React from 'react'
import "./Hero.scss"
import BannerVideo from "../../assets/videos/BannerVideo2.mp4"

const Hero = () => {
  return (
    <div className="hero">

    <div class="video-container">
    <video autoPlay muted >
      <source src={BannerVideo} type="video/mp4" />
    </video>
  </div>
    <div class="video-container">
    <video autoPlay muted >
      <source src={BannerVideo} type="video/mp4" />
    </video>
  </div>
    </div>
  )
}

export default Hero
