import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const movies = this.props.movies;
    return (
      movies.map((movie) => (
        <MovieCard movies={movie} />
      ))
    );
  }
}

export default MovieList;
