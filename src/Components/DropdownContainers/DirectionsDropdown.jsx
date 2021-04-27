import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDirections } from '../../hooks'
import { Dropdown } from '../Dropdown'

export const DirectionsDropdown= ({routeId, directionId, setDirectionId}) => {
  const history = useHistory()
  const directions = useDirections(routeId)
  
  if (!routeId || !directions.length) return null

  return (
    <Dropdown 
      id='direction-select'
      onSelect={(id) => {
        setDirectionId(id)
        history.push(`/${routeId}/${id}`)
      }}
      options={directions}
      selected={directionId}
      title='Select Direction'
    />
  )
}
