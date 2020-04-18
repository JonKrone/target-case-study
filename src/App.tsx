import React from 'react'
import { Provider } from 'use-http'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css'
import StopList from './components/StopList'
import RouteSelector from './components/RouteSelector'

function App() {
  return (
    <Provider
      url="https://svc.metrotransit.org/NexTrip"
      options={{ mode: 'cors' }}
    >
      <Router>
        <div
          style={{
            width: 1000,
            height: 600,
            margin: 'auto',
            backgroundColor: 'beige',
          }}
        >
          <header style={{ textAlign: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <h1>Your Route Helper</h1>
            </Link>
          </header>

          <div style={{ display: 'flex', height: '100%' }}>
            <RouteSelector />

            {/* Ooo, had no idea you can define multiple path matches */}
            <Route path={['/:route/:direction', '/']}>
              <StopList />
            </Route>
          </div>
        </div>
      </Router>
    </Provider>
  )
}

export default App

/**
 * Initial App structure thoughts
 *
 * container
 *  left sidebar Route and Route-Direction selector
 *    fetch available routes
 *    display all Routes with North/South buttons aside them
 *    when a route is selected, update the URL
 *  Right content area for Route-Stops
 *    when no route is selected
 *      display some cute waiting signal?
 *    when a route is selected
 *      fetch list of directions
 *      render that list
 *      Optional: add a link to a Google Map location for each stop
 *      Stretch: Render stops layed over a Google/Mapbox map widget
 *
 * To enable back/forward, we probably want to have Route and Route-Direction be a URL-parameter
 *
 * Stretch thought: We would probably get into NextTrip rate limiting if we were to pull all
 * Route-Stops for all Routes, so that we could overlay them all on top of a Map at once. But
 * only in a real high-volume (production) usage, so maybe we can get away with it for this
 * test app :)
 */
