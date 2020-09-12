import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return this.props.moviesFromData.map(movie => <MovieCard key="movie.title" movies={movie} />);
  }
}

export default MovieList;
