import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from 'use-http'

import StopItem from './StopItem'

// utils.ts file to convert directions to values and vise-versa: NORTHBOUND to 1, etc..

export const StopList: React.FC<{}> = () => {
  const { route, direction } = useParams()

  const { error, data = [] } = useFetch<NextTrip.Stop[]>(
    `https://svc.metrotransit.org/NexTrip/Stops/${route}/${direction}`,
    { mode: 'cors' },
    []
  )

  return (
    <section
      style={{
        backgroundColor: 'cadetblue',
        flexGrow: 5,
      }}
    >
      {false ? (
        <>No route selected!</>
      ) : (
        <>
          <h1 style={{ textAlign: 'center' }}>Stops</h1>
          <ul
            style={{
              paddingLeft: '1rem',
              listStyle: 'none',
            }}
          >
            {data.map((stop) => (
              <StopItem key={stop.Value} item={stop} />
            ))}
          </ul>
        </>
      )}
    </section>
  )
}

export default StopList
