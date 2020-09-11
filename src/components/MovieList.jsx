import React, {Component} from 'react';
import PropTypes from 'prop-types'
import MovieCard from './MovieCard';

class MovieList extends Component {
  render () {
    const movies = this.props.movies;
    return (
    <div>
       {movies.map(element => 
       <MovieCard key={element.title} movie={element} />)} 
    </div>
    )
  }
}

MovieList.propTypes = {
  movies: PropTypes.array
}

export default MovieList;
