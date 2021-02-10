import React from 'react'

import Nav from './Nav'

function Home() {
  return (
    <div className="main">
      <Nav />
      <div className="shape-container">
        <div className="shape">
          <div className="shape-text">Max</div>
          <div className="shape-text-bottom">Morgan-Giles</div>
        </div>
        <div className="shape-bottom">
          <div className="text-container">
            <div className="shape-text-right">Software</div>
            <div className="shape-text-right-b">Engineer</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home