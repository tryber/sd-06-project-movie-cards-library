import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        {movies
          .map((movie) =>
            <MovieCard
              key={movie.title}
              title={movie.title}
              subtitle={movie.subtitle}
              storyline={movie.storyline}
              imagePath={movie.imagePath}
              rating={movie.rating}
            />,
          )
        }
      </section>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf.isRequired };

export default MovieList;
