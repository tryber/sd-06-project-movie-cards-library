import React, { Component } from 'react';
import MovieCard from './MovieCard';
import movies from '../data.js';

class MovieList extends Component {
  render() {
    return (
      <div className="movieList">
        {movies.map((movie) => (
          <MovieCard
            key={movie.title}
            subtitle={movie.subtitle}
            storyline={movie.storyline}
            image={movie.imagePath}
          />
        ))}
      </div>
    );
  }
}

export default MovieList;
