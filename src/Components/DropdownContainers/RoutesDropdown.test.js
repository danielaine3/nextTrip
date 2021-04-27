import React from 'react'
import { render } from '@testing-library/react'
import { RoutesDropdown } from './RoutesDropdown'

const mockUseHistory = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useParams: () => ({
      routeId: 'routeId',
      directionId: 'directionId',
      stopId: 'stopId'
    }),
    useHisory: () => ({ push: mockUseHistory })
  }
))

describe('<RoutesDropdown />', () => {
  it('should render null', async () => {
    const { asFragment } = await render(<RoutesDropdown />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('should render', async () => {
    const routes = [
      {route_id: "000", route_label: "METRO Blue Line"},
      {route_id: "111", route_label: "METRO Blue Line"}
    ]

    const { asFragment } = await render(
      <RoutesDropdown
        routes={routes} 
        routeId={'000'} 
        setRouteId={jest.fn()}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})