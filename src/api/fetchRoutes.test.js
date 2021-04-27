import fetchMock from 'jest-fetch-mock'
import { fetchRoutes } from './fetchRoutes'

beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.enableMocks()
})

describe('Testing departures service', () => {
  it('should return data', async () => {
      fetchMock.mockResponse(JSON.stringify())
      await fetchRoutes()
      expect(fetchMock).toHaveBeenCalledTimes(1)
  })
  it('should return error', async () => {
      fetchMock.mockReject(() => Promise.reject('API is down'))
      const expected = await fetchRoutes()
      expect(fetchMock).toHaveBeenCalledTimes(1)
      expect(expected).toBe("API is down")
  })
})
