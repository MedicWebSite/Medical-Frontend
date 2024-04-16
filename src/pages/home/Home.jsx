import React from 'react'
import Hero from '../../components/hero/Hero'
import Services from '../../components/services/Services'
import Portfolio from '../../components/portfolio/Portfolio'
import Doctors from '../../components/doctors/Doctors'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Services />
      <Portfolio />
      <Doctors/>
    </div>
  )
}

export default Home