import React, { Component } from 'react';
// import movies from './data'
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie) => (<MovieCard key={movie.title} movie={movie} />))}
      </div>
    );
  }
}

export default MovieList;
