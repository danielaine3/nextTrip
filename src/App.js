import React from 'react'
import { AllDropdowns } from './Components'
import  { AppBar, Container, Typography, makeStyles } from '@material-ui/core'
import './App.css';


const useStyles = makeStyles(() => ({
  appbar: {
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  title: {
    flexGrow: 1,
    padding: 10
  },
}))
export const App = () => {
  const classes = useStyles()
  return (
    <div>
      <AppBar position='static' className={classes.appbar}>
        <Typography variant='h3' className={classes.title}>
          NexTrip
        </Typography>
      </AppBar>
      <Container maxWidth='sm'>
        <Typography variant='h5' className={classes.title}>
          Real-time Departures
        </Typography>
        <AllDropdowns />
      </Container>
      
    </div>
  );
}
