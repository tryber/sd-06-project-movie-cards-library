import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movie) => {
          return (<MovieCard
            key={movie.title}
            url={movie.imagePath}
            title={movie.title}
            subtitle={movie.subtitle}
            synopsis={movie.storyline}
            rating={movie.rating} />); }
          )}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.any.isRequired };

export default MovieList;
