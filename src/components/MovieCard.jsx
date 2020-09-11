import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title = 'Movie', subtitle = '' } = this.props.movies;

    return <h1>oi {title}, {subtitle}</h1>;
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export default MovieCard;
