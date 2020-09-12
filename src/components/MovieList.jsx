
// implement MovieList component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';


class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((ele) => <MovieCard key={ele.title} movie={ele}/>) }
      </div>
      );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};
export default MovieList;
