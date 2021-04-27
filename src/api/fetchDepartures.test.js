import fetchMock from 'jest-fetch-mock'
import { fetchDepartures } from './fetchDepartures'

beforeEach(() => {
    fetchMock.resetMocks()
})

describe('Testing departures service', () => {
  it('should return data', async () => {
      fetchMock.mockResponse(JSON.stringify())
      await fetchDepartures('902', 0, 'BAD')
      expect(fetchMock).toHaveBeenCalledTimes(1)
  })
  it('should return error', async () => {
      fetchMock.mockReject(() => Promise.reject('API is down'))
      const expected = await fetchDepartures()
      expect(fetchMock).toHaveBeenCalledTimes(1)
      expect(expected).toBe("API is down")
  })
})
