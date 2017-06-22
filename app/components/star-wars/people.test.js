import React from 'react'
import StarWarsPeople from './people'
import renderer from 'react-test-renderer'

test('Star Wars People', () => {
  const component = renderer.create(
    <StarWarsPeople />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
