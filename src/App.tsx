import React from 'react'
import './App.css'

function App() {
  return (
    <div className="TripExplorer">
      <div></div>
    </div>
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
