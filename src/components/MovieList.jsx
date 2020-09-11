import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import '../App.css';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <div className="movie-list">{
        movies.map(item => (<MovieCard movie={item} key={item.title}) />)
      }</div>
    );
  }
}

MovieList.propTypes = {
  movie: PropTypes.exact({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,

};

export default MovieList;
