import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {movies.map((movie) =>
          <MovieCard key={movie.title} movie={movie} />,
        )}
      </div>
    );
  }
}

export default MovieList;
