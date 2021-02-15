import React from 'react'

function Nav() {

  const scrollToBio = () => {
    window.scrollTo({
      top: 700,
      left: 0,
      behavior: 'smooth'
    })
  }

  const scrollToPortfolio = () => {
    window.scrollTo({
      top: 1400,
      left: 0,
      behavior: 'smooth'
    })
  }

  const scrollToContact = () => {
    window.scrollTo({
      top: 4200,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="nav-bar-container">
      <div className="nav-bar-main">
        <a onClick={scrollToBio} className="nav-bar-item">BIO/ SKILLS</a>
        <a onClick={scrollToPortfolio} className="nav-bar-item">PORTFOLIO</a>
        <a onClick={scrollToContact} className="last-nav-bar-item">CONTACT</a>
      </div>
    </div>
  )

}

export default Nav