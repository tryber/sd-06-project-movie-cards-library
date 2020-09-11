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
            title={movie.title}
            subtitle={movie.subtitle}
            storyline={movie.storyline}
            rating={movie.rating}
            imagePath={movie.imagePath}
          />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object) };
MovieList.defaultProps = { movies: null };

export default MovieList;
