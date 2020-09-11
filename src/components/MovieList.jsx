import React, { Component } from 'react'
import movies from './data'
import MovieCard from '/.MovieCard'


class MovieList extends Component {
  render() {
    return (
      <div>
        {movies.map((element, index) => {
          return <MovieCard
            imagePath={element.imagePath}
            title={element.title}
            subtitle={element.subtitle}
            storyline={element.storyline}
          />
        })
        }
      </div>
    )
  }
}

export default MovieList
