export const fetchDirections = async (routeId) => {
  try {
    const response = await fetch(`https://svc.metrotransit.org/nextripv2/directions/${routeId}`)
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }   
}
