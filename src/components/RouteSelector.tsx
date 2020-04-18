import React from 'react'
import useFetch from 'use-http' // I haven't used this library before, testing it out :)
import { RouteItem } from './RouteItem'

export const RouteSelector: React.FC<{}> = () => {
  // TODO(krone): handle error
  const { error, data = [] } = useFetch<NextTrip.Route[]>(
    'https://svc.metrotransit.org/NexTrip/Routes',
    { mode: 'cors' },
    []
  )

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
        {data.slice(0, 5).map((route) => (
          <RouteItem key={route.Route} item={route} />
        ))}
      </ul>
    </nav>
  )
}

export default RouteSelector
