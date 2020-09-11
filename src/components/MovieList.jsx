// implement MovieList component here
import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {

  render() {
    return movies.map((movieData) => <MovieCard movie={movieData} />);
  }
}

export default MovieList;
