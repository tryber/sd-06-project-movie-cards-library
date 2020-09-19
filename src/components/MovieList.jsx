import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props
    return (movies.map((movie) => (
        <MovieCard movie={movie} />))
    )
  }
}

export default MovieList;