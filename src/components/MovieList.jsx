import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props
    return (
      <div className="movielist">
        {movies.map((movie) => (
          <MovieCard movies={movies} key={movie.title}/>
        ))}
      </div>
    );
  }
}

export default MovieList;
