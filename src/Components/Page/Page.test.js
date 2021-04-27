import React from 'react'
import { render} from '@testing-library/react'
import { Page } from './Page'

describe('<Page />', () => {
  it('should render Page', async () => {
    const { asFragment } = await render(
    <Page title={'title'}>
      <div>Test Child</div>
      <div>Test Child</div>
    </Page>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
