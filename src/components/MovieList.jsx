import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import movies from '../data'
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard movie={movie} key={movie.title} />)};
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf().isRequired };

export default MovieList;
