import React, { Suspense } from 'react'
import { Provider } from 'use-http'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css'
import StopList from './components/StopList'
import RouteList from './components/RouteList'

function App() {
  return (
    // It looks like use-https is not properly persisting multiple sequential calls
    // I'll be posting an issue in the project once I can replicate it in a codesandbox
    <Provider
      url="https://svc.metrotransit.org/NexTrip"
      options={{ mode: 'cors', persist: true }}
    >
      <Router>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10%',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: 1000,
              height: 600,
              backgroundColor: 'white',
              border: '1px solid var(--border-color)',
              borderRadius: '5px',
            }}
          >
            <header style={{ height: '15%', textAlign: 'center' }}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <h1>NextTrip tips</h1>
              </Link>
            </header>

            <section
              style={{
                display: 'flex',
                height: '85%',
                borderTop: '2px solid #4c5c68',
              }}
            >
              <Suspense
                fallback={
                  <div style={{ textAlign: 'center' }}>
                    <h1>Loading Routes</h1>
                  </div>
                }
              >
                <RouteList />

                {/* New finding: you can describe multiple path matches */}
                <Route path={['/:route/:direction', '/']}>
                  <StopList />
                </Route>
              </Suspense>
            </section>
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
