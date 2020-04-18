import React from 'react'
import useFetch from 'use-http'
import { Link } from 'react-router-dom'

interface RouteItemProps {
  item: NextTrip.Route
}

// Could utilize a virtualized list to limit the fetching
export const RouteItem: React.FC<RouteItemProps> = ({
  item: { Description, Route },
}) => {
  // TODO(krone): handle error
  const { error, data = [] } = useFetch<NextTrip.RouteDirection[]>(
    `https://svc.metrotransit.org/NexTrip/Directions/${Route}`,
    { mode: 'cors' },
    []
  )

  return (
    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
      {Description}
      <div style={{ paddingRight: '1rem' }}>
        {data.map(({ Text, Value }) => (
          <Link key={Value} to={`/${Route}/${Value}`}>
            <button style={{ width: '6rem' }}>{capitalize(Text)}</button>
          </Link>
        ))}
      </div>
    </li>
  )
}

const capitalize = (word: string) =>
  word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()
