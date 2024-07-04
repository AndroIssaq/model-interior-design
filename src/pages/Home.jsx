import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Ceo from '../components/Ceo'
import OurValuable from '../components/OurValuable'
import { LampDemo } from '../components/LampDemo'
import PartnersSlider from '../components/partnersSlider/PartnersSlider'
import Services from '../components/Services'
import ProjectsImgs from '../components/ProjectsImgs'
import Coast from '../components/Coast'
import Blog from '../components/Blog'
import RecentProjects from '../components/RecentProjects/RecentProjects'

const Home = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-[100px] relative'>
        <Hero/>
        <AboutUs/>
        <Ceo/>
        <OurValuable/>
        <RecentProjects/>
        <LampDemo/>
        <PartnersSlider/>
        <Services/>
        <ProjectsImgs/>
        <Coast/>
        <Blog/>
    </section>
  )
}

export default Home