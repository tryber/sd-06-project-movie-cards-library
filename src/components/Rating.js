import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Rating extends Component {
  render() {
    return (
      <footer className="rating">{this.props.rating}</footer>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 1,
};

export default Rating;
