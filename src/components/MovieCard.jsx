import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title } = this.props.movies;

    return <h1>oi {title}</h1>;
  }
}

MovieCard.PropTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired
}

export default MovieCard;
