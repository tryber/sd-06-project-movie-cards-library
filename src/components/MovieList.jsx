import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';


class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return(
      <section className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)};
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array,
  key: PropTypes.string,
  movie: PropTypes.object,
}

export default MovieList;
