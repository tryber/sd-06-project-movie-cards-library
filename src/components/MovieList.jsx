import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard.jsx';

class MovieList extends Component {
  render() {
    const movies = this.props.movies;

    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)};
      </div>
    );
  }
}

MovieList.deafultProps = { movies: [] };

MovieList.propTypes = { movies: PropTypes.shape([]) };

export default MovieList;
