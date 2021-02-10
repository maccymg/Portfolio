import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Portfolio from './components/info/Portfolio'
import Contact from './components/info/Contact'
import BioSkills from './components/info/BioSkills'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/bio-skills" component={BioSkills} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
