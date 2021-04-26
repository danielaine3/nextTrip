export const fetchDepartures = async (routeId, directionId, stopId) => {
  try {
    const response = await fetch(`https://svc.metrotransit.org/nextripv2/${routeId}/${directionId}/${stopId}`)
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}