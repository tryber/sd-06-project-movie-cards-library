import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard.jsx';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;

    return (
      <div class="movie-list">
        {movies.map((movie) => <MovieCard movie={movie} key={movie.title} />)}
      </div>
    );
  }
}


MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object) };
MovieList.defaultProps = { movies: {} };
// MovieList.propTypes = { movies: PropTypes.objectOf(PropTypes.object).isRequired };

export default MovieList;
