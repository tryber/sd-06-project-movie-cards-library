import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((movie) =>
        <MovieCard
          key={movie.title}
          title={movie.title}
          subtitle={movie.subtitle}
          imagePath={movie.imagePath}
        />
      )
    );
  }
}

export default MovieList;
