import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <div>
        {this.props.movies.map((element) => <MovieCard movie={element} key={element.title} />)}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.shape(PropTypes.array).isRequired };

export default MovieList;
