import React from 'react'
import useFetch from 'use-http'

import { RouteItem } from './RouteItem'
import { renderWithWrapper } from '../utils/testUtils'

jest.mock('use-http', () => ({
  __esModule: true,
  default: jest.fn(() => mockUseFetchData),
}))

const mockUseFetchData = { data: [{ Text: 'Southbound', Value: '1' }] }
const testRoute = { Description: 'Secret', Route: '81', ProviderID: 'James' }

describe('RouteItem', () => {
  it('renders', () => {
    const { asFragment, getByText } = renderWithWrapper(
      <RouteItem item={testRoute} />
    )

    expect(getByText(/Secret/)).toBeInTheDocument()
    expect(getByText(/Southbound/)).toBeInTheDocument()

    expect(asFragment()).toMatchSnapshot()
  })

  it('invokes useFetch', () => {
    renderWithWrapper(<RouteItem item={testRoute} />)
    expect(useFetch).toHaveBeenCalledWith(
      expect.objectContaining({ path: '/Directions/81' }),
      []
    )
  })

  it('infers active state from the URL route', () => {
    const { container } = renderWithWrapper(<RouteItem item={testRoute} />, {
      route: '/81/2',
    })

    expect(container.querySelector('li')).toHaveStyle(
      'background-color: #00a896'
    )
  })

  it('clicking a Direction button changes the URL', () => {
    const { history, getByText } = renderWithWrapper(
      <RouteItem item={testRoute} />
    )

    getByText(/Southbound/).click()
    expect(history.location.pathname).toBe('/81/1')
  })
})
