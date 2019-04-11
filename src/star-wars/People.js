import React from 'react'
import './People.css'

export default class People extends React.Component {
  render() {
    return (
      <div className='StarWarsPeople' data-testid='star-wars-people-container'>
        <h1 data-testid='header'>Star Wars People</h1>
        <p data-testid='loading-indicator'>Loading...</p>
      </div>
    )
  }
}
