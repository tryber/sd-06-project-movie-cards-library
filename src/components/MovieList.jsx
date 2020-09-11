import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types'

class MovieList extends Component {
  render() {
    const { movies } = this.props 
    
    return (
      <div>
        {movies.map((movie) =>
           (<MovieCard
             movie={movie}
             key={movie.title}
           />),
        )}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};

export default MovieList;

