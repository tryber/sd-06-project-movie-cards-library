import React, { Component } from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return movies.map((movie, index) => <MovieCard
      key={`Movie Title ${index}`}
      imagePath={movie.imagePath}
      title={movie.title}
      subtitle={movie.subtitle}
      storyLine={movie.storyline}
      rating={movie.rating}
    />);
  }
}

export default MovieList;
