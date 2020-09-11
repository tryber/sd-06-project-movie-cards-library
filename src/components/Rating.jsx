import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Rating extends Component {
  render() {
    const moviesRating = this.props.rating;
    return (
      <div>
        <p className="rating">{moviesRating}</p>
      </div>
    );
  }
}

Rating.propTypes = { rating: PropTypes.number.isRequired };
