import React from 'react'
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'
import People from './People'

describe('start-wars/People', () => {
  it('has a title', () => {
    const { getByTestId } = render(<People />)
    expect(getByTestId('header')).toHaveTextContent('Star Wars People')
  })

  it('is loading', () => {
    const { getByTestId } = render(<People />)
    expect(getByTestId('loading-indicator')).toHaveTextContent('Loading...')
  })
})
