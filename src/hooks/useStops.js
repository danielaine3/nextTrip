import { useCallback, useEffect, useState } from 'react'
import { fetchStops } from '../api'

export const useStops = (routeId, directionId) => {
  const [stops, setStops] = useState([])

  const getStops = useCallback(async () => {
    setStops(await fetchStops(routeId, directionId))
  }, [routeId, directionId])

  useEffect(() => {
      if (routeId && directionId) {
          getStops()
      }
  }, [getStops, routeId, directionId])

  return stops
}
