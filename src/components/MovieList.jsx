import React, { Component } from 'react';
import MovieCard from './MovieCard';
import movies from '../data'

class MovieList extends Component {
  render() {
    return (
      <div>
          {
          movies.map((movie) => <MovieCard props={movie} />)
          }    
      </div>
    );
  }
}

export default MovieList;
