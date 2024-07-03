import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Ceo from '../components/Ceo'
import OurValuable from '../components/OurValuable'
import { LampDemo } from '../components/LampDemo'
import PartnersSlider from '../components/partnersSlider/PartnersSlider'
import Services from '../components/Services'

const Home = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-[100px] relative'>
        <Hero/>
        <AboutUs/>
        <Ceo/>
        <OurValuable/>
        <LampDemo/>
        <PartnersSlider/>
        <Services/>
    </section>
  )
}

export default Home