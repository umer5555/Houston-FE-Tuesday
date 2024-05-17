import React from 'react'
 
import Slider from './Slider'
import Footer from './Footer'
import HostonMenu from './HostonMenu'
import AboutCompany from './AboutCompany'
import AboutCustomers from './AboutCustomers'
import AboutSlider from './AboutSlider'
import AboutProfessional from './AboutProfessional'
import HomeTestimonials from './HomeTestimonials'
import HomeInformation from './HomeInformation'


function About() {
  return (
    <div>
         


            <HostonMenu />
            <AboutSlider />
            <AboutCompany/>
            <AboutCustomers/>
            <AboutProfessional/>
            <HomeTestimonials />
            <HomeInformation />
      <Footer />
    </div>
  )
}

export default About