import fetchMock from 'jest-fetch-mock'
import { fetchDirections } from './fetchDirections'

beforeEach(() => {
    fetchMock.resetMocks()
})

describe('Testing departures service', () => {
  it('should return data', async () => {
      fetchMock.mockResponse(JSON.stringify())
      await fetchDirections('902')
      expect(fetchMock).toHaveBeenCalledTimes(1)
  })
  it('should return error', async () => {
      fetchMock.mockReject(() => Promise.reject('API is down'))
      const expected = await fetchDirections()
      expect(fetchMock).toHaveBeenCalledTimes(1)
      expect(expected).toBe("API is down")
  })
})
