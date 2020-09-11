import React, { Component } from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends Component {
  render() {
    return (<div className="movie-list">
      {movies.map((movie, index) =>
        <MovieCard
          key={`Movie Title ${index + 1}`}
          imagem={movie.imagePath}
          title={movie.title}
          subtitle={movie.subtitle}
          description={movie.storyline}
          rating={movie.rating}
        />,
      )}
    </div>
    );
  }
}

export default MovieList;
