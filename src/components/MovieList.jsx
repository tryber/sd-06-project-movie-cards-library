import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <div>
        {this.props.movies.map(movieElem => (
          <MovieCard key={movieElem.title} movie={movieElem} />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.shape({
    map: PropTypes.object;
    }).isRequired,
};

export default MovieList;
