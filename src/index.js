import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Services from './views/services'
import WhyWaterside from './views/why-waterside'
import YourGlobalRepresentative from './views/your-global-representative'
import StrategicCorridors from './views/strategic-corridors'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Services} exact path="/services" />
        <Route component={WhyWaterside} exact path="/why-waterside" />
        <Route
          component={YourGlobalRepresentative}
          exact
          path="/your-global-representative"
        />
        <Route
          component={StrategicCorridors}
          exact
          path="/strategic-corridors"
        />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
