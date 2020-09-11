import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return movies.map((_, index) => <MovieCard key={movies[index].title} />);
  }
}

MovieList.defaultProps = { movies: [] };

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)) };

export default MovieList;
