import React from 'react'
import useFetch from 'use-http' // I haven't used this library before, testing it out :)
import { RouteItem } from './RouteItem'
import { useRouteMatch } from 'react-router-dom'

export const RouteSelector: React.FC<{}> = () => {
  const match = useRouteMatch('/:route/:dir')
  const params: Record<string, string> = match?.params || {}

  // TODO(krone): handle error
  const { error, data = [] } = useFetch<NextTrip.Route[]>(
    { path: '/Routes', mode: 'cors' },
    []
  )

  return (
    <nav
      style={{
        width: '50%',
        overflow: 'auto',
      }}
    >
      <ul
        style={{
          paddingLeft: 0,
          listStyle: 'none',
        }}
      >
        {data.map((route) => (
          <RouteItem
            key={route.Route}
            item={route}
            isActive={params.route === route.Route}
          />
        ))}
      </ul>
    </nav>
  )
}

export default RouteSelector
