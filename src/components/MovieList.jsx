import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="container">
        {movies.map((movie) => {
          return <MovieCard key={movie.title} url={movie.imagePath} title={movie.title} subtitle={movie.subtitle} synopsis={movie.storyline} rating={movie.rating} />
        })}
      </div>
    )
  };
}

export default MovieList;
