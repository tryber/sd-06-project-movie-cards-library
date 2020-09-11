import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        {movies.map(movie => {
          return (
            <MovieCard
              key={movie.title}
              title={movie.title}
              subtitle={movie.subtitle}
              storyline={movie.storyline}
              rating={movie.rating}
              imagePath={movie.imagePath}
            />
          );
        })}
      </section>
    );
  }
}

export default MovieList;
