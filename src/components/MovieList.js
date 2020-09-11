import React from 'react';
import MovieCard from './MovieCard.jsx'
import movies from '../data.js'

class MovieList extends React.Component {
  render() {


    return (
      <div>
        <p>oi</p>
        {movies.map((movie) => {
          return <MovieCard movies={movie} />
        })}
      </div>
    )
  }
}

export default MovieList;
