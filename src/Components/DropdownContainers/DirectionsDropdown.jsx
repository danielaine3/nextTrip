import React from 'react'
import { useDirections } from '../../hooks'
import { Dropdown } from '../Dropdown'

export const DirectionsDropdown= ({routeId, directionId, setDirectionId}) => {
  const directions = useDirections(routeId)
  
  if (!routeId || !directions.length) return null
  return (
    <Dropdown 
      id='direction-select'
      onSelect={(id) => {
        setDirectionId(id)
      }}
      options={directions}
      selected={directionId}
      title='Select Direction'
    />
  )
}
