export const getRoutes = async () => {
  try {
    const response = await fetch(`https://svc.metrotransit.org/nextripv2/routes/`)
    const data = await response.json()
    return data
  } catch (error) {
      return error
  }
}
