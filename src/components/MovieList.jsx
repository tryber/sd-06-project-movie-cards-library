import React, { Component } from 'react';
import MovieCard from './MovieCard'

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <section>
        {movies.map((movie, index) => {
          return (
            <MovieCard
              key={index.title}
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
