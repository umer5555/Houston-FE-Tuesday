import React from 'react'
import CarRental from './CarRental'
import HomeServices from './HomeServices'
import HomeCompany from './HomeCompany'
import HomeProfessional from './HomeProfessional'
import HomeAdvantages from './HomeAdvantages'
import HomePricing from './HomePricing'
import HomeTestimonials from './HomeTestimonials'
import HomeAccordian from './HomeAccordian'
import HomeInformation from './HomeInformation'


import Slider from './Slider'
import Footer from './Footer'
import HostonMenu from './HostonMenu'
import { Helmet } from 'react-helmet'
function Home() {
  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Houston Limo</title>
            </Helmet>
        <HostonMenu />
        <Slider />
        <CarRental/>
        <HomeServices/>
        <HomeCompany/>
        <HomeProfessional/>
        <HomeAdvantages/>
        <HomePricing/>
        <HomeTestimonials />
       <HomeAccordian />
       <HomeInformation />

        
      <Footer />
    </div>
  )
}

export default Home