import React from 'react'
import { useHistory } from 'react-router-dom'
import { useStops } from '../../hooks'
import { Dropdown } from '../Dropdown'

export const StopsDropdown= ({ routeId, directionId, stopId, setStopId}) => {
  const history = useHistory()
  const stops = useStops(routeId, directionId)
  if(!directionId || !stops.length) return null

  return (
    <Dropdown 
      id='stop-select'
      onSelect={(id) => {
        setStopId(id)
        history.push(`/${routeId}/${directionId}/${id}`)
      }}
      options={stops}
      selected={stopId}
      title='Select Stop'
    />

  )
}
