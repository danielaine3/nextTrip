import React, { useState } from 'react'
import { useRoutes } from './hooks'
import { fetchDirections, fetchStops } from './api'
import { Dropdown } from './Components/Dropdown'
import './App.css'

export const App = () => {
  const [routes, setRoutes] = useState([])
  useRoutes()
  const directions = fetchDirections(902)
  const stops = fetchStops(902, 1)

  return (
    <div className="App">
      <Dropdown 
        id={'id'}
        onSelect={(id) => {
          setRoutes(id)
        }}
        options={routes}
        selected={902}
        title={'Select route'}
      />
      <Dropdown 
        id={'id'}
        options={directions}
        title={'Select direction'}
      />
      <Dropdown 
        id={'id'}
        options={stops}
        title={'Select stop'}
      />
    </div>
  );
}
