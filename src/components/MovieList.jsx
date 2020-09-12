import React, { Component } from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return movies.map((movie) => <MovieCard movie={movie} key={movie.title}/>
    );
  }
}

export default MovieList;
