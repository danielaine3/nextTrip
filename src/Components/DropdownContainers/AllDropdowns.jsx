import React, { useState } from 'react'
import { useRoutes } from '../../hooks'
import { RoutesDropdown } from './RoutesDropdown'

export const AllDropdowns = () => {
  const routes = useRoutes()
  const [routeId, setRouteId] = useState('')
  
  return (
    <>
      <RoutesDropdown routes={routes} routeId={routeId} setRouteId={setRouteId} />
    </>
  )
}
