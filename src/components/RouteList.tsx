import React from 'react'
import useFetch from 'use-http'
import RouteItem from './RouteItem'

export const RouteList: React.FC<{}> = () => {
  // TODO(krone): handle error
  const { error, data = [] } = useFetch<NextTrip.Route[]>(
    { path: '/Routes', suspense: true },
    []
  )

  return (
    <nav
      style={{
        width: '50%',
        overflow: 'auto',
        borderBottomLeftRadius: '5px',
      }}
    >
      <ul
        style={{
          margin: 0,
          paddingLeft: 0,
          listStyle: 'none',
        }}
      >
        {data.map((route) => (
          <RouteItem key={route.Route} item={route} />
        ))}
      </ul>
    </nav>
  )
}

export default RouteList
