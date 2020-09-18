import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    return (
      <div className="movie-list">
        {this.props.movies.map((mov) => <MovieCard key={mov.title}movie={mov} />)}
      </div>
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired),
}
