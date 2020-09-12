// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    return (
      <span className="rating">{this.props.rating}</span>
    );
  }
}
Rating.propTypes = { rating: PropTypes.number.isRequired };

export default Rating;
