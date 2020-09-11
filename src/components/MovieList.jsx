import React, { Component } from 'react';
import MovieCard from './MovieCard';

import movies from '../data';

class MovieList extends Component {
  render() {
    return (
        <div>
          {movies.map((movie) => {
            return (<MovieCard
              key={movie.title}
              imagePath={movie.imagePath}
              title={movie.title}
              subtitle={movie.subtitle}
              storyline={movie.storyline}
            />);
          })}
        </div>
    );
  }
}

export default MovieList;

