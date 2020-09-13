import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const moviesList = this.props.movies;
    return (
      moviesList.map((movie) => (
        <MovieCard />
      ))
    );
  }
}

MovieList.propTypes = {
  moviesList: PropTypes.object,
};

export default MovieList;
