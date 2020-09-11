import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    return (
        <h2>{this.props.title}</h2>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string,
}

export default MovieCard;