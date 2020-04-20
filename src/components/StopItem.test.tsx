import React from 'react'
import { render } from '@testing-library/react'

import StopItem from './StopItem'

const testStop = { Text: 'P. Sherman 42 Wallaby Way, Sydney', Value: '1' }

describe('StopItem', () => {
  it('renders', () => {
    const { asFragment, getByText } = render(<StopItem item={testStop} />)

    expect(getByText(/Wallaby/)).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })
})
