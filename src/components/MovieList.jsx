// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      movies.map((movie) => (
        <MovieCard
          key={movie.title}
          title={movie.title}
          subtitle={movie.subtitle}
          storyline={movie.storyline}
          imagePath={movie.imagePath}
          rating={movie.rating}
        />
      ))
    );
  }
}

export default MovieList;
