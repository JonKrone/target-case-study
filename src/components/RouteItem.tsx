import React from 'react'
import useFetch from 'use-http'
import { Link, useRouteMatch } from 'react-router-dom'
import { capitalize } from '../utils/utils'

interface RouteItemProps {
  item: NextTrip.Route
}

export const RouteItem: React.FC<RouteItemProps> = ({
  item: { Description, Route },
}) => {
  const match = useRouteMatch('/:route/:dir')
  const params: Record<string, string> = match?.params || {}
  const isActive = params.route === Route
  // const activeDir = cardinalNumMap[params.dir]

  // TODO(krone): handle error
  const { error, data = [] } = useFetch<NextTrip.RouteDirection[]>(
    {
      path: `/Directions/${Route}`,
      suspense: true,
    },
    []
  )

  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 0',
        backgroundColor: isActive ? '#00a896' : undefined,
      }}
    >
      <h4 style={{ width: '45%', margin: 0, paddingLeft: '1rem' }}>
        {Description}
      </h4>
      <div style={{ paddingRight: '1rem' }}>
        {data.map(({ Text, Value }, i) => (
          <Link key={Value} to={`/${Route}/${Value}`}>
            <button
              tabIndex={-1} // Only one of Link or Button need be in the keyboard tab order
              style={{
                width: '6rem',
                padding: '0.5rem',
                borderRight:
                  i % 2 === 0 ? '1px solid var(--border-color)' : undefined,
              }}
            >
              {capitalize(Text)}
            </button>
          </Link>
        ))}
      </div>
    </li>
  )
}

export default RouteItem
