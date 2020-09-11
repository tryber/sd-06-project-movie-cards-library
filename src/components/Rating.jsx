import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return <span>{rating}</span>;
  }
}

Rating.propTypes = { rating: PropTypes.number };
Rating.defaultProps = { rating: null };

export default Rating;