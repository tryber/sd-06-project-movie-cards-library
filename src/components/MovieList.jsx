import React, { Component } from 'react';
import MovieCard from './MovieCard';
import movies from '../data.js';

class MovieList extends Component {
  render() {
    return (
      <div className="movieList">
        {movies.map((movie) => (
          <MovieCard
            title={movie.title}
            subtitle={movie.subtitle}
            storyline={movie.storyline}
          />
        ))}
      </div>
    );
  }
}

export default MovieList;
