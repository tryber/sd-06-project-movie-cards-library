import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.title}
            url={movie.imagePath}
            title={movie.title}
            subtitle={movie.subtitle}
            synopsis={movie.storyline}
            rating={movie.rating} />
        )
          )}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf.isRequired };

export default MovieList;
