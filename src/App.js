import React from 'react'
import { getDirections, getRoutes, getStops } from './api'
import { Dropdown } from './Components/Dropdown'
import './App.css';


export const App = () => {
  const routes = getRoutes()
  getDirections(902)
  getStops(902, 1)

  return (
    <div className="App">
      <Dropdown 
        id={'id'}
        options={routes}
        title={'title'}
      />
    </div>
  );
}
