import React from 'react'
import { useParams } from 'react-router-dom'
import { useDepartures } from '../../hooks/useDepartures'
import { 
  makeStyles,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Typography, 

} from '@material-ui/core'
import { Alert } from '@material-ui/lab'

const useStyles = makeStyles(() => ({
  stopInfo: {
    color: 'white',
    backgroundColor: 'green',
    alignItems: 'center',
    padding: 10
  },
  stopName: {
    fontSize: '20px'
  }
}))

export const Departures = () => {
  const classes = useStyles()
  const { routeId, directionId, stopId } = useParams()
  const departureData = useDepartures(routeId, directionId, stopId)

  if (!departureData) return null

  if (!departureData.departures.length) return (
    <Alert severity="error">{`Sorry, no upcoming departures for ${departureData.stops[0].description}.`}</Alert>
  )

  return (
    <>
      {departureData.stops.map(stop => (
        <Paper className={classes.stopInfo} key={stop.stop_id} elevation={3}>
          <Typography align='center' className={classes.stopName}>{stop.description}</Typography>
          <Typography align='center'>Stop #:{stop.stop_id}</Typography>
        </Paper>
      ))}
      <TableContainer component={Paper} data-testid='departures-table'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='left'>Route</TableCell>
              <TableCell align='left'>Destination</TableCell>
              <TableCell align='right'>Departs</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {departureData.departures.map(departure => (
              <TableRow key={departure.trip_id}>
                <TableCell align='left'>{departure.route_short_name}</TableCell>
                <TableCell align='left'>{departure.description}</TableCell>
                <TableCell align='right'>{departure.departure_text}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
