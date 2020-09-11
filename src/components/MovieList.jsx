// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const moviesList = movies
    .map((movie) => (
        <li key={movie.name}>
          <MovieCard />
        </li>
    ));
    return <div>{moviesList}</div>;
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}

export default MovieList;
