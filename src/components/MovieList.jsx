import React, { Component } from 'react';
import movies from '../data.js';
import MovieCard from './MovieCard.jsx';

class MovieList extends Component {
  render() {
    return (
      movies.map((movie) =>
         (
           <div>
             <MovieCard
              //  key={index}
               title={movie.title}
               subtitle={movie.subtitle}
               storyline={movie.storyline}
               imagePath={movie.imagePath}
               rating={movie.rating}
             />
           </div>
      ))
    );
  }
}

export default MovieList;
