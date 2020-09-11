import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { title } = this.props;
    return (
      <span>
        {title}
      </span>
    );
  }
}

MovieCard.propTypes = { title: PropTypes.string };
MovieCard.defaultProps = { title: null };

export default MovieCard;
