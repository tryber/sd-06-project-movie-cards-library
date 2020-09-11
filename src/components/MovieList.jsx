import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    return this.props.movies.map(currentMovie => <MovieCard movie={currentMovie} key={currentMovie.title} />);
  }
}

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
