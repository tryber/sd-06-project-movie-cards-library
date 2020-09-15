import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.tittle} movie={movie} />)}
      </div>
    );
  }
}
MovieList.PropTypes = { movies: PropTypes.objectOf.isRequired };
export default MovieList;
