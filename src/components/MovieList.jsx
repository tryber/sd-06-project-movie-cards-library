import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="list">
        {this.props.movies.map((movie) => <MovieCard key={movies.movie.title} movie={movies.movie} />)}
      </div>
    );
  }
}

MovieList.propType = { movies: PropTypes.array }

export default MovieList;
