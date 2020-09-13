import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    return (
        <section className="movie-list">
          {this.props.movies.map((movie) => 
          <MovieCard key={movie.title} movie={movie} />)}
        </section>);
  }
}

MovieList.defaultProps = { 
    movies: [] };

MovieList.propTypes = { 
    movies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)) };

export default MovieList;
