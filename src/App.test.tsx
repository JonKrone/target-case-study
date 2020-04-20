import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders', () => {
    const { getByText, asFragment } = render(<App />)

    expect(getByText(/NextTrip tips/i)).toBeInTheDocument()
    expect(getByText(/Loading Routes/)).toBeInTheDocument()
    expect(getByText(/Please select/)).toBeInTheDocument()

    expect(asFragment()).toMatchSnapshot()
  })
})
