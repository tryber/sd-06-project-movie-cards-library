import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movieItem) => <MovieCard key={movieItem.title} movie={movieItem} />)}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(Object).isRequired };

export default MovieList;
