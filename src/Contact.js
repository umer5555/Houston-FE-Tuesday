import React from 'react'
import { Helmet } from 'react-helmet'
import ContactSlider from './ContactSlider'
import HostonMenu from './HostonMenu'
import ContactTouch from './ContactTouch'
import ContactForm from './ContactForm'
function Contact() {
  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us</title>
            </Helmet>
        <HostonMenu />
        <ContactSlider />
        <ContactTouch />
        <ContactForm/>
    </div>
  )
}

export default Contact