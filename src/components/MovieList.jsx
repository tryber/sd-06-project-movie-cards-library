import React from 'react';
import PropTypes from 'prop-types';
import './MovieList.css';
import MovieCard from './MovieCard.jsx';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    const moviesCollection = movies.map((movie) =>
      <MovieCard key={movie.title} movie={movie} />);
    return (
      <ul className="movie-list">
        { moviesCollection }
      </ul>
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.exact({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};
