import React from 'react'
import useFetch from 'use-http'
import { RouteItem } from './RouteItem'
import { useRouteMatch } from 'react-router-dom'
import { cardinalNumMap } from '../utils/utils'

export const RouteList: React.FC<{}> = () => {
  const match = useRouteMatch('/:route/:dir')
  const params: Record<string, string> = match?.params || {}

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
          <RouteItem
            key={route.Route}
            item={route}
            isActive={params.route === route.Route}
            activeDir={cardinalNumMap[params.dir]}
          />
        ))}
      </ul>
    </nav>
  )
}

export default RouteList
