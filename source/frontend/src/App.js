import React from 'react'
// ##### Basic Routing #####
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import navConfig from './navConfig'

import './App.css'

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {navConfig.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  )
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
const RouteWithSubRoutes = route => {
  return (
    <Route
      exact 
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

export default App
