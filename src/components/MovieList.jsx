import React, { Component } from 'react';
import MovieCard from './MovieCard';
import movies from './data.js'

class App extends Component{
  render() {
      <div>
        {
        movies.map((movie) => <MovieCard props={movie} />)
        }    
      </div>
  }
}

export default MovieList;
