import React, { useEffect, useState } from 'react'
import Hero from '../../components/hero/Hero'
import Services from '../../components/services/Services'
import Portfolio from '../../components/portfolio/Portfolio'
import Doctors from '../../components/doctors/Doctors'
import Patient from '../../components/patient/Patient'

const Home = () => {

  const [backTopScroll, setBackTopScroll] = useState(0)

  const handleScrollUpdate = () => {
    setBackTopScroll(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollUpdate)
    return () => {
      window.removeEventListener('scroll', handleScrollUpdate)
    }
  }, [])

  const handeScrollTop = () => {
    window.scrollTo(0,0)
  }

  return (
    <div>
      <Hero/>
      <Services />
      <Portfolio />
      <Doctors/>
      <Patient/>
      <span onClick={handeScrollTop} style={backTopScroll > 470 ? {transform: 'translateY(0)'} : {}}  className="material-symbols-outlined back__top">arrow_upward</span>
    </div>
  )
}

export default Home