export const fetchDirections = async (routeId) => {
  try {
    const response = await fetch(`https://svc.metrotransit.org/nextripv2/directions/${routeId}`)
    const data = await response.json()
    return data.map(datum => ({
      ...datum,
      direction_id: datum.direction_id.toString()
    }))
  } catch (error) {
    return error
  }   
}
