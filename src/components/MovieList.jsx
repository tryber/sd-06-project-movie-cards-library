import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard.jsx';

class MovieList extends Component {
  render() {
    const movies = this.props.movies;

    return (
      <div className="movie-list">
        {movies.map((movie) => {
        return <MovieCard
          key={movie.title}
          movie={movie}
          />
        })};
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array
}

export default MovieList;
