import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
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

MovieList.propTypes = { movies: PropTypes.string.isRequired };

export default MovieList;
