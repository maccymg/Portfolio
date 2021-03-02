import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import portraits from '../../images/portraits.png'
import tablet from '../../images/tablet-size.png'
import newWork from '../../images/ahome-n-w.png'
import createTeam from '../../images/create-team.png'
import squads from '../../images/squads.png'
import teamShow from '../../images/team-show.png'
import snakeMoon from '../../images/snake-moon.png'
import snakeMain from '../../images/snake-main.png'
import snake from '../../images/snake.png'
import motMain from '../../images/mot-main.png'
import quote from '../../images/quote.png'

function Portfolio() {


  return (
    <div className="portfolio-container">
      <div className="portfolio-main">
        <div className="section-title-container">
          <div className="title-shape-down-white">
            <div className="section-title-down">PORTFOLIO</div>
          </div>
        </div>
        <div className="portfolio-section-one">
          <div className="p-small"></div>
          <div className="p-large">
            <div className="project-container">
              <div className="p-carousel-container">
                <div className="p-carousel">
                  <Carousel showArrows={true}>
                    <div>
                      <img className="p-photo" src={newWork} />
                    </div>
                    <div>
                      <img className="p-photo" src={portraits} />
                    </div>
                    <div>
                      <img className="p-photo" src={tablet} />
                    </div>
                  </Carousel>
                </div>
              </div>
              <div className="p-info">
                <div className="p-info-container p-info-white">
                  <h1>Project 4 – Art Website</h1>
                  <h4>Full stack – Python Django rest framework using a PostgreSQL database with React frontend, one week, solo project</h4>
                  <p>In this project, I decided to build my mum a website for her art. This was a hugely beneficial experience, as I practised working under someone elses scope of what they expected, as well as communicating with them throughout the process and ultimately delivering something that was of a high standard. Using <span className="tech-words">Python</span> to code the backend was a great learning experience as was table based databasing using <span className="tech-words">PostgreSQL</span>. Simillaly being able to go from JavaScript to a new language highlighted the importance of basic coding principles and how these apply to all languages. Similarly, being able to really spend time polishing the look of the frontend has given me confidence in my design and I am looking forward to the next challenge. Delivering a product that my mum could use and update regularly through the admin site was a great way to finish this experience and it was so rewarding revealing it to her as she loved it.</p>
                  <div className="project-links-container">
                    <a className="project-links s-t-white" href="https://bit.ly/2NqhFUt" rel="noreferrer" target="_blank">README</a>
                    <a className="project-links s-t-white" href="https://bit.ly/2NqhFUt" rel="noreferrer" target="_blank">URL LINK</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-section">
          <div className="p-large">
            <div className="project-container">
              <div className="p-info">
                <div className="p-info-container">
                  <h1>Project 3 – Football App</h1>
                  <h4>Full stack MERN app, one week, solo project </h4>
                  <p>Here, for the first time, we were tasked with building a full-stack application. Using <span className="tech-words">Mongo, Express, React and Node</span>, I built an app where you could build Premier League teams from a database of players. This was a good experience of back-end coding with the request response cycle, seeding and managing databases, error handling as well as dealing with users, comments, forms and building this all in the front end. Challenges included capturing select forms, seeding teams with owners and embedded relationships.</p>
                  <div className="project-links-container">
                    <a className="project-links s-t-black" href="https://bit.ly/2ZObwDO" rel="noreferrer" target="_blank">README</a>
                    <a className="project-links s-t-black" href="https://www.bit.ly/3pqre2H" rel="noreferrer" target="_blank">URL LINK</a>
                  </div>
                </div>
              </div>
              <div className="p-carousel-container">
                <div className="p-carousel">
                  <Carousel interval={5000}>
                    <img className="p-photo" src={createTeam} />
                    <img className="p-photo" src={squads} />
                    <img className="p-photo" src={teamShow} />
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
          <div className="p-small"></div>
        </div>
        <div className="portfolio-section-one">
          <div className="p-small"></div>
          <div className="p-large">
            <div className="project-container">
              <div className="p-carousel-container">
                <div className="p-carousel">
                  <Carousel interval={8500}>
                    <img className="p-photo" src={motMain} />
                    <img className="p-photo" src={quote} />
                  </Carousel>
                </div>
              </div>
              <div className="p-info">
                <div className="p-info-container p-info-white">
                  <h1>Project 2 – Motivational Maddening</h1>
                  <h4>Serving an API with react frontend, two days, pair coding</h4>
                  <p>In this project, I experienced the importance of clear communication and teamwork when under severe time pressure. Having just two days, we were tasked with accessing an <span className="tech-words">API</span> and displaying it with a <span className="tech-words">React</span> frontend. Being near the beginning of my development in react on top of the other factors this was by far the most challenging project for me personally. Using a motivation quote API, we built a quiz-based application that also served to give the user motivation. Using react-router-dom for a many-page application, as well as using <span className="tech-words">JSX</span> for the first time, on top of handling the logic surrounding the game, all were good learning experiences. Similarly, using a CSS library for the first time (<span className="tech-words">Bulma</span>) was useful.</p>
                  <div className="project-links-container">
                    <a className="project-links s-t-white" href="https://bit.ly/2NCqnPt" rel="noreferrer" target="_blank">README</a>
                    <a className="project-links s-t-white" href="https://www.bit.ly/2Z062pk" rel="noreferrer" target="_blank">URL LINK</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-section p-bottom">
          <div className="p-large">
            <div className="project-container">
              <div className="p-info">
                <div className="p-info-container">
                  <h1>Project 1 – Snake</h1>
                  <h4>Grid-based game, one week, solo project</h4>
                  <p>This project was a huge insight into coding web applications. Using the 3 pillars of the web, <span className="tech-words">HTML, CSS and JavaScript</span>, I was instructed to build a grid-based game. As we were using vanilla JavaScript, it was a great learning curve into manipulating arrays, selecting HTML elements and being able to change styles. Using selectors, event listeners, functions and intervals, all quite new to me at the time, really benefited my development, and I had such a good time in releasing it.</p>
                  <div className="project-links-container">
                    <a className="project-links s-t-black" href="https://bit.ly/3dGfg2w" rel="noreferrer" target="_blank">README</a>
                    <a className="project-links s-t-black" href="https://www.bit.ly/3a1x3im" rel="noreferrer" target="_blank">URL LINK</a>
                  </div>
                </div>
              </div>
              <div className="p-carousel-container">
                <div className="p-carousel">
                  <Carousel interval={4500}>
                    <img className="p-photo" src={snake} />
                    <img className="p-photo" src={snakeMain} />
                    <img className="p-photo" src={snakeMoon} />
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
          <div className="p-small"></div>
        </div>
        <div className="section-title-container margin-top-half">
          <div className="title-shape-down-white">
            <div className="section-title-down">INTERESTS</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio