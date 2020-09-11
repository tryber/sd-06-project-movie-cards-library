import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    return (
      <div>
        <div className="rating">{this.props.rating}</div>
      </div>
    );
  }
}

Rating.propTypes = { rating: PropTypes.number.isRequired, };

export default Rating;
