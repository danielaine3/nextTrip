import { useCallback, useEffect, useState } from 'react'
import { fetchDirections } from '../api'

export const useDirections = (routeId) => {
  const [directions, setDirections] = useState([])
  
  const getDirections = useCallback(async () => {
    setDirections(await fetchDirections(routeId))
  }, [routeId])

  useEffect(() => {
    if (routeId) {
      getDirections()
    }
  }, [getDirections, routeId])

  return directions
}