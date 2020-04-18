import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useFetch from 'use-http' // I haven't used this library before, testing it out :)

export const RouteSelector: React.FC<{}> = () => {
  // const _ = useFetch('http://svc.metrotransit.org/NexTrip/Routes')

  return (
    <nav
      style={{
        background: 'grey',
        flexGrow: 1,
      }}
    >
      <ul
        style={{
          paddingLeft: '1rem',
          listStyle: 'none',
        }}
      >
        <li>
          Route one{' '}
          <Link to="/dynamic-link">
            <button>North</button>
          </Link>
          <Link to="/dynamic-link">
            <button>South</button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default RouteSelector
