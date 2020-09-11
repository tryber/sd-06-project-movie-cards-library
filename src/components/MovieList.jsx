import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <div className="list">
        {this.props.movies.map(movie => {
          return <MovieCard key={movie.title} movie={movie} />
        })}
      </div>
    )
  }
};

export default MovieList;
