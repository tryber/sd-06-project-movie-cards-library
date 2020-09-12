import React, { Component } from 'react';
import MovieCard from './MovieCard';
import propType from 'prop-types';

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

MovieList.propTypes = {
  movies: propType.object,
};

MovieList.defaultProps = {
  movies: '',
};

export default MovieList;
