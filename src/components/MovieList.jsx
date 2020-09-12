import React, { Component } from 'react';
import PropTypes from 'prop-types';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return movies.map((movie) => <MovieCard movie={movie} key={movie.title} />);
  }
}

MovieList.propType = { movie: PropTypes.object };

MovieList.defaultProps = { movie: {} };

export default MovieList;
