import React from 'react'
import { useDepartures } from '../../hooks/useDepartures'
import { Paper, TableContainer, Table, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core'

export const Departures = ({routeId, directionId, stopId}) => {
  const departureData = useDepartures(routeId, directionId, stopId)

  if(!departureData) return null

  // if(departureData.departures.length) {
    return (
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          {departureData.stops.map(stop => (
            <TableRow key={stop.stop_id}>
              <TableCell align='left'>{stop.description}</TableCell>
              <TableCell align='right'>Stop #:{stop.stop_id}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>Route</TableCell>
            <TableCell>Destination</TableCell>
            <TableCell>Departs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {departureData.departures.map(departure => (
            <TableRow key={departure.trip_id}>
              <TableCell>{departure.route_short_name}</TableCell>
              <TableCell>{departure.description}</TableCell>
              <TableCell>{departure.departure_text}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}