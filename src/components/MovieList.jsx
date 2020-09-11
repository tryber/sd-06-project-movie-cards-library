import React, { Component } from 'react';
import MovieCard from './MovieCard.jsx';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const movies = this.props.movies;

    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard
            key={movie.title}
            movie={movie}
            />
        )};
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array
}

export default MovieList;
