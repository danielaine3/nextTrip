import { useEffect, useState } from 'react'
import { fetchRoutes } from '../api'

export const useRoutes = () => {
  const [routes, setRoutes] = useState([])
  const getRoutes = async () => {
    setRoutes(await fetchRoutes())
  }

  useEffect(() => {
    getRoutes()
  }, [])

  return routes
}