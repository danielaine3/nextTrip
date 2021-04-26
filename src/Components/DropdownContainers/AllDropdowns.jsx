import React, { useState } from 'react'
import { useRoutes } from '../../hooks'
import { DirectionsDropdown } from './DirectionsDropdown'
import { RoutesDropdown } from './RoutesDropdown'
import { StopsDropdown } from './StopsDropdown'

export const AllDropdowns = () => {
  const routes = useRoutes()
  const [routeId, setRouteId] = useState('')
  const [directionId, setDirectionId] = useState('')
  const [stopId, setStopId] = useState('')
  
  return (
    <>
        <RoutesDropdown routes={routes} routeId={routeId} setRouteId={setRouteId} />
        <DirectionsDropdown routeId={routeId} directionId={directionId} setDirectionId={setDirectionId} />
        <StopsDropdown routeId={routeId} directionId={directionId} stopId={stopId} setStopId={setStopId} />
    </>
  )
}
