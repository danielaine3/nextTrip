export const getRoutes = async () => {
  try {
    const response = await fetch(`https://svc.metrotransit.org/nextripv2/routes/`)
    console.log('response', response)
    const data = await response.json()
    console.log('data', data)
    return data
  } catch (error) {
      return error
  }
}
