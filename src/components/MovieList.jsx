import React, { Component } from 'react';
import Movies from '../data';
import MovieCard from './MovieCard';


class MovieList extends Component {
  render() {
    return (
      <div className="movie-list">
        {Movies.map((movie) => <MovieCard movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
