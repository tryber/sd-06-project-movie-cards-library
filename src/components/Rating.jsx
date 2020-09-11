import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  static defaultProps = {
    rating: ''
  };
  
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">{rating}</div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.string
};

export default Rating;
