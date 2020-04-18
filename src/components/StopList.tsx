import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from 'use-http'

import StopItem from './StopItem'
import { cardinalNumMap, capitalize } from '../utils/utils'

// utils.ts file to convert directions to values and vise-versa: NORTHBOUND to 1, etc..

export const StopList: React.FC<{}> = () => {
  const { route, direction } = useParams()
  const isRouteSelected = route && direction

  const { get, error, data = [] } = useFetch<NextTrip.Stop[]>({ mode: 'cors' })
  useEffect(() => {
    // this custom, conditional fetching could be mitigated by a `skip` option
    // https://github.com/ava/use-http/issues/245
    if (isRouteSelected) get(`/Stops/${route}/${direction}`)
  }, [route, direction])

  return (
    <section
      style={{
        backgroundColor: 'cadetblue',
        flexGrow: 5,
        overflowY: 'auto',
      }}
    >
      {!isRouteSelected ? (
        <>No route selected!</>
      ) : (
        <>
          <h1 style={{ textAlign: 'center' }}>
            {capitalize(cardinalNumMap[direction!])} Stops
          </h1>
          <ol
            style={{
              paddingLeft: '2rem',
            }}
          >
            {data.map((stop) => (
              <StopItem key={stop.Value} item={stop} />
            ))}
          </ol>
        </>
      )}
    </section>
  )
}

export default StopList
