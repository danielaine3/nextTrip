import fetchMock from 'jest-fetch-mock'
import { fetchStops } from './fetchStops'

beforeEach(() => {
    fetchMock.resetMocks()
})

describe('Testing departures service', () => {
  it('should return data', async () => {
      fetchMock.mockResponse(JSON.stringify())
      await fetchStops('902', 0)
      expect(fetchMock).toHaveBeenCalledTimes(1)
  })
  it('should return error', async () => {
      fetchMock.mockReject(() => Promise.reject('API is down'))
      const expected = await fetchStops()
      expect(fetchMock).toHaveBeenCalledTimes(1)
      expect(expected).toBe("API is down")
  })
})
