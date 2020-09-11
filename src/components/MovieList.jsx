import React from 'react';
import MovieCard from './MovieCard'
import movies from '../data';

class MovieList extends React.Component {
  render() {
    const { movies }  = this.props
    return (
      <div>
        {this.props.movies.map(movie => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    )
  }
}

export default MovieList;
