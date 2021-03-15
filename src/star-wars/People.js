import React from 'react'
import './People.css'

export default class People extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      loading: true,
      people: [],
    }
  }

  componentDidMount() {
    this.mounted = true
    this.fetchPeople()
  }

  componentWillUnmount() {
    this.mounted = false
  }

  async fetchPeople() {
    let people = []
    let error = null

    this.setState({ people, error, loading: true })

    try {
      const response = await fetch('https://swapi.dev/api/people/')
      if (!response.ok) {
        new Error('Unable to fetch people')
      }

      const body = await response.json()

      people = body.results
    } catch (err) {
      error = err
    }

    if (!this.mounted) {
      return
    }

    this.setState({ people, error, loading: false })
  }

  render() {
    const { loading, people, error } = this.state

    return (
      <div className='StarWarsPeople' data-testid='star-wars-people-container'>
        <h1 data-testid='header'>Star Wars People</h1>

        {loading && (
          <p className='loading' data-testid='loading-indicator'>
            Loading...
          </p>
        )}

        {!loading && !error && (
          <ul data-testid='people-list'>
            {people.map(({ url, name }) => (
              <li key={url}>{name}</li>
            ))}
          </ul>
        )}

        {error && (
          <pre className='error' data-testid='error'>
            {error.toString()}
          </pre>
        )}
      </div>
    )
  }
}
