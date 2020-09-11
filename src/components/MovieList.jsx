import React, { Component } from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <div className="movielist">
        {movies.map((movie) => (
          <MovieCard
            key={movie.title}
            title={movie.title}
            subtitle={movie.subtitle}
            storyline={movie.storyline}
            imagePath={movie.imagePath}
          />
        ))}
      </div>
    );
  }
}
export default MovieList;
