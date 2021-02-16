import React from 'react'
import { Linking } from 'react-native'

import { FaGithub } from 'react-icons/fa'
import { IoIosArrowUp, IoLogoLinkedin, IoMdMail } from 'react-icons/io'

function Contact() {

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="contact-container">
      <div className="contact-main">
        <div className="contact-icons">
          <IoMdMail onClick={() => Linking.openURL('mailto:maxmorgangiles@gmail.com') }className="contact-icon"/>
          <a href="https://www.github.com/maccymg" rel="noreferrer" target="_blank">
            <FaGithub className="contact-icon"/>
          </a>
          <a href="https://www.linkedin.com/in/max-mg" rel="noreferrer" target="_blank">
            <IoLogoLinkedin className="contact-icon"/>
          </a>
        </div>
        <div className="back-to-top" onClick={handleScroll}>
          <IoIosArrowUp className="contact-icon" />
          <a className="contact-text">Back To Top</a>
        </div>
      </div>
    </div>
    
  )
}

export default Contact