import React, { Component } from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (<div className="movie-list">
      <MovieCard
        title={movies[0].title}
        subtitle={movies[0].subtitle}
        storyline={movies[0].storyline}
        imagePath={movies[0].imagePath}
        rating={movies[0].rating}
      />
    </div>
    );
  }
}

export default MovieList;
