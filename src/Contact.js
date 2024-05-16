import React from 'react'
import { Helmet } from 'react-helmet'
import Slider from './Slider'
import HostonMenu from './HostonMenu'
function Contact() {
  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us</title>
            </Helmet>
        <HostonMenu />
        <Slider />
    </div>
  )
}

export default Contact