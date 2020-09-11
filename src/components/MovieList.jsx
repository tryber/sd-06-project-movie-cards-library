import React, { Component } from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movielist">
        {movies.map((movie) => {
          return (
          <MovieCard 
            key={movie.title}
            title={movie.title}
            subtitle={movie.subtitle}
            storyline={movie.storyline}
            imagePath={movie.imagePath}
          />
          )
          })}
      </div>
    );
  }
}
export default MovieList;
