import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <section className="movie-list">
        {movies.map((movie) => {
          return <MovieCard
          key={movie.title}
          title={movie.title}
          subtitle={movie.subtitle}
          storyline={movie.storyline}
          rating={movie.rating}
          image={movie.imagePath}
          />
      })}
      </section>
    )
  }
}

export default MovieList;