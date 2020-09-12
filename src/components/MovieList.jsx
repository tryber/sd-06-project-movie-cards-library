import React from 'react';
import PropType from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return this.props.moviesFromData.map((movie) => <MovieCard key={movie.title} movies={movie} />);
  }
}

MovieList.propType = { moviesFromData: PropType.arrayOf(PropType.object) };
MovieList.defaultProps = { moviesFromData: {} };

export default MovieList;
