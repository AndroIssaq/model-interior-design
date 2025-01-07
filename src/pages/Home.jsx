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
import RecentProjects from '../components/RecentProjects/RecentProjects'
import Videos from '../components/Videos'
import DownloadPortfolio from '../components/DownloadPortfolio'
const Home = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-[100px] relative'>
      <DownloadPortfolio/>
        <Hero/>
        <AboutUs/>
        <Ceo/>
        <OurValuable/>
        <RecentProjects/>
        <LampDemo/>
        <PartnersSlider/>
        <Videos/>
        <Services/>
        <ProjectsImgs/>
        <Coast/>
    </section>
  )
}

export default Home