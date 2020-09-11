import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props.movies;
    return (
      <div className="movie-list">
          {movies.map(movie => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

MovieList.propTypes = { movie: PropTypes.arrayOf(PropTypes.object) };

MovieList.defaultProps = { movie: [] };

export default MovieList;
