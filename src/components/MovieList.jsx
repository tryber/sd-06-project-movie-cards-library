import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import movie from '../types';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <section>
        {movies.map((movie) => (
          <MovieCard
            key={movie.title}
            title={movie.title}
            subtitle={movie.subtitle}
            storyline={movie.storyline}
            rating={movie.rating}
            imagePath={movie.imagePath}
          />
        ))}
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.shape(movie).isRequired
};

export default MovieList;
