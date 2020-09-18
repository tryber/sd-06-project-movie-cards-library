import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const rate = this.props;
    return (
      <div className="movie-card-rating">
        <p className="rating">
          {rate.rating}
        </p>
      </div>
    );
  }
}

export default Rating;

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
}
