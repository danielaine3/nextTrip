import React from 'react'
import { useStops } from '../../hooks'
import { Dropdown } from '../Dropdown'

export const StopsDropdown= ({ routeId, directionId, stopId, setStopId}) => {
  const stops = useStops(routeId, directionId)
  if(!directionId || !stops.length) return null

  return (
    <Dropdown 
      id='stop-select'
      onSelect={(id) => {
        setStopId(id)
      }}
      options={stops}
      selected={stopId}
      title='Select Stop'
    />

  )
}
