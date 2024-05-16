import React from 'react'
import { Helmet } from 'react-helmet'
import HostonMenu from './HostonMenu'
import HealthSlider from './HealthSlider'
import HealthSafety from './HealthSafety'
import HealthPrecautions from './HealthPrecautions'
import HealthPeace from './HealthPeace'
import HomeInformation from './HomeInformation'
import Footer from './Footer'
function Health() {
  return (
    <div>
        <Helmet>
    <meta charSet="utf-8" />
    <title>Health & Safety</title>
    </Helmet>
    <HostonMenu />
    <HealthSlider/>
    <HealthSafety/>
    <HealthPrecautions/>
    <HealthPeace/>
    <HomeInformation />
      <Footer />
    </div>
  )
}

export default Health