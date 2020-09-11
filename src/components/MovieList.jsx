import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const { movies } = this.props
    return (
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
          key={movie.title}
          movie={movie}/>
        ))}
      </div>
    );
  }
}

MovieList.propTypes = { movie: PropTypes.arrayOf.isRequired };

export default MovieList;