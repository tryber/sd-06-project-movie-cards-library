// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

export default class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const movieList = movies.map((movie) => <MovieCard movie={movie} key={movie.title} />);
    return (
      <ul>
        {movieList}
      </ul>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf.isRequired };
