export const getStops = async (routeId, directionId) => {
  try {
    const response = await fetch(`https://svc.metrotransit.org/nextripv2/stops/${routeId}/${directionId}`)
    console.log('response', response)
    const data = await response.json()
    console.log('data', data)
    return data
  } catch (error) {
    return error
  }
}
