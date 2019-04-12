import React from 'react'
import { render, waitForElement } from 'react-testing-library'
import 'jest-dom/extend-expect'
import peopleFixture from './__fixtures__/people'
import People from './People'

describe('start-wars/People', () => {
  beforeEach(() => {
    fetch.mockResponse(JSON.stringify(peopleFixture))
  })

  it('has a title', () => {
    const { getByTestId } = render(<People />)
    expect(getByTestId('header')).toHaveTextContent('Star Wars People')
  })

  it('is loading', () => {
    const { getByTestId } = render(<People />)
    expect(getByTestId('loading-indicator')).toHaveTextContent('Loading...')
  })

  it('shows a list of people', async () => {
    const { getByTestId, queryByTestId } = render(<People />)
    expect(getByTestId('loading-indicator')).toHaveTextContent('Loading...')

    await waitForElement(() => getByTestId('people-list'))

    expect(queryByTestId('loading-indicator')).toBe(null)
    expect(getByTestId('people-list')).toHaveTextContent(
      peopleFixture.results.map(({ name }) => name).join(''),
    )
  })
})
