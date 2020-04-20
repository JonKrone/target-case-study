import React from 'react'
import { renderWithWrapper } from '../utils/testUtils'

import StopList from './StopList'
import { Route } from 'react-router-dom'

jest.mock('use-http', () => ({
  __esModule: true,
  default: jest.fn(() => mockUseFetchResult),
}))

const mockUseFetchResult = {
  get: jest.fn(() => {}),
  data: [
    { Text: 'Stop 1', Value: '1' },
    { Text: 'Stop 2', Value: '2' },
  ],
}

describe('StopItem', () => {
  it('renders with no selection', () => {
    const { asFragment, getByText } = renderWithWrapper(<StopList />)

    expect(getByText(/select a route/)).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  it('receives the Direction and Stop to fetch from URL params', () => {
    const { asFragment } = renderWithWrapper(<StopList />, { route: '/81/1' })
  })

  it('renders with selection', () => {
    // I'm unsure whether it's better to mock react-router's `useParams` here,
    // or to wrap the StopList in a Route like this.
    const { asFragment, getByText, history } = renderWithWrapper(
      <Route path="/:route/:direction">
        <StopList />
      </Route>,
      {
        route: '/81/1',
      }
    )

    expect(getByText(/Stops/)).toBeInTheDocument()
    expect(getByText(/Southbound/)).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  it('fetches Stops', () => {
    const { asFragment, getByText } = renderWithWrapper(
      <Route path="/:route/:direction">
        <StopList />
      </Route>,
      {
        route: '/81/1',
      }
    )

    expect(mockUseFetchResult.get).toHaveBeenCalledWith('/Stops/81/1')
  })
})
