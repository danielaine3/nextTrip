import React from 'react'
import { render } from '@testing-library/react'
import { Dropdown } from './Dropdown'

const options = [
  {direction_id: '0', direction_name: 'Northbound'},
  {direction_id: '1', direction_name: 'Southbound'},
]
describe('<Dropdown />', () => {
  it('should render Dropdown', async () => {
    const { asFragment} = await render(
      <Dropdown
        id={'id'}
        options={options}
        onSelect={jest.fn()}
        selected={''}
        title={'title'}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})