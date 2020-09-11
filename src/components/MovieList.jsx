import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie) => {
          const { title } = movie;
          return (
            <MovieCard key={title} movie={movie} />
          );
        })}
      </div>
    );
  }
}

// MovieList.propTypes = { movies: PropTypes.object };

export default MovieList;
