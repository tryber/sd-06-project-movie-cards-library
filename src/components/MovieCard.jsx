import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    return (
      <div />
    );
  }
}

MovieCard.defaultProps = { key: 'Undefined' };

MovieCard.propTypes = { key: PropTypes.string };

export default MovieCard;
