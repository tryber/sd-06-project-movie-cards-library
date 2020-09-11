import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Rating extends Component {
  render() {
    return (
      <div className="rating">(rating)</div>
    );
  }
}
Rating.porpTypes = { rating: PropTypes.number.isRequired };
export default Rating;
