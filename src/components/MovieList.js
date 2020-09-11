import PropTypes, { object } from 'prop-types';
import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <div className="movie-list">
        {this.props.movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}
MovieList.defaultProps = { movies: [] };

MovieList.propTypes = { movies: PropTypes.array };

export default MovieList;
