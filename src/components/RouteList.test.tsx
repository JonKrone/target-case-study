import React from 'react'
import { render } from '@testing-library/react'
import useFetch from 'use-http'

import RouteList from './RouteList'

jest.mock('use-http', () => ({
  __esModule: true,
  default: jest.fn(() => mockUseFetchData),
}))

jest.mock('./RouteItem', () => ({
  __esModule: true,
  default: jest.fn(() => <>RouteItem</>),
}))

const mockUseFetchData = {
  data: [{ Description: 'METRO Blue', Route: '81', ProviderID: '1' }],
}

describe('RouteList', () => {
  it('renders', () => {
    const { asFragment } = render(<RouteList />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('invokes useFetch', () => {
    render(<RouteList />)
    expect(useFetch).toHaveBeenCalledWith(
      expect.objectContaining({ path: '/Routes' }),
      []
    )
  })
})
