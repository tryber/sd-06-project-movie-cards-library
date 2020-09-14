import React, { Component } from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (<div>
      <MovieCard />
    </div>
    );
  }
}

export default MovieList;