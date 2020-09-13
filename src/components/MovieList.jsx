import React, { Component } from 'react';
import MovieCard from './MovieCard';
import data from '../data';

class MovieList extends Component {
  render() {
    return (
      <div>
        {data.map((film) => {
          return <MovieCard
          key={film.title}
          title={film.subtitle}
          storyline={film.storyline}
          rating={film.rating}
          
          />})}
      </div>
    )
  }
}

export default MovieList;
