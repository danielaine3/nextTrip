import React from 'react'
import { getDirections, getRoutes, getStops } from './api'
import logo from './logo.svg';
import './App.css';


export const App = () => {
  getRoutes()
  getDirections(902)
  getStops(902, 1)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
