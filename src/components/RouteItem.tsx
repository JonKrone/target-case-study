import React from 'react'
import useFetch from 'use-http'
import { Link } from 'react-router-dom'
import { capitalize } from '../utils/utils'

interface RouteItemProps {
  item: NextTrip.Route
  isActive: boolean
}

// Could utilize a virtualized list to limit the fetching
export const RouteItem: React.FC<RouteItemProps> = ({
  item: { Description, Route },
  isActive,
}) => {
  // TODO(krone): handle error
  const { error, data = [] } = useFetch<NextTrip.RouteDirection[]>(
    { path: `/Directions/${Route}`, mode: 'cors' },
    []
  )

  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        padding: '1rem 0',
        backgroundColor: isActive ? 'cadetblue' : undefined,
      }}
    >
      <h4 style={{ width: '45%', margin: 0, paddingLeft: '1rem' }}>
        {Description}
      </h4>
      <div style={{ paddingRight: '1rem' }}>
        {data.map(({ Text, Value }) => (
          <Link key={Value} to={`/${Route}/${Value}`}>
            <button style={{ width: '6rem', padding: '0.5rem' }}>
              {capitalize(Text)}
            </button>
          </Link>
        ))}
      </div>
    </li>
  )
}
