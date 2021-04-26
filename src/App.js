import React from 'react'
import { fetchDirections, fetchRoutes, fetchStops } from './api'
import { Dropdown } from './Components/Dropdown'
import './App.css'

export const App = () => {
  const routes = fetchRoutes()
  const directions = fetchDirections(902)
  const stops = fetchStops(902, 1)

  return (
    <div className="App">
      <Dropdown 
        id={'id'}
        options={routes}
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
