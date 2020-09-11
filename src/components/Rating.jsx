import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;

    return <div className="movie-card-rating"><div className="rating">{rating}</div></div>;
  }
}

export default Rating;

Rating.propTypes = { rating: PropTypes.string.isRequired };
