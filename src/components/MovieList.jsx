import React from 'react';
import PropType from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return this.props.movies.map((movie) => <MovieCard key={movie.title} movie={movie} />);
  }
}

MovieList.propType = { movies: PropType.arrayOf(PropType.object) };
MovieList.defaultProps = { movies: {} };

export default MovieList;
