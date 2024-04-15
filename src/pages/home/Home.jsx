import React from 'react'
import Hero from '../../components/hero/Hero'
import Services from '../../components/services/Services'
import Portfolio from '../../components/portfolio/Portfolio'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Services />
      <Portfolio />

    </div>
  )
}

export default Home