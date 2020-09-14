import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';


class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movies">
        { movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}
export default MovieList;

MovieList.propTypes = { movies: PropTypes.object }.isRequired;
