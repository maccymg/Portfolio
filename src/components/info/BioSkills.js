import React from 'react'

import { FaReact, FaHtml5, FaNodeJs, FaPython, FaCss3, FaYarn, FaNpm, FaGithub, FaSlack, FaVideo, FaSass, FaDocker, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { SiJavascript, SiDjango, SiMongodb, SiPostgresql, SiBulma, SiNetlify, SiHeroku, SiJquery } from 'react-icons/si'


function BioSkills() {
  return (
    <div className="bio-skills-container">
      <div className="section-title-container">
        <div className="section-title">BIO/ SKILLS</div>
      </div>
      <div className="icon-container">
        <div className="icons">
          <FaReact />
          <SiJavascript />
          <FaHtml5 />
          <SiDjango />
          <SiMongodb />
          <FaArrowLeft />
          <div>Confident</div>
          <FaArrowRight />
          <FaCss3 />
          <SiBulma />
          <FaSlack />
          <FaVideo />
          <FaSass />
        </div>
      </div>
      <div className="bio-main">
        <div className="bio-container">
          <div className="bio-space"></div>
          <div className="bio-text">While I am very much at the starting point in my career, my drive and curiosity to learn is still apparent. I have experienced a variety of roles in different fields that have taught me the value of hard work while gaining a BA in Classical Civilisation. My passion for problem solving, my desire for a new challenge, and my interest in software engineering particularly, has led me to fast track my learning at General Assembly. I am now looking for a role as a junior developer to further these skills in a professional environment and to progress my career in tech.</div>
          <div className="bio-space"></div>
        </div>
      </div>
      <div className="icon-container">
        <div className="icons">
          <FaNodeJs />
          <FaPython />
          <FaGithub />
          <FaYarn />
          <FaNpm />
          <FaArrowLeft />
          <div>Comfortable</div>
          <div>New Too</div>
          <FaArrowRight />
          <SiPostgresql />
          <SiNetlify />
          <SiHeroku />
          <FaDocker />
          <SiJquery />
        </div>
      </div>
    </div>
  )
}

export default BioSkills