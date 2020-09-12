import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {

    return (
      <p className="rating">
        <br />
        {this.props.rating}
      </ p>
    );
  }
}

Rating.propTypes = {
  movie: PropTypes.shape({
    rating: PropTypes.string.isRequired,
  }).isRequired,
};

export default Rating;

