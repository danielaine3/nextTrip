import React from 'react'
import { useHistory } from 'react-router-dom'
import { Dropdown } from '../Dropdown'

export const RoutesDropdown= ({routes, routeId, setRouteId}) => {
  const history = useHistory()
  if(!routes) return null
  
  return (
    <Dropdown 
      id='route-select'
      onSelect={(id) => {
        setRouteId(id)
        history.push(`/${id}`)
      }}
      options={routes}
      selected={routeId}
      title='Select Route'
    />
  )
}
