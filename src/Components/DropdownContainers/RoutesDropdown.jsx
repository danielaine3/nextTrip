import React from 'react'
import { Dropdown } from '../Dropdown'

export const RoutesDropdown= ({routes, routeId, setRouteId}) => {
  if(!routes) return null
  
  return (
    <Dropdown 
      id='route-select'
      onSelect={(id) => {
        setRouteId(id)
      }}
      options={routes}
      selected={routeId}
      title='Select Route'
    />
  )
}
