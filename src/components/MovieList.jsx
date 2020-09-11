import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movielist">
        {movies.map((movie) => (
          <MovieCard
            key={movie.title}
            movie={movie}
          />
        ))}
      </div>
    );
  }
}
export default MovieList;

MovieList.propTypes = { movies: PropTypes.arrayOf.isRequired };