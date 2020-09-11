import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section className="movie-list">
        {this.props.movies.map((movie) => {
          return <MovieCard key={movie.title} movie={movie} />;
        })}
      </section>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.array
}

export default MovieList;
