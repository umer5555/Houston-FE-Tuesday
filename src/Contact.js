import React from 'react'
 
import ContactSlider from './ContactSlider'
import HostonMenu from './HostonMenu'
import ContactTouch from './ContactTouch'
import ContactForm from './ContactForm'
import Footer from './Footer'
import HomeInformation from './HomeInformation'
import ContactMap from './ContactMap'
function Contact() {
  return (
    <div>
        {/* <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us</title>
            </Helmet> */}
        <HostonMenu />
        <ContactSlider />
        <ContactTouch />
        <ContactForm/>
        <ContactMap />
        <HomeInformation />
        <Footer />
        
    </div>
  )
}

export default Contact