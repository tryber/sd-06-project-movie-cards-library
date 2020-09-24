import React from 'react';
import movies from '../data.js'
import MovieCard from './MovieCard'

class MovieList extends React.Component {

  render() {
    return (
      <div>
        {movies.map((movies) => (
          <MovieCard key={movies.title} movies={movies} />))}
      </div>
    )
  }
}

export default MovieList;
