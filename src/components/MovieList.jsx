import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div className="movie-list">
        {movies.map((item) =>
          <MovieCard key={item.title} movie={item} />,
        )}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.element.isRequired };

export default MovieList;
