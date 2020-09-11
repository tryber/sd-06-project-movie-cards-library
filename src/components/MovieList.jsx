import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';


class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <section className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)};
      </section>
    );
  }
}

MovieList.defaultProps = { movies: [] };

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)) };

export default MovieList;
