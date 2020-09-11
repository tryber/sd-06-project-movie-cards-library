import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.title} />
        ))}
      </>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.exact({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};
