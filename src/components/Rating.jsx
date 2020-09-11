import React, { Component } from 'react';
import propTypes from 'prop-types';

class Rating extends Component {
  render() {
    return (
      <div className="movie-card-rating">
        <span className="rating">{this.props.rating}</span>
      </div>
    );
  }
}

Rating.defaultProps = { rating: 'rating' };

Rating.propTypes = { rating: propTypes.string };

export default Rating;
