import React from 'react'

import { FaReact, FaHtml5, FaNodeJs, FaPython, FaCss3, FaYarn, FaNpm, FaGithub, FaSlack, FaVideo, FaSass, FaDocker } from 'react-icons/fa'
import { SiJavascript, SiDjango, SiMongodb, SiPostgresql, SiBulma, SiNetlify, SiHeroku, SiJquery } from 'react-icons/si'


function BioSkills() {


  return (
    <div className="bio-skills-container">
      <div className="section-title-container">
        <div className="section-title">BIO</div>
      </div>
      <div className="bio-main">
        <div className="bio-container">
          <div className="bio-space"></div>
          <div className="bio-text">Coming from a background in Classics my introduction into web development has been a new lease of life. I have always had an interest in complex games and my passion for problem solving and my desire for a new challenge has led me to fast track my learning at General Assembly. Through this process, I completed a variety of projects in an array of coding languages exploring further into problem solving and highlighting the importance of basic coding principals. I am extremely excited by the growth and innovation in the industry and this dive into software engineering has only increased my desire to learn. I am now looking for a role as a junior developer to further these skills in a professional environment.</div>
          <div className="bio-space"></div>
        </div>
      </div>
      <div className="section-title-container">
        <div className="section-title skills-heading">SKILLS</div>
      </div>
      <div className="skills-container">
        <div className="skills-title-container">
          <div className="skills-title">Confident</div>
        </div>
        <div className="icon-container">
          <div className="icons">
            <div className="icons-div">
              <FaReact />
              <div className="icon-text">React</div>
            </div>
            <div className="icons-div">
              <SiJavascript />
              <div className="icon-text">JavaScript</div>
            </div>
            <div className="icons-div">
              <FaHtml5 />
              <div className="icon-text">HTML5</div>
            </div>
            <div className="icons-div">
              <SiDjango />
              <div className="icon-text">Django</div>
            </div>
            <div className="icons-div">
              <SiMongodb />
              <div className="icon-text">MongoDb</div>
            </div>
            <div className="icons-div">
              <FaCss3 />
              <div className="icon-text">CSS3</div>
            </div>
            <div className="icons-div">
              <SiBulma />
              <div className="icon-text">Bulma</div>
            </div>
            <div className="icons-div">
              <FaSlack />
              <div className="icon-text">Slack</div>
            </div>
            <div className="icons-div">
              <FaVideo />
              <div className="icon-text">Zoom</div>
            </div>
            <div className="icons-div">
              <FaSass />
              <div className="icon-text">Sass</div>
            </div>
          </div>
        </div>
        <div className="skills-title-container">
          <div className="skills-title">Comfortable</div>
        </div>
        <div className="icon-container">
          <div className="icons">
            <div className="icons-div">
              <FaNodeJs />
              <div className="icon-text">NodeJs</div>
            </div>
            <div className="icons-div">
              <FaPython />
              <div className="icon-text">Python</div>
            </div>
            <div className="icons-div">
              <FaGithub />
              <div className="icon-text">Github</div>
            </div>
            <div className="icons-div">
              <FaYarn />
              <div className="icon-text">Yarn</div>
            </div>
            <div className="icons-div">
              <FaNpm />
              <div className="icon-text">Npm</div>
            </div>
          </div>
        </div>
        <div className="skills-title-container">
          <div className="skills-title">New Too</div>
        </div>
        <div className="icon-container">
          <div className="icons">
            <div className="icons-div">
              <SiPostgresql />
              <div className="icon-text">Postgresql</div>
            </div>
            <div className="icons-div">
              <SiNetlify />
              <div className="icon-text">Netflify</div>
            </div>
            <div className="icons-div">
              <SiHeroku />
              <div className="icon-text">Heroku</div>
            </div>
            <div className="icons-div">
              <FaDocker />
              <div className="icon-text">Docker</div>
            </div>
            <div className="icons-div">
              <SiJquery />
              <div className="icon-text">Jquery</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BioSkills