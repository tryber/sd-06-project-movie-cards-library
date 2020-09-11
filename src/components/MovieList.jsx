// implement MovieList component here
import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
        movies.map((movie) => (
          <MovieCard movie={movie} key={movie.title} />
        ))
    );
  }
}

MovieList.propTypes = { movies: propTypes.arrayOf(propTypes.object).isRequired };


export default MovieList;
