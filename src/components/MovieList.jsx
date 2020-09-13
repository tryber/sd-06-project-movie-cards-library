import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const moviesList = this.props.movies; 
    return (
      <div className="movie-list">
        {moviesList.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.shape(

  )
}

export default MovieList;
