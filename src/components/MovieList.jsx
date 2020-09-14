import React, { Component } from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <div className="movie-list">
        {movies.map((mov) => <MovieCard key={mov.title}movie={mov} />)}
      </div>
    );
  }
}

export default MovieList;
