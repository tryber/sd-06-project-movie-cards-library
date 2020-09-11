import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;

    return (
      <div className="movie-card-rating">
        <p className="rating">{rating}</p>
      </div>
    );
  }
}

Rating.propTypes = { Rating:PropTypes.number.isRequired }

export default Rating;
