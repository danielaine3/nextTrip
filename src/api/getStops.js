export const getStops = async (routeId, directionId) => {
  try {
    const response = await fetch(`https://svc.metrotransit.org/nextripv2/stops/${routeId}/${directionId}`)
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}
