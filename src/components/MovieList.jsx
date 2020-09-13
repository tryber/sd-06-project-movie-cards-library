import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movie) => (<MovieCard key={movie.title} movie={movies} />),
        )}
      </div>
    );
  }
}

export default MovieList;

MovieList.propTypes = { movies: PropTypes.string.isRequired };
