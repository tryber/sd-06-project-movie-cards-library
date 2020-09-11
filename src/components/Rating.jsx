import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  static defaultProps = {
    rating: null,
  }
  render() {
    const { rating } = this.props;
    return (
      <small className="rating">
        {rating}
      </small>
    );
  }
}

Rating.propTypes = { rating: PropTypes.number };

export default Rating;
