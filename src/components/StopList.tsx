import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from 'use-http'

import StopItem from './StopItem'
import { cardinalNumMap, capitalize } from '../utils/utils'

export const StopList: React.FC<{}> = () => {
  const { route, direction } = useParams()
  const isRouteSelected = route && direction

  // intentionally not handling loading state: the fetch happens so fast it would be a flash of content
  const { get, error, data = [] } = useFetch<NextTrip.Stop[]>()
  if (error) throw error
  useEffect(() => {
    // this custom, conditional fetching could be mitigated by a `skip` option
    // https://github.com/ava/use-http/issues/245
    if (isRouteSelected) get(`/Stops/${route}/${direction}`)
  }, [route, direction, get, isRouteSelected])

  return (
    <section
      style={{
        flex: '1',
        overflowY: 'auto',
        borderBottomRightRadius: '5px',
      }}
    >
      {!isRouteSelected ? (
        <h1 style={{ textAlign: 'center' }}>Please select a route</h1>
      ) : (
        <>
          <h1
            style={{
              textAlign: 'center',
            }}
          >
            {capitalize(cardinalNumMap[direction!])} Stops
          </h1>
          <ol
            style={{
              paddingLeft: '3rem',
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
