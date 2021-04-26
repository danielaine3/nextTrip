import { useCallback, useEffect, useState } from 'react'
import { fetchDepartures } from '../api'

export const useDepartures = (routeId, directionId, stopId) => {
  const [departures, setDepartures] = useState()

  const getDepartures = useCallback(async () => {
      setDepartures(await fetchDepartures(routeId, directionId, stopId))
  }, [routeId, directionId, stopId])

  useEffect(() => {
    if(routeId && directionId && stopId) {
      getDepartures()
    }
      
  }, [getDepartures, routeId, directionId, stopId])
  return departures
}