import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <MovieCard movie={movie} />
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(Object) };

MovieList.defaultProps = { movies: 'Kingsglaive' };

export default MovieList;
