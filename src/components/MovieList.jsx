// implement MovieList component here
import React, { Component } from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <div>
        {movies.map((movie, index) => {
          return (
            <MovieCard movie={movie} />
          );
        })}
      </div>
    );
  }
}

export default MovieList;
