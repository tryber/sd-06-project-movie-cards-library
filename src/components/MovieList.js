import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard.jsx';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;

    return (
      <div>
        <p>oi</p>
        {movies.map((movie) => <MovieCard movie={movie} key={movie.title} />)}
      </div>
    );
  }
}


MovieList.propTypes = { movies: PropTypes.objectOf(PropTypes.object) };

export default MovieList;
