import React, { Component } from 'react';

import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  render() {
    return (
      <div className="movie-list">
        <p className="grid">
          {this.props.movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </p>
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf.isRequired };
