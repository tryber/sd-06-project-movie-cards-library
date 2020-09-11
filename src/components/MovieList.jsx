import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard.jsx';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movieElement) =>
          (<MovieCard
            key={movieElement.title}
            movie={movieElement}
          />),
        )}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieList;
