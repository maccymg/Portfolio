import React from 'react'
import { motion } from 'framer-motion'

function Nav() {

  const [bIsActive, setBIsActive] = React.useState(false)
  const [pIsActive, setPIsActive] = React.useState(false)
  const [cIsActive, setCIsActive] = React.useState(false)

  const scrollToBio = () => {
    window.scrollTo({
      top: 700,
      left: 0,
      behavior: 'smooth'
    })
  }

  const scrollToPortfolio = () => {
    window.scrollTo({
      top: 2100,
      left: 0,
      behavior: 'smooth'
    })
  }

  const scrollToContact = () => {
    window.scrollTo({
      top: 5050,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="nav-bar-container">
      <div className="nav-bar-main">
        <motion.div
          onClick={scrollToBio} 
          className="nav-bar-item"
          onMouseEnter={() => setBIsActive(true)}
          onMouseLeave={() => setBIsActive(false)}
          animate={{
            scale: bIsActive ? [1, 1.5, 1.5, 1, 1] : [1, 1]
          }}>
          BIO/ SKILLS
        </motion.div>
        <motion.div
          onClick={scrollToPortfolio}
          className="nav-bar-item"
          onMouseEnter={() => setPIsActive(true)}
          onMouseLeave={() => setPIsActive(false)}
          animate={{
            scale: pIsActive ? [1, 1.5, 1.5, 1, 1] : [1, 1]
          }}>
          PORTFOLIO
        </motion.div>
        <motion.div
          onClick={scrollToContact}
          className="last-nav-bar-item"
          onMouseEnter={() => setCIsActive(true)}
          onMouseLeave={() => setCIsActive(false)}
          animate={{
            scale: cIsActive ? [1, 1.5, 1.5, 1, 1] : [1, 1]
          }}>
          CONTACT
        </motion.div>
      </div>
    </div>
  )

}

export default Nav