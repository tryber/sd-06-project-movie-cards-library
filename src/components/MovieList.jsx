import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <section>
        {movies.map((movie) => (
          <MovieCard
            key={movie.title}
            title={movie.title}
            subtitle={movie.subtitle}
            storyline={movie.storyline}
            rating={movie.rating}
            imagePath={movie.imagePath}
          />
        ))}
      </section>
    );
  }
}

//MovieList.propTypes = { movies: PropTypes.instanceOf(Array).isRequired };
MovieList.propTypes = { movies: PropTypes.shape({
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.string,
  imagePath: PropTypes.string
}).isRequired };

export default MovieList;
