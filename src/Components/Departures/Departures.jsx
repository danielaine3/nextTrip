import React from 'react'
import { useParams } from 'react-router-dom'
import { useDepartures } from '../../hooks/useDepartures'
import { 
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from '@material-ui/core'
import { Alert } from '@material-ui/lab'

export const Departures = () => {
  const { routeId, directionId, stopId } = useParams()
  const departureData = useDepartures(routeId, directionId, stopId)

  if (!departureData) return null

  if (!departureData.departures.length) return (
    <Alert severity="error">{`Sorry, no upcoming departures for ${departureData.stops[0].description}.`}</Alert>
  )

  return (
    <TableContainer component={Paper} data-testid='departures-table'>
      <Table>
        <TableHead>
          {departureData.stops.map(stop => (
            <TableRow key={stop.stop_id}>
              <TableCell align='left'>{stop.description}</TableCell>
              <TableCell align='right'>Stop #:{stop.stop_id}</TableCell>
            </TableRow>
          ))}
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
  )
}
