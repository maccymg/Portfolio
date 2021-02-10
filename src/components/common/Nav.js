import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

  return (
    <div className="nav-bar-container">
      <div className="nav-bar-main">
        <Link to="bio-skills" style={{ textDecoration: 'none', color: 'black' }}>
          <div className="nav-bar-item">BIO/ SKILLS</div>
        </Link>
        <Link to="/portfolio" style={{ textDecoration: 'none', color: 'black' }}>
          <div className="nav-bar-item">PORTFOLIO</div>
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>
          <div className="last-nav-bar-item">CONTACT</div>
        </Link>
      </div>
    </div>
  )

}

export default Nav