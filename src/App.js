import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AllDropdowns, Departures, Page } from './Components'
import  { AppBar, Typography, makeStyles } from '@material-ui/core'


const useStyles = makeStyles(() => ({
  appbar: {
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  title: {
    flexGrow: 1,
    padding: 10,
  },
}))

export const App = () => {
  const classes = useStyles()
  return (
    <Router>
      <AppBar position='static' className={classes.appbar}>
        <Typography variant='h3' className={classes.title}>
          NextTrip
        </Typography>
      </AppBar>
      <Page title={'Real-time Departures'}>
        <Route path='/'>
          <AllDropdowns />
        </Route>
        <Route path='/:routeId/:directionId/:stopId'>
          <Departures />
        </Route>
      </Page>
    </Router>
  )
}
