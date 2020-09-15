import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const movies = this.props.movies;
    return (
      <div className="movie-list">
        {movies.map((element) =>
          <MovieCard key={element.title} movie={element} />)}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.shape.isRequired };

export default MovieList;
