import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const movieInformation = this.props.movies;
    return movieInformation.map((movie) => (
      <MovieCard key={movie.title} movie={movie} />
    ));
  }
}

export default MovieList;
