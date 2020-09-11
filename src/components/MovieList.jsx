// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return movies.map((movieData) => <MovieCard key={movieData.title} movie={movieData} />);
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(Object).isRequired };

export default MovieList;
