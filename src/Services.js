import React from 'react'
// import { Helmet } from 'react-helmet'
import HostonMenu from './HostonMenu'
import ServicesSlider from './ServicesSlider'
import Allservices from './Allservices'
import ServicesProfessional from './ServicesProfessional'
import ServicesCity from './ServicesCity'
import ServiceLocation from './ServiceLocation'
import HomeInformation from './HomeInformation'
import Footer from './Footer'
function Services() {
  return (
    <>  
    {/* <Helmet>
    <meta charSet="utf-8" />
    <title>Services</title>
    </Helmet> */}
    <HostonMenu />
    <ServicesSlider/>
    <Allservices/>
    <ServicesProfessional />
    <ServicesCity/>
    <ServiceLocation/>
    <HomeInformation />
      <Footer />
</>
   
  )
}

export default Services