import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return this.props.movies
      .map((currentMovie) => <MovieCard movie={currentMovie} key={currentMovie.title} />);
  }
}

MovieList.propTypes = { movies: PropTypes.array.isRequired };

export default MovieList;
