import React from 'react'

import Nav from './Nav'
import Portfolio from '../info/Portfolio'
import BioSkills from '../info/BioSkills'
import Contact from '../info/Contact'

function Home() {

  const [isWhite, setIsWhite] = React.useState(true)

  React.useEffect(() => {

    const color = setInterval(() => {
      setIsWhite(!isWhite)
    }, 3000)
    return () => clearInterval(color)

  })





  return (
    <div className="main">
      <Nav />
      <div className="shape-container">
        {isWhite ?
          <div className="shape s-black">
            <div className="shape-text s-t-white">Max</div>
            <div className="shape-text-bottom s-t-white">Morgan-Giles</div>
          </div>
          :
          <div className="shape s-white">
            <div className="shape-text s-t-black">Max</div>
            <div className="shape-text-bottom s-t-black">Morgan-Giles</div>
          </div>
        }
        {isWhite ?
          <div className="shape-bottom s-b-white">
            <div className="text-container">
              <div className="shape-text-right s-t-black">Software</div>
              <div className="shape-text-right-b s-t-black">Engineer</div>
            </div>
          </div>
          :
          <div className="shape-bottom s-b-black">
            <div className="text-container">
              <div className="shape-text-right s-t-white">Software</div>
              <div className="shape-text-right-b s-t-white">Engineer</div>
            </div>
          </div>
        }
      </div>
      <BioSkills />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default Home