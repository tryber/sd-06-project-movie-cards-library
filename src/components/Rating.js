import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    return (
      <footer className="rating">{this.props.rating}</footer>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
}

export default Rating;
