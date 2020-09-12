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
            <MovieCard
              key={index}
              title={movie.title}
              subtitle={movie.subtitle}
              storyline={movie.storyline}
              rating={movie.rating}
              imagePath={movie.imagePath}
            />
          );
        })}
      </div>
    );
  }
}

export default MovieList;
