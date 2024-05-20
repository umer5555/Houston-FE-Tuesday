import React from 'react'
import HostonMenu from './HostonMenu'
import { Helmet } from 'react-helmet'
import FleetSlider from './FleetSlider'
import FleetLuxury from './FleetLuxury'
import HomeInformation from './HomeInformation'
import Footer from './Footer'
import HomeTestimonials from './HomeTestimonials'
import ResponsiveCarousel from './ResponsiveCarousel'

function Fleet() {
  return (
    <>
     <Helmet>
    <meta charSet="utf-8" />
    <title>Fleet</title>
    </Helmet>
    <HostonMenu />    
    {/* <FleetSlider/> */}
    <FleetLuxury/>
    {/* <ResponsiveCarousel /> */}
    <HomeTestimonials />
    <HomeInformation />

        
<Footer />
    </>
  )
}

export default Fleet