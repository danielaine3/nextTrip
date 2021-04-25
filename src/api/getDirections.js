export const getDirections = async (routeId) => {
  try {
    const response = await fetch(`https://svc.metrotransit.org/nextripv2/directions/${routeId}`)
    console.log('response', response)
    const data = await response.json()
    console.log('data', data)
  } catch (error) {
    return error
  }   
}
