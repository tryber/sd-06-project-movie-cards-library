import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const movies = this.props.movies;
    const movieList = movies.map((movie) => <MovieCard movie={movie} key={movie.title} />);
      return (
        <ul>
          {movieList}
        </ul>
      );
  };
}

MovieList.propType = { movies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)) };

MovieList.defaultProps = { movies: [] };

export default MovieList;
