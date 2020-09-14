// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movieData) => <MovieCard key={movieData.title} movie={movieData} />)}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(Object).isRequired };

export default MovieList;
