// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import Rating from './Rating';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const moviesList = movies
    .map((movie) => (
        <li key={movie.title}>
          <MovieCard 
          title={movie.title}
          subtitle={movie.subtitle}
          storyline={movie.storyline}
          imagePath={movie.imagePath}
          />
          <Rating rating={movie.rating} />
        </li>
    ));
    return <div>{moviesList}</div>;
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}

export default MovieList;
