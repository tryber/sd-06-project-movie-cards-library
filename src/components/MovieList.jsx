import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return this.props.map(currentMovie => <MovieCard movie={currentMovie} key={currentMovie.title} />);
  }
}

export default MovieList;
