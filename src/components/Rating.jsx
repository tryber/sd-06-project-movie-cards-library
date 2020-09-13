import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    const ratingWidth = (rating * 80) / 5;
    const styleDiv = { width: ratingWidth };
    return (
      <div className="rating">
        (
        {rating}
        )
        <div className="stars-group">
          <div className="five-stars-gold" style={styleDiv} />
          <div className="five-stars-silver" />
        </div>
      </div>
    );
  }
}

Rating.defaultProps = { rating: 0 };

Rating.propTypes = { rating: PropTypes.number };

export default Rating;
