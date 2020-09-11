import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import '../App.css';

class MovieList extends Component {
  render() {
    const movies = this.props.movies;

    return (
      <div className="movie-list">{
        movies.map(item => <MovieCard movie={item} key={item.title} />)
      }</div>
    )
  }
}

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
