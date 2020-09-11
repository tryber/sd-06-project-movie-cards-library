import React, { Component } from 'react';
import MovieCard from './MovieCard.jsx';
import movies from '../data.js';
import '../App.css';

class MovieList extends Component {
  render() {
    return (
      <div className="movie-list">
        {movies.map((movie) => {
          return <MovieCard
          movie={movie}
          />
        })};
      </div>
    );
  }
}

export default MovieList;
