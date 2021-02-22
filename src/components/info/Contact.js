import React from 'react'
import { Linking } from 'react-native'
import { motion } from 'framer-motion'

import { FaGithub } from 'react-icons/fa'
import { IoIosArrowUp, IoLogoLinkedin, IoMdMail } from 'react-icons/io'

function Contact() {

  const [topIsActive, setTopIsActive] = React.useState(false)
  const [linkedActive, linkedIsActive] = React.useState(false)
  const [gitActive, gitIsActive] = React.useState(false)
  const [emailActive, emailIsActive] = React.useState(false)

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
          <motion.div
            onMouseEnter={() => emailIsActive(true)}
            onMouseLeave={() => emailIsActive(false)}
            animate={{
              rotate: emailActive ? 180 : 360
            }}>
            <IoMdMail onClick={() => Linking.openURL('mailto:maxmorgangiles@gmail.com') }className="contact-icon"/>
          </motion.div>
          <motion.div
            onMouseEnter={() => gitIsActive(true)}
            onMouseLeave={() => gitIsActive(false)}
            animate={{
              rotate: gitActive ? 180 : 360
            }}>
            <a href="https://www.github.com/maccymg" rel="noreferrer" target="_blank">
              <FaGithub className="contact-icon"/>
            </a>
          </motion.div>
          <motion.div
            onMouseEnter={() => linkedIsActive(true)}
            onMouseLeave={() => linkedIsActive(false)}
            animate={{
              rotate: linkedActive ? 180 : 360
            }}>
            <a href="https://www.linkedin.com/in/max-mg" rel="noreferrer" target="_blank">
              <IoLogoLinkedin className="contact-icon"/>
            </a>
          </motion.div>
        </div>
        <motion.div
          onClick={handleScroll}
          className="back-to-top"
          onMouseEnter={() => setTopIsActive(true)}
          onMouseLeave={() => setTopIsActive(false)}
          animate={{
            scale: topIsActive ? [1, 1.5, 1.5, 1, 1] : [1, 1]
          }}>
          <IoIosArrowUp className="contact-icon" />
          <a className="contact-text">Back To Top</a>
        </motion.div>
      </div>
    </div>
    
  )
}

export default Contact